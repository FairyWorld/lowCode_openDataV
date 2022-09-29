import { ScriptType } from '@/components/ScriptsEdtor/eunm'
import { notification } from '../message'
import { CallbackType } from './type'

/**
 * 创建函数
 * @param type 函数类型
 * @param code 函数代码
 */
export function makeFunction(
  type: ScriptType,
  code: string,
  args: string[]
): CallbackType | undefined {
  switch (type) {
    case ScriptType.Javascript:
      return makeJavaScriptsFunction(code, args)
  }
}

function makeJavaScriptsFunction(code: string, args: string[]): CallbackType {
  try {
    const handler = new Function(...args, code)
    return { handler }
  } catch (err: any) {
    notification.error({
      title: '脚本语法错误',
      content: err.message,
      duration: 10000,
      closable: false
    })
    return { error: err }
  }
}
