import type { ToolBarItemType } from './components'
import { CodeEditor, Group, ToolBar, ToolBarItem, XIcon } from './components'
import DemoDataPlugin from './data/DemoData'
import type { StoreComponentData } from './db'
import Shape from './Editor/Shape'
import {
  ComponentGroupList,
  ContainerType,
  DataMode,
  EditMode,
  FormType,
  GroupType,
  PixelEnum
} from './enum'
import useComponentPlugin from './loadPlugin'
import useEmpty from './modules/Empty'
import Container from './modules/form/Container'
import Designer from './pages/designer/Designer.vue'
import Previewer from './pages/perviewer/viewer.vue'
import Directive from './plugins/directive'
import type { ContextmenuItem } from './plugins/directive/contextmenu'
import {
  DataSlotter,
  useActionState,
  useCanvasState,
  useClipBoardState,
  useDataState,
  useScriptState,
  useSnapshotState
} from './state'
import type { CanvasData, CanvasStyleData } from './state/type'
import { exportCanvas, importCanvas, recoveryDraft, setShowEm, undo } from './toolbars'
import type {
  ComponentDataType,
  ComponentItem,
  ComponentStyle,
  CustomFormSchema,
  DOMRectStyle,
  FormItemProps,
  GroupStyle,
  InputFormSchema,
  InputNumberFormSchema,
  Location,
  MetaContainerItem,
  MetaForm,
  ModalFormSchema,
  Position,
  RadioFormSchema,
  SelectFormSchema,
  SwitchFormSchema,
  Vector
} from './type'
import { createComponent, handleLogger } from './utils'

export {
  CodeEditor,
  ComponentGroupList,
  Container,
  ContainerType,
  createComponent,
  DataMode,
  DataSlotter,
  DemoDataPlugin,
  Designer,
  Directive,
  EditMode,
  exportCanvas,
  FormType,
  Group,
  GroupType,
  handleLogger,
  importCanvas,
  PixelEnum,
  Previewer,
  recoveryDraft,
  setShowEm,
  Shape,
  ToolBar,
  ToolBarItem,
  undo,
  useActionState,
  useCanvasState,
  useClipBoardState,
  useComponentPlugin,
  useDataState,
  useEmpty,
  useScriptState,
  useSnapshotState,
  XIcon
}
export type {
  CanvasData,
  CanvasStyleData,
  ComponentDataType,
  ComponentItem,
  ComponentStyle,
  ContextmenuItem,
  CustomFormSchema,
  DOMRectStyle,
  FormItemProps,
  GroupStyle,
  InputFormSchema,
  InputNumberFormSchema,
  Location,
  MetaContainerItem,
  MetaForm,
  ModalFormSchema,
  Position,
  RadioFormSchema,
  SelectFormSchema,
  StoreComponentData,
  SwitchFormSchema,
  ToolBarItemType,
  Vector
}
