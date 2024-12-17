# Q1: 不器 L2 可以切割和雕刻哪些材料？

| 切割材料 | 椴木、桐木、松木、胶合板、榉木、胡桃木、竹子、中密度纤维板、皮革、织物、帆布、瓦楞纸、卡纸、塑料、深色亚克力（蓝色除外） |
| :---: | --- |
| 雕刻材料 | 椴木、桐木、松木、胶合板、榉木、胡桃木、竹子、中密度纤维板、皮革、织物、帆布、瓦楞纸、卡纸、塑料、深色亚克力（蓝色除外） |

---

# Q2: 如何确定材料的切割或雕刻的设置参数？

您可以通过不器 L2 的在线文档查看常见材料的切割和雕刻参数设置，在线文档网址：  
[https://www.toocaa.com/pages/material-settings-for-toocaa-machines](https://www.toocaa.com/pages/material-settings-for-toocaa-machines)。

---

# Q3: 不器 L2 最大的工作范围是多少？

不器 L2 最大工作范围：**415mm x 395mm**。

---

# Q4: 不器 L2 可以切割的木板最大厚度是多少？

- 10W 激光模组最大切割椴木板厚度：**6mm**  
- 20W 激光模组最大切割椴木板厚度：**10mm**

---

# Q5: 在哪里购买高性价比的耗材，比如木板、亚克力等等？

不器 L2 从全球供应商中精选高性价比的耗材，您可以登录 TOOCAA 官网商店购买。  
官网商店网址：[https://www.toocaa.com/collections/materials](https://www.toocaa.com/collections/materials)。

---

# Q6: 为什么扳扣无法压到底部？

扳扣不需要压到底部，只需压到能固定激光模组即可。

---

# Q7: 机器连接电脑后，LightBurn 无法识别机器，应该如何处理？

## 初步检查
1. 确保机器电源已经打开。
2. 检查 USB 线是否连接稳定。
3. 关闭可能占用设备的其他控制软件。
4. 在 LightBurn 中确认已选择正确的设备，且控制器类型和连接方式正确。

## 如果 LightBurn 仍然无法识别机器
### 检查 USB 线
1. 请确保使用的是 USB 数据线，而非仅支持充电的 USB 线。
2. 若电脑有多个 USB 接口，请更换接口尝试。
3. 使用 Windows 电脑时，若连接后短时间内失效，请检查电源管理设置：
   - 打开 **控制面板** > **硬件和声音** > **电源选项**。
   - 点击当前计划的 **更改计划设置** > **更改高级电源设置**。
   - 展开 **USB 设置** > **USB 选择性挂起设置**，选择 **已禁用**。
   - 点击 **应用** > **确定**。

### 检查驱动程序
可能需要安装或更新 CH340 驱动程序：
- [Windows 版下载](https://www.wch-ic.com/downloads/CH341SER_EXE.html)  
- [Mac 版下载](https://www.wch-ic.com/downloads/CH341SER_MAC_ZIP.html)  
- [Linux 版下载](https://www.wch-ic.com/downloads/CH341SER_LINUX_ZIP.html)

### 参考故障排除指南
- [LightBurn 官方故障排查](https://docs.lightburnsoftware.com/legacy/Troubleshooting/ConnectionTroubleshooting)  
- [CH340 驱动安装教程](https://sparks.gogo.co.nz/ch340.html)  
- [FTDI 驱动下载](https://ftdichip.com/drivers/vcp-drivers/)  

若问题仍未解决，请联系我们的技术支持：  
**邮箱**：[support@toocaa.com](mailto:support@toocaa.com)
