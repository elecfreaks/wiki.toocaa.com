# TOOCAA Studio
TOOCAA Studio是TOOCAA推出的一款多功能在线编辑工具，兼容Windows和macOS系统。该软件集直观的设计界面、强大的编辑功能以及高效的激光控制于一体，为创作者提供从灵感构想到精确加工的全流程支持。TOOCAA Studio支持多种材料加工参数预设，提供实时预览、路径优化、摄像头智能校准和旋转配件应用等功能，与TOOCAA L2及其配件深度整合，打造极致流畅的创作体验，无论是个人设计师还是专业用户都能轻松驾驭。

TOOCAA Studio链接：[https://toocaastudio.com/](https://toocaastudio.com/)

## TOOCAA Studio功能概述
### 菜单栏
#### 功能描述
#### 文件
+ **另存为GCode文件：** 将项目保存为GCode文件

#### 编辑
+ **撤消：** 取消上一个操作
+ **重做：** 再次执行上次取消的操作
+ **删除：** 删除画布上选定的对象

#### 工具
+ **选择：** 单击以选择对象或单击选项
+ **移动：** 单击以拖动画布
+ **导入：** 点击导入图片，目前TOOCAA Studio仅支持JPG、PNG、SVG、DXF文件的导入。
+ **矢量：** 单击以绘制矢量
+ **矩形：** 单击以绘制矩形
+ **圆形：** 单击以绘制圆形
+ **文字：** 单击以输入文字
+ **图像描摹：** 单击对图像进行边缘描摹（只可对选中的图像使用）

#### 激光工具
+ **摄像头：** 单击以启动摄像头功能
+ **旋转配件：** 单击以启动旋转配件功能

#### 语言
+ **中文：** 单击选择中文模式
+ **英文：** 单击选择英文模式

#### 菜单栏UI示意图
![菜单栏UI示意图](http://wiki-toocaa.oss-cn-hongkong.aliyuncs.com/TOOCAA%20Studio/%E8%8F%9C%E5%8D%95%E6%A0%8F.png)

### 状态栏
#### 功能描述
#### 提醒
+ **提醒：** 单击以查看提醒

#### 设备连接
+ **设备连接：** 单击以连接设备

_**设备连接注意事项：**_

**1.TOOCAA L2串行端口核实方法：将USB线拔下后重新连接，弹窗内新出现的串行端口即为TOOCAA L2串行端口。**

**2.请核实连接串行端口为TOOCAA L2串行端口，如若连接至其他设备串行端口，将无法使用TOOCAA L2。** 

#### 状态栏UI示意图
![状态栏UI示意图](http://wiki-toocaa.oss-cn-hongkong.aliyuncs.com/TOOCAA%20Studio/%E7%8A%B6%E6%80%81%E6%A0%8F.png)

### 工具栏
#### 功能描述
+ **位置：** 调整元素在画布中X轴及Y轴的位置（元素坐标位置默认为元素边框左上角）
+ **尺寸：** 调整元素宽度及高度
+ **圆角：** 为元素添加圆角（目前只适用于矩形）
+ **比例约束：** 单击以约束元素比例

#### 工具栏UI示意图
![工具栏UI示意图](http://wiki-toocaa.oss-cn-hongkong.aliyuncs.com/TOOCAA%20Studio/%E5%B7%A5%E5%85%B7%E6%A0%8F.png)

### 左侧边栏
#### 功能描述
+ **选择：** 单击以选择素材或单击选项
+ **素材库：** 悬停以选择素材
+ **导入：** 单击以导入素材，目前TOOCAA Studio仅支持PNG、JPG、SVG、DXF文件的导入
+ **矢量：** 单击以绘制矢量
+ **矩形：** 单击以绘制矩形
+ **圆形：** 单击以绘制圆形
+ **多边形：** 单击以选择图形
+ **文字：** 单击以输入文字

#### 左侧边栏UI示意图
![左侧边栏UI示意图](http://wiki-toocaa.oss-cn-hongkong.aliyuncs.com/TOOCAA%20Studio/%E5%B7%A6%E4%BE%A7%E8%BE%B9%E6%A0%8F.png)

### 右侧设置面板
#### 功能描述
+ **图层分组/切换：** 对元素或图片所在图层进行切换调整
+ **模式选择：** 线条切割、线条雕刻、填充雕刻
+ **参数调整：** 对图层进行参数调整（速度、功率、次数、间隙）
+ **图层输出/不输出：** 对图层进行输出/不输出
+ **图层显示/不显示：** 图层在画布中显示/不显示

**图层加工优先级：图层顺序＞图层内元素的创建先后顺序**

#### 右侧设置面板UI示意图![右侧设置面板UI示意图](http://wiki-toocaa.oss-cn-hongkong.aliyuncs.com/TOOCAA%20Studio/%E5%8F%B3%E4%BE%A7%E8%AE%BE%E7%BD%AE%E9%9D%A2%E6%9D%BF.png)
### 画布面板
#### 功能描述
+ **画布尺寸：** 画布尺寸为415mm×395mm，完美适配TOOCAA L2工作区域

#### 画布面板UI示意图
![画布面板UI示意图](http://wiki-toocaa.oss-cn-hongkong.aliyuncs.com/TOOCAA%20Studio/%E7%94%BB%E5%B8%83%E9%9D%A2%E6%9D%BF.png)

### 加工工具栏
+ **走边框：** 基于画布内容于TOOCAA L2中实时预览运作位置
+ **移动：** 单击以控制激光模块移动（主要适用于旋转配件模式）
+ **开始：** 单击以开始加工
+ **暂停：** 单击以暂停加工（可继续加工）
+ **停止：** 单击以停止加工（不可继续加工）
+ **复位：** 单击以控制激光模块回归绝对坐标原点
+ **1：** 单击以控制激光模块前后左右移动1mm
+ **10：** 单击以控制激光模块前后左右移动10mm

#### 加工工具栏示意图
![开始加工工具栏示意图](http://wiki-toocaa.oss-cn-hongkong.aliyuncs.com/TOOCAA%20Studio/%E5%BC%80%E5%A7%8B%E5%8A%A0%E5%B7%A5.png)

![暂停加工工具栏示意图](http://wiki-toocaa.oss-cn-hongkong.aliyuncs.com/TOOCAA%20Studio/%E6%9A%82%E5%81%9C.png)

#### 激光模块移动工具示意图
![激光模块移动工具示意图](http://wiki-toocaa.oss-cn-hongkong.aliyuncs.com/TOOCAA%20Studio/%E7%A7%BB%E5%8A%A8.png)

### 底部栏
#### 功能描述
#### 底部栏
+ **撤消：** 取消上一个操作
+ **重做：** 再次执行上次取消的操作
+ **移动：** 单击以拖动画布
+ **画布比例调整：** 单击以调整画布尺寸

#### 底部栏UI示意图


![底部栏UI示意图](http://wiki-toocaa.oss-cn-hongkong.aliyuncs.com/TOOCAA%20Studio/%E5%BA%95%E9%83%A8%E6%A0%8F.png)

### 摄像头工具栏
#### 功能描述
+ **摄像头校准：** 填写适合材料的参数以生成校准案例
+ **截图：** 单击以锁定摄像头当前画面
+ **放大/缩小：** 放大/缩小画面

#### 摄像头工具设置UI示意图
![摄像头工具设置UI示意图](http://wiki-toocaa.oss-cn-hongkong.aliyuncs.com/TOOCAA%20Studio/%E6%91%84%E5%83%8F%E5%A4%B4%E6%A0%A1%E5%87%861.png)

![摄像头工具设置UI示意图](http://wiki-toocaa.oss-cn-hongkong.aliyuncs.com/TOOCAA%20Studio/%E6%91%84%E5%83%8F%E5%A4%B4%E6%A0%A1%E5%87%862.png)

### 旋转配件工具栏
#### 功能描述
+ **卡爪旋转模式选择：** 卡盘旋转模式、球面旋转模式、环形旋转模式、180°可调节翻转模式均为卡爪选择模式
+ **滚筒旋转模式选择：** 滚筒旋转模式
+ **物体直径：** 卡爪选择模式下需输入物体直径
+ **断开链接：** 断开旋转配件模式

#### 旋转配件工具设置UI示意图
![旋转配件工具设置UI示意图](http://wiki-toocaa.oss-cn-hongkong.aliyuncs.com/TOOCAA%20Studio/%E6%97%8B%E8%BD%AC%E9%85%8D%E4%BB%B6%E8%AE%BE%E7%BD%AE.png)

## TOOCAA Studio快捷键
|  |  |  
| :---: | :---: | 
|  | 功能 | Windows系统 | MacOS系统 |
| 菜单栏<br/> | 复制 | Ctrl C | ⌘ C |
| | 粘贴 | Ctrl V | ⌘ V |
| | 删除 | Backspace | ⌫ |
| | 撤回 | Ctrl Z | ⌘ Z |
| | 重做 | Ctrl Shift Z | ⇧ ⌘ Z |
| | 停止绘图 | Esc | Esc |
| | 另存为Gcode | Ctrl Shift G | ⇧ ⌘ G |
| 左侧边栏 | 选择工具 | ESC | ESC |
| | 导入图片 | Ctrl I | ⌘ I |
| | 文字工具 | T | T |
| | 矩形工具 | R | R |
| | 正方形工具 | Shift R | ⇧ R |
| | 圆形工具 | C | C |
| | 正圆工具 | Shift C | ⇧ C |
| | 钢笔工具 | V | V |
| 底部栏 | 放大（修改） | Ctrl P | ⌘ P |
| | 缩小（修改） | Ctrl M | ⌘ M |
| | 移动画布 | Spacebar | Space |
| | 适应屏幕 | Ctrl 0 | ⌘ 0 |
