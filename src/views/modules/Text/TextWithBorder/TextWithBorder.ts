import { ComponentGroup } from '@/enum'
import type { ComponentInfo, GroupType, ComponentOptions } from '@/types/component'
const component: ComponentInfo = {
  component: 'TextWithBorder',
  label: '带边框的文本',
  group: ComponentGroup.TEXT,
  propValue: {
    TextValue: '带边框的文本',
    history: '',
    dataTag: '',
    borderWidth: '1',
    borderStyle: 'solid',
    borderColor: '#0266C6',
    color: '#ffffff',
    justifyContent: 'center',
    fontSize: 26
  },
  style: {
    width: 200,
    height: 36
  }
}

const style: Array<GroupType> = []
const attrs: Array<GroupType> = [
  {
    name: '基础属性',
    uid: 'basic',
    children: [
      {
        key: 'TextValue',
        label: '文本',
        type: 'string'
      },
      {
        key: 'borderWidth',
        label: '边框宽度',
        type: 'number'
      },
      {
        key: 'borderStyle',
        label: '边框样式',
        type: 'select',
        selectOptions: [
          { value: 'solid', label: 'solid' },
          { value: 'dotted', label: 'dotted' },
          { value: 'dashed', label: 'dashed' }
        ]
      },
      {
        key: 'borderColor',
        label: '边框颜色',
        type: 'color'
      },
      {
        key: 'color',
        label: '字体颜色',
        type: 'color'
      },
      {
        key: 'fontSize',
        label: '字体大小',
        type: 'number'
      },
      {
        key: 'justifyContent',
        label: '对齐方式',
        type: 'select',
        selectOptions: [
          { value: 'left', label: 'left' },
          { value: 'right', label: 'right' },
          { value: 'center', label: 'center' }
        ]
      }
    ]
  },
  {
    name: '数据项配置',
    uid: 'datas',
    children: [
      {
        key: 'dataTag',
        label: '对应的path点',
        type: 'text'
      },
      {
        key: 'history',
        label: '历史数据地址',
        type: 'text'
      }
    ]
  }
]
const componentOptions: ComponentOptions = {
  component,
  style,
  attrs
}
export default componentOptions
