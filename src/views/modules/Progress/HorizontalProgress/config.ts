import { ComponentGroup } from '@/enum'
import type { ComponentInfo, GroupType, ComponentOptions } from '@/types/component'

const component: ComponentInfo = {
  component: 'HorizontalProgress',
  label: '横向进度条1',
  group: ComponentGroup.Progress,
  propValue: {
    history: 'https://data.com',
    datatag: 'CMJ_CMJQYSD',
    maxValue: 150,
    color1: '#3DE7C9',
    color2: '#00BAFF',
    borderWidth: 3,
    borderGap: 3,
    lineDash: '5,1',
    textColor: '#fff',
    borderRadius: 5,
    localGradient: false,
    formatter: '{value}%',
    fontSize: 15,
    rotate: 0
  },
  icon: 'wenben',
  style: {
    width: 300,
    height: 100
  }
}

const style: Array<GroupType> = []

const attrs: Array<GroupType> = [
  {
    name: '数据配置',
    uid: 'data',
    children: [
      {
        key: 'history',
        label: '历史数据地址',
        type: 'text'
      },
      {
        key: 'datatag',
        label: '数据标签',
        type: 'text'
      },
      {
        key: 'maxValue',
        label: '最大值',
        type: 'number'
      }
    ]
  },
  {
    name: '属性配置',
    uid: 'attr',
    children: [
      {
        key: 'color1',
        label: '颜色1',
        type: 'color'
      },
      {
        key: 'color2',
        label: '颜色2',
        type: 'color'
      },
      {
        key: 'borderWidth',
        label: '边框宽度',
        type: 'number'
      },
      {
        key: 'borderGap',
        label: '边框间隔',
        type: 'number'
      },
      {
        key: 'lineDash',
        label: '线条间隙',
        type: 'text'
      },
      {
        key: 'fontSize',
        label: '字体大小',
        type: 'number'
      },
      {
        key: 'textColor',
        label: '文字颜色',
        type: 'color'
      },
      {
        key: 'borderRadius',
        label: '圆角',
        type: 'number'
      },
      {
        key: 'localGradient',
        label: '局部渐变',
        type: 'switch'
      },
      {
        key: 'formatter',
        label: '文字格式化',
        type: 'text'
      },
      {
        key: 'rotate',
        label: '旋转角度',
        type: 'number'
      }
    ]
  }
]

const componentOptions: ComponentOptions = { component, style, attrs }
export default componentOptions
