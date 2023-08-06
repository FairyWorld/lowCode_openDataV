<template>
  <div :class="['dv-tabs', modeStyle]">
    <div :class="['tabs-nav', modeStyle]">
      <div
        v-for="(item, index) in labels"
        :key="index"
        class="tabs-tab"
        :class="{ active: getShow(index), [modeStyle]: true }"
        :style="labelStyle"
        @click="tabsClick(index)"
      >
        {{ item }}
      </div>
    </div>
    <div v-if="!editMode" ref="content" class="tabs-content">
      <Group
        :id="'component' + content.id"
        class="component"
        :style="getComponentStyle(content)"
        :component="content"
      />
    </div>
    <div v-else ref="contentRef" class="tabs-content" @drop="handleDrop" @dragover="handleDragOver">
      <Shape
        v-if="isShow(content.display || false)"
        :id="'shape' + content.id"
        :defaultStyle="content.style"
        :style="getShapeStyle(content)"
        :active="content.id === (curComponent || {}).id"
        :info="content"
        :class="{ lock: content.locked }"
        :isInner="true"
        :index="activeKey"
      >
        <Group
          :id="'component' + content.id"
          class="component"
          :style="getInnerComponentShapeStyle(content)"
          :component="content"
        />
      </Shape>
    </div>
  </div>
</template>
<script setup lang="ts">
import GroupComponent from 'open-data-v/designer/components/Group/config'
import Group from 'open-data-v/designer/components/Group/Group.vue'
import Shape from 'open-data-v/designer/Editor/Shape'
import useCanvasState from 'open-data-v/designer/state/canvas'
import {
  filterStyle,
  getComponentStyle,
  getInnerComponentShapeStyle,
  toPercent,
  uuid
} from 'open-data-v/designer/utils'
import { DataMode } from 'open-data-v/enum/data'
import type { CustomComponent } from 'open-data-v/models'
import { useProp } from 'open-data-v/models/hooks'
import { computed, ref, watch } from 'vue'

import type TabsComponent from './config'
import type { Tabs } from './type'

const props = defineProps<{
  component: TabsComponent
}>()

const canvasState = useCanvasState()
const editMode = computed<boolean>(() => canvasState.isEditMode)
const { propValue } = useProp<Tabs>(props.component)
const labels = computed<Array<string>>(() => {
  return propValue.label.items || []
})

watch(
  () => propValue.label.mode,
  () => {
    const len = (propValue.label.items || []).length
    const mode = propValue.label.mode || 'horizontal'
    const labelHeight = propValue.style.height
    const { top, left, width, height } = props.component.style
    for (let i = 0; i < len; i++) {
      if (!props.component.subComponents[i]) {
        const groupConfig = new GroupComponent(uuid())
        if (mode === 'horizontal') {
          groupConfig.change(['position', 'top'], top + labelHeight, 'style')
          groupConfig.change(['position', 'left'], left, 'style')
          groupConfig.change(['position', 'width'], width, 'style')
          groupConfig.change(['position', 'height'], height - labelHeight, 'style')
        } else {
          groupConfig.change(['position', 'top'], top, 'style')
          groupConfig.change(['position', 'left'], left + labelHeight, 'style')
          groupConfig.change(['position', 'width'], width - labelHeight, 'style')
          groupConfig.change(['position', 'height'], height, 'style')
        }
        groupConfig.parent = props.component
        groupConfig.groupStyle = {
          gleft: 0,
          gtop: toPercent((groupConfig.positionStyle.top - top) / height),
          gwidth: 100,
          gheight: toPercent(groupConfig.positionStyle.height / height),
          grotate: props.component.positionStyle.rotate || 0
        }
        props.component.updateChild(i, groupConfig)
      } else {
        const groupConfig = props.component.subComponents[i]
        if (mode === 'horizontal') {
          groupConfig.change(['position', 'top'], top + labelHeight, 'style')
          groupConfig.change(['position', 'left'], left, 'style')
        } else {
          groupConfig.change(['position', 'top'], top, 'style')
          groupConfig.change(['position', 'left'], left + labelHeight, 'style')
        }
        groupConfig.groupStyle = {
          gleft: toPercent((groupConfig.positionStyle.left - left) / width),
          gtop: toPercent((groupConfig.positionStyle.top - top) / height),
          gwidth: toPercent(groupConfig.positionStyle.width / width),
          gheight: toPercent(groupConfig.positionStyle.height / height),
          grotate: groupConfig.groupStyle!.grotate || 0
        }
      }
    }
  },
  {
    immediate: true
  }
)

