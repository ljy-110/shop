<template>
    <div>
        <div class="right-add">
            <el-cascader :options="options" clearable class="right-add-aa"></el-cascader>
        </div>
    </div>
</template>

<style lang="css" scoped>
.right-add{
    width: 100%;
    height: 60px;
    margin: 5px 0 5px 0;
}
.right-add-aa{
  width: 300px;
  height: 42px;
}
.right-add-aa >>> .el-input__suffix{
  top: -5px;
}
.body >>> .el-popper{
  margin: -8px 0;
}
</style>

<script>
export default {
    data() {
        return {
            options: [{
          value: 'zhinan',
          label: '广西壮族自治区',
          children: [{
            value: 'shejiyuanze',
            label: '玉林市',
            children: [{
              value: 'beiliu',
              label: '北流市'
            }, {
              value: 'fankui',
              label: '博白县'
            }, {
              value: 'xiaolv',
              label: '福绵区'
            }, {
              value: 'xiaolv',
              label: '容县'
            }, {
              value: 'xiaolv',
              label: '兴业县'
            }, {
              value: 'xiaolv',
              label: '玉州区'
            }, {
              value: 'kekong',
              label: '陆川县'
            }]
          }, {
            value: 'daohang',
            label: '北海市',
            children: [{
              value: 'cexiangdaohang',
              label: '海城区'
            }, {
              value: 'dingbudaohang',
              label: '银海区'
            }, {
              value: 'dingbudaohang',
              label: '合浦县'
            }, {
              value: 'dingbudaohang',
              label: '铁山港区'
            }]
          }]
        }, {
          value: 'zujian',
          label: '广东省',
          children: [{
            value: 'basic',
            label: '广州市',
            children: [{
              value: 'layout',
              label: '白云区'
            }, {
              value: 'color',
              label: '从化区'
            }, {
              value: 'typography',
              label: '天河区'
            }, {
              value: 'icon',
              label: '花都区'
            }, {
              value: 'button',
              label: '海珠区'
            }]
          }, {
            value: 'form',
            label: '云浮市',
            children: [{
              value: 'radio',
              label: '罗定市'
            }, {
              value: 'checkbox',
              label: '新兴县'
            }, {
              value: 'input',
              label: '郁南县'
            }, {
              value: 'input-number',
              label: '云安区'
            }, {
              value: 'select',
              label: '云城区'
            }]
          }, {
            value: 'data',
            label: '潮州市',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: '东莞市',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: '佛山市',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: '河源市',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '湖北省',
          children: [{
            value: 'axure',
            label: '武汉市'
          }, {
            value: 'sketch',
            label: '黄冈市'
          }, {
            value: 'jiaohu',
            label: '黄石市'
          }]
        }]
        }
    },
}
</script>