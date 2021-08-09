import { play } from './cross-reference.js'

try {
  play()
} catch (e) {
  console.error('交叉引用', e)
}

// 交叉引用
export const otherPlay = () => {
  console.log('cross-reference-other-play')
}
