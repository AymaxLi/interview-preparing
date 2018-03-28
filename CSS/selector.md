# 选择器

## 优先级
  优先级递增：
  1. **类型选择器**（type selectors）（例如, h1）和 **伪元素**（pseudo-elements）（例如, ::before）
  2. **类选择器**（class selectors） (例如,.example)，**属性选择器**（attributes selectors）（例如, [type="radio"]），**伪类**（pseudo-classes）（例如, :hover）
  3. **ID选择器**（例如, #example）
  4. 给元素添加的**内联样式** (例如, style="font-weight:bold") 总会覆盖外部样式表的任何样式 ，因此可看作是具有最高的优先级。
  5. **!important**，当两条相互冲突的带有 !important 规则的声明被应用到相同的元素上时，拥有更大优先级的声明将会被采用。

  通配选择符（universal selector）(*), 关系选择符（combinators） (+, >, ~, ' ')  和 否定伪类（negation pseudo-class）(:not()) 对优先级没有影响。（但是，在 :not() 内部声明的选择器是会影响优先级）。