const getShapeStyle = (item: CustomComponent) => {
  if (item.groupStyle?.gheight) {
    return filterStyle(item.groupStyle, ['gtop', 'gleft', 'gwidth', 'gheight', 'grotate'])
  } else {
    return filterStyle(item.style, ['top', 'left', 'width', 'height', 'rotate'])
  }
}

const curComponent = computed(() => canvasState.curComponent)
const activeKey = ref<number>(0)

const isShow = (display: boolean): boolean => {
  return !(canvasState.isEditMode && !display)
}

const tabsClick = (index: number) => {
  activeKey.value = index
}
const getShow = (index: number) => {
  return activeKey.value === index
}

const modeStyle = computed<string>(() => {
  return propValue.label.mode ? propValue.label.mode : 'horizontal'
})
const contentRef = ref<HTMLElement | null>(null)
const content = computed<InstanceType<typeof GroupComponent>>(() => {
  return props.component.subComponents[activeKey.value]
})

// const content = ref<InstanceType<typeof GroupComponent>>()

const labelStyle = computed<Record<string, any>>(() => {
  return {
    [propValue.label.mode === 'horizontal' ? 'height' : 'width']: `${propValue.style.height}px`,
    color: propValue.style.color,
    fontSize: `${propValue.style.fontSize}px`,
    weight: `${propValue.style.fontWeight}px`,
    family: `${propValue.style.fontWeight}px`
  }
})
const handleDragOver = (e) => {
  e.preventDefault()
  e.dataTransfer.dropEffect = 'copy'
}

const handleDrop = async (e) => {
  e.preventDefault()
  e.stopPropagation()
  const componentName = e.dataTransfer.getData('componentName')
  if (componentName) {
    const component: CustomComponent = new canvasState.components[componentName]()
    if (component.dataMode === DataMode.UNIVERSAL) {
      component.loadDemoData()
    }
    const { top, left } = document.querySelector('#editor')!.getBoundingClientRect()
    const y = (e.pageY - top) / canvasState.scale
    const x = (e.pageX - left) / canvasState.scale
    const parentStyle = props.component.subComponents[activeKey.value].style
    component.change(['position', 'top'], y, 'style')
    component.change(['position', 'left'], x, 'style')
    component.groupStyle = {
      gleft: toPercent((component.positionStyle.left - parentStyle.left) / parentStyle.width),
      gtop: toPercent((component.positionStyle.top - parentStyle.top) / parentStyle.height),
      gwidth: toPercent(component.positionStyle.width / parentStyle.width),
      gheight: toPercent(component.positionStyle.height / parentStyle.height),
      grotate: component.positionStyle.rotate || 0
    }
    component.parent = props.component
    props.component.subComponents[activeKey.value].appendChild(component)
  }
}
</script>

<style lang="less" scoped>
.dv-tabs {
  display: flex;
  align-content: center;
  &.horizontal {
    flex-direction: column;
  }
  &.vertical {
    flex-direction: row;
  }
  .tabs-nav {
    display: flex;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: space-between;
    align-items: center;
    &.horizontal {
      flex-direction: row;
    }
    &.vertical {
      flex-direction: column;
    }
    .tabs-tab {
      font-size: 14px;
      line-height: 40px;
      text-align: center;
      flex: 1;
      &.horizontal {
        border-bottom: 2px solid;
      }
      &.vertical {
        border-right: 2px solid;
        writing-mode: vertical-rl;
      }
    }
    .tabs-tab.active {
      color: #2080f0;
      &.horizontal {
        border-bottom: #2080f0 2px solid;
      }
      &.vertical {
        border-right: #2080f0 2px solid;
      }
    }
  }
  .tabs-content {
    // border-bottom: 1px solid;
    flex: 1;
    width: 100%;
    .component {
      position: static !important;
    }
  }
}
</style>