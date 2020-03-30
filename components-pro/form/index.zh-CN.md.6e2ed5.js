(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{1621:function(t,e){t.exports={content:["section",["p","表单。"],["h2","何时使用"]],meta:{category:"Pro Components",cols:1,subtitle:"表单",type:"Data Entry",title:"Form",filename:"components-pro/form/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#何时使用",title:"何时使用"},"何时使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["h3","Form"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","action"],["td","表单提交请求地址，当设置了 dataSet 时，该属性无作用"],["td","string"],["td"]],["tr",["td","method"],["td","表单提交的 HTTP Method, 可选值 ",["code","GET"]," ",["code","POST"]],["td","string"],["td","POST"]],["tr",["td","target"],["td","表单提交的目标，当表单设置了设置 target 且没有 dataSet 时作浏览器默认提交，否则作 Ajax 提交"],["td","string"],["td"]],["tr",["td","processParams"],["td","Ajax 提交时的参数回调"],["td","(event) => object"],["td"]],["tr",["td","labelWidth"],["td","内部控件的标签宽度。如果为数组则分别对应每列的标签宽度。数组长度不够列数，以默认值补全, 响应式参考",["a",{title:null,href:"#Form Responsive"},"Responsive"]],["td","number","|"," number[] ","|"," object"],["td","100"]],["tr",["td","labelAlign"],["td","标签文字对齐方式, 只在 labelLayout 为",["code","horizontal"],"时起作用，可选值： ",["code","left"]," ",["code","center"]," ",["code","right"],", 响应式参考",["a",{title:null,href:"#Form Responsive"},"Responsive"]],["td","string ","|"," object"],["td","right"]],["tr",["td","labelLayout"],["td","标签位置, 可选值 ",["code","horizontal"]," ",["code","vertical"]," ",["code","placeholder"]," ",["code","float"]," ",["code","none"],", 响应式参考",["a",{title:null,href:"#Form Responsive"},"Responsive"]],["td","string ","|"," object"],["td","horizontal"]],["tr",["td","dataIndex"],["td","对照 record 在 DataSet 中的 index"],["td","number"],["td","ds.currentIndex"]],["tr",["td","record"],["td","对照 record, 优先级高于 dataSet 和 dataIndex"],["td","Record"],["td"]],["tr",["td","columns"],["td","列数, 响应式参考",["a",{title:null,href:"#Form Responsive"},"Responsive"]],["td","number ","|"," object"],["td","1"]],["tr",["td","pristine"],["td","显示原始值"],["td","boolean"],["td","false"]],["tr",["td","onSubmit"],["td","提交回调"],["td","Function"],["td"]],["tr",["td","onReset"],["td","重置回调"],["td","Function"],["td"]],["tr",["td","onSuccess"],["td","提交成功回调"],["td","Function"],["td"]],["tr",["td","onError"],["td","提交失败回调"],["td","Function"],["td"]]]],["p","更多属性请参考 ",["a",{title:null,href:"/components-pro/core/#DataSetComponent"},"DataSetComponent"],"。"],["h3","Form Layout"],["h4","Form 子元素属性"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","rowSpan"],["td","表单下控件跨越的行数"],["td","number"],["td","1"]],["tr",["td","colSpan"],["td","表单下控件跨越的列数"],["td","number"],["td","1"]],["tr",["td","newLine"],["td","另起新行"],["td","boolean"],["td"]],["tr",["td","label"],["td","标签"],["td","string ","|"," ReactNode"],["td"]],["tr",["td","name"],["td","字段名。可获取 DataSet 的字段属性，如 label，require 等，一般用于控件外需要嵌套其他元素时使用。"],["td","string"],["td"]],["tr",["td","labelWidth"],["td","标签宽度。同列控件中标签宽度取最大设定值。子元素的 labelWidth 无法响应式。"],["td","number"],["td"]]]],["h3","Form Responsive"],["p","响应式可设置参数",["code","columns"]," ",["code","labelWidth"]," ",["code","labelAlign"]," ",["code","labelLayout"]," 为一个键值对。"],["p","键值可参考 ",["a",{title:null,href:"/components/responsive/#BreakPoints"},"Responsive BreakPoints"],"。"]]}}}]);