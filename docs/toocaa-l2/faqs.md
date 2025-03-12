---

sidebar_position: 4
sidebar_label: TOOCAA L2常见问题

---
# TOOCAA L2常见问题
## Q1: 不器 L2 可以切割和雕刻哪些材料？
|  |  |  
| :---: | :---: | 
| 切割材料 | 椴木、桐木、松木、胶合板、榉木、胡桃木、竹子、中密度纤维板、皮革、织物、帆布、瓦楞纸、卡纸、塑料、深色亚克力（蓝色除外） |
| 雕刻材料 | 椴木、桐木、松木、胶合板、榉木、胡桃木、竹子、中密度纤维板、皮革、织物、帆布、瓦楞纸、卡纸、塑料、深色亚克力（蓝色除外） |

---

## Q2: 如何确定材料的切割或雕刻的设置参数？

您可以通过不器 L2 的在线文档查看常见材料的切割和雕刻参数设置，在线文档网址：  
[https://www.toocaa.com/pages/material-settings-for-toocaa-machines](https://www.toocaa.com/pages/material-settings-for-toocaa-machines)。

---

## Q3: 不器 L2 最大的工作范围是多少？

不器 L2 最大工作范围：**415mm x 395mm**。

---

## Q4: 不器 L2 可以切割的木板最大厚度是多少？

- 10W 激光模组最大切割椴木板厚度：**6mm**  
- 20W 激光模组最大切割椴木板厚度：**10mm**
- 40W 激光模组最大切割椴木板厚度：**15mm**  


---

## Q5: 在哪里购买高性价比的耗材，比如木板、亚克力等等？

不器 L2 从全球供应商中精选高性价比的耗材，您可以登录 TOOCAA 官网商店购买。  
官网商店网址：[https://www.toocaa.com/collections/materials](https://www.toocaa.com/collections/materials)。

---

## Q6: 为什么扳扣无法压到底部？

扳扣不需要压到底部，只需压到能固定激光模组即可。

---

## Q7: 机器连接电脑后，LightBurn 无法识别机器，应该如何处理？

### 初步检查
1. 确保机器电源已经打开。
2. 检查 USB 线是否连接稳定。
3. 关闭可能占用设备的其他控制软件。
4. 在 LightBurn 中确认已选择正确的设备，且控制器类型和连接方式正确。

### 如果 LightBurn 仍然无法识别机器
#### 检查 USB 线
1. 请确保使用的是 USB 数据线，而非仅支持充电的 USB 线。
2. 若电脑有多个 USB 接口，请更换接口尝试。
3. 使用 Windows 电脑时，若连接后短时间内失效，请检查电源管理设置：
   - 打开 **控制面板** <br/>
   - **硬件和声音** <br/>
   - **电源选项**。
   - 点击当前计划的 **更改计划设置**<br/>
      ![](http://wiki-toocaa.oss-cn-hongkong.aliyuncs.com/Q%26A1.png)
   -  **更改高级电源设置**。
   - 展开 **USB 设置**
   -  **USB 选择性挂起设置**，选择 **已禁用**。
   - 点击 **应用**
   - 点击 **确定**。

#### 检查驱动程序
可能需要安装或更新 CH340 驱动程序：
- [Windows 版下载](https://www.wch-ic.com/downloads/CH341SER_EXE.html)  
- [Mac 版下载](https://www.wch-ic.com/downloads/CH341SER_MAC_ZIP.html)  
- [Linux 版下载](https://www.wch-ic.com/downloads/CH341SER_LINUX_ZIP.html)

#### 参考故障排除指南

- [LightBurn 官方故障排查](https://docs.lightburnsoftware.com/legacy/Troubleshooting/ConnectionTroubleshooting)  
- [CH340 驱动安装教程](https://sparks.gogo.co.nz/ch340.html)  
- [FTDI 驱动下载](https://ftdichip.com/drivers/vcp-drivers/)  

若问题仍未解决，请联系我们的技术支持：  
**邮箱**：[support@toocaa.com](mailto:support@toocaa.com)

## Q8:激光模组板扣松紧度调节方式

**Step 1** 取出激光模组。

<img src="http://wiki-toocaa.oss-cn-hongkong.aliyuncs.com/%E6%BF%80%E5%85%89%E6%A8%A1%E7%BB%84%E6%8C%89%E5%AE%89%E8%A3%85%E6%8B%86%E5%8D%B8/A10.jpg" alt="图片描述" width="700" />" 

**Step 2** 取出扳扣外螺丝及扳扣。

<img src="http://wiki-toocaa.oss-cn-hongkong.aliyuncs.com/%E6%BF%80%E5%85%89%E6%A8%A1%E7%BB%84%E6%8C%89%E5%AE%89%E8%A3%85%E6%8B%86%E5%8D%B8/A11.jpg" alt="图片描述" width="700" />" 

**Step 3** 通过扳扣对扳扣内螺丝进行松紧调节。

![Step 3](http://wiki-toocaa.oss-cn-hongkong.aliyuncs.com/tips.png)  **TIPS**：顺时针调节为拧紧状态，逆时针调节为拧松状态，请您结合实际情况酌情调整。

<img src="http://wiki-toocaa.oss-cn-hongkong.aliyuncs.com/%E6%BF%80%E5%85%89%E6%A8%A1%E7%BB%84%E6%8C%89%E5%AE%89%E8%A3%85%E6%8B%86%E5%8D%B8/A12.png" alt="图片描述" width="700" />" 

<img src="http://wiki-toocaa.oss-cn-hongkong.aliyuncs.com/%E6%BF%80%E5%85%89%E6%A8%A1%E7%BB%84%E6%8C%89%E5%AE%89%E8%A3%85%E6%8B%86%E5%8D%B8/A13.png" alt="图片描述" width="700" />"

## Q9:TOOCAA L2智能摄像头在TOOCAA Studio视图中显示错误

请务必**按所示数字顺序**对测试图像上的四个标记点进行标记确认。

![](http://wiki-toocaa.oss-cn-hongkong.aliyuncs.com/tips.png)_**注意：**_

_**1.请务必让鼠标准确点击于标记点的圆心处。**_

_**2.可通过鼠标或放大缩小按键对测试图像进行移动和放大缩小，从而精确点击四个位置点圆心。**_

_**3.点击顺序为：左上角为第一点，右上角为第二点，左下角为第三点，右下角为第四点。**_
四个位置点依次精准标记后点击**完成**。随后点击**下一步。**

![](http://wiki-toocaa.oss-cn-hongkong.aliyuncs.com/TOOCAA%20Studio/%E6%91%84%E5%83%8F%E5%A4%B4/%E5%9B%9B%E7%82%B9%E6%89%93%E6%A0%87.png)
![](http://wiki-toocaa.oss-cn-hongkong.aliyuncs.com/TOOCAA%20Studio/%E6%91%84%E5%83%8F%E5%A4%B4/%E6%94%BE%E5%A4%A7%E5%9B%BE%E7%89%87.png)

![](http://wiki-toocaa.oss-cn-hongkong.aliyuncs.com/TOOCAA%20Studio/%E6%91%84%E5%83%8F%E5%A4%B4/%E5%AE%8C%E6%88%90.png)
