# 🇨🇳 GitHub Desktop 3.6.10 简体中文补丁

**全面汉化测试版 | 一键安装 | 一键恢复 | 原文件校验 | 安全备份**

<p align="center">
  <img src="https://img.shields.io/badge/GitHub%20Desktop-3.6.10-blue" alt="Version">
  <img src="https://img.shields.io/badge/Language-简体中文-brightgreen" alt="Language">
  <img src="https://img.shields.io/badge/Platform-Windows-0078D6" alt="Platform">
  <img src="https://img.shields.io/badge/Status-测试版-orange" alt="Status">
  <img src="https://img.shields.io/badge/Install-One%20Click-success" alt="Install">
</p>

## 📖 项目介绍

本项目是针对 **GitHub Desktop 3.6.10 Windows 客户端**制作的简体中文汉化补丁。

通过替换客户端内的英文界面文案，让中文用户能够更加直观地使用 GitHub Desktop，无需反复查阅英文菜单和操作提示。

本补丁基于开源项目进行适配与扩展，新增了 GitHub Desktop 3.6.10 的界面文案、动态文本及相关保护机制。

### ✨ 项目特点

- 🇨🇳 **全面中文汉化**：覆盖主菜单、仓库管理、Git 操作及各类设置
- 🚀 **一键安装**：双击 `install.cmd` 即可执行
- 🔄 **一键恢复**：双击 `restore.cmd` 恢复英文原版
- 🛡️ **文件校验**：自动检查版本及原始文件是否匹配
- 💾 **原文件备份**：保留原始文件，支持恢复
- 🔒 **安全保护**：保护内部状态、解析字符串及关键标识
- 🧩 **开源词库**：提供词库、匹配报告及补丁生成源码

## 📊 汉化统计

| 项目 | 数量 |
|---|---:|
| 匹配的不同文案 | **1,909 条** |
| 实际文本替换 | **2,422 处** |
| 目标版本 | 3.6.10 |
| 当前状态 | 全面汉化测试版 |

> 以上数据为实际匹配与替换数量，并不代表已经实现或验证了 100% 汉化覆盖。

## 🌐 汉化范围

本次汉化覆盖以下主要功能：

| 功能模块 | 汉化内容 |
|---|---|
| 主界面 | 主菜单、欢迎流程、操作提示 |
| 仓库管理 | 仓库、分支、标签、工作树 |
| Git 操作 | 提交、差异、暂存、推送与拉取相关界面 |
| 高级操作 | 合并、变基、拣选、压缩合并、重排 |
| 协作功能 | 拉取请求、检查 |
| 扩展功能 | Git LFS、Copilot |
| 软件设置 | 设置选项、提示及确认对话框 |
| 其他界面 | 可访问性文案、崩溃页面 |

**以下内容保持原样：**

- GitHub、Copilot 等产品及模型名称
- 快捷键、文件名及示例地址
- 用户输入及仓库内容
- 程序内部关键标识

Git、服务器和 AI 实时返回的原始文本，以及外部网页、开发诊断信息，不保证全部显示中文。

## 🚀 安装教程

### 第一步：下载补丁

点击仓库右上角的 `Code → Download ZIP`，或者从 Releases 页面下载发布的补丁 ZIP 文件。

下载完成后，**将 ZIP 完整解压到一个文件夹中**。

⚠️ 不要直接在压缩包内部运行脚本，也不要只提取单独的 CMD 文件。

### 第二步：退出 GitHub Desktop

安装补丁之前，请确保 GitHub Desktop 已经完全关闭。

如果客户端仍在运行，相关文件可能被占用，导致安装失败。

### 第三步：一键安装汉化

在解压后的文件夹中找到：

`install.cmd`

**双击运行，等待脚本执行完成。**

安装器会检查目标版本、原始文件及兼容性，只有通过校验后才会继续执行。

安装成功后，重新打开 GitHub Desktop，即可查看汉化界面。

## 🔄 一键恢复英文

如果想恢复 GitHub Desktop 原版英文界面：

1. 完全退出 GitHub Desktop。
2. 打开汉化补丁文件夹。
3. 双击 `restore.cmd`。
4. 等待恢复完成。
5. 重新启动 GitHub Desktop。

恢复功能使用安装时保留的原始文件备份。

**请勿删除备份文件，否则可能无法正常恢复。**

## 🛠️ 高级使用方法

默认安装路径：

```text
%LOCALAPPDATA%\GitHubDesktop
```

如果 GitHub Desktop 安装在其他目录，可以通过 PowerShell 指定安装路径。

### 自定义路径安装

在补丁文件夹中打开 PowerShell，执行：

```powershell
.\patch.ps1 -InstallPath 'D:\GitHubDesktop'
```

### 自定义路径恢复

```powershell
.\patch.ps1 -InstallPath 'D:\GitHubDesktop' -Restore
```

### 仅检查兼容性

如果只想检查当前客户端是否符合补丁要求，而不修改任何文件：

```powershell
.\patch.ps1 -VerifyOnly
```

建议首次使用前先运行兼容性检查。

## 🛡️ 兼容性与安全机制

本补丁**仅适配此次提供的 Windows GitHub Desktop 3.6.10 原始文件**。

即使版本号相同，如果实际文件校验不一致，安装器也会拒绝安装。

- 不支持混用 GitHub Desktop 3.6.4 的旧补丁
- 官方更新后需要重新生成和验证补丁
- 原始备份校验异常时停止操作
- 检测到版本不符或文件被其他工具修改时停止安装
- 文件被锁定造成部分写入失败时，支持回滚处理
- 安装器不会强制关闭 GitHub Desktop
- 不修改 Git 仓库内容、账户或网络设置

## 💾 原始文件备份

安装过程中，原始文件保存在：

```text
app-3.6.10\resources\app\.zh-original-3.6.10
```

该目录用于后续恢复英文原版。

⚠️ **请务必保留原始备份，尤其是在确认汉化补丁正常使用之前。**

## 🧪 测试与验证状态

### ✅ 已通过的测试

- JavaScript 语法及程序结构校验
- 内部状态和匹配字符串保护检查
- 可重复构建验证
- 首次安装与重复安装
- 原版恢复与重复恢复
- 文件校验及不兼容版本拦截
- 文件锁定时的部分写入回滚

### ⚠️ 尚未完成的测试

尝试启动工作目录中的独立副本时，Electron 因该目录的文件访问权限而退出。

此次失败发生在 Electron 的目录检查阶段，**不能据此判断汉化补丁的界面运行结果**。

因此，目前尚未完成：

- GitHub Desktop 实际启动验收
- 全部界面的逐页目视检查
- 所有翻译内容的最终完整性验证

本项目当前为测试版本，不能宣称已经验证“100% 无漏译”。

测试过程中未修改实际安装目录，也未更改系统文件权限。

## 📂 词库与源码

本项目提供汉化词库、替换报告及补丁构建源码。

| 文件 | 说明 |
|---|---|
| `install.cmd` | 一键安装汉化 |
| `restore.cmd` | 一键恢复英文 |
| `patch.ps1` | 补丁安装、恢复及校验脚本 |
| `词库.json` | 基础词库及新增汉化文案 |
| `translation-report.json` | 实际匹配文案、来源、替换次数及保留候选 |
| `source/build.cjs` | 补丁生成源码 |
| `THIRD-PARTY-LICENSE.txt` | 第三方开源许可 |
| `acorn-LICENSE.txt` | Acorn 开源许可 |

### 重新生成补丁

需要 **Node.js 22 或更高版本**。

在补丁文件夹中执行：

```bash
node source/build.cjs '原始 app-3.6.10\resources\app 路径' '输出文件夹'
```

生成器会检查输出是否与本包已审核的补丁一致。

如果修改词库，需要重新评审并更新校验清单，不应直接绕过文件保护机制。

## ❓ 常见问题

### Q：为什么双击 install.cmd 后安装失败？

可能原因包括：

- GitHub Desktop 版本不匹配
- 原始文件校验不一致
- 客户端尚未完全退出
- 相关文件已被其他工具修改
- 文件访问权限不足

请检查命令窗口中的具体提示。

### Q：为什么同样是 3.6.10 也无法安装？

因为不同构建可能存在文件差异。

本补丁不仅检查版本号，还会校验原始文件，避免对不兼容的程序文件强制修改。

### Q：汉化后会影响 Git 仓库吗？

本补丁针对客户端界面文件，不以修改仓库内容、账号信息或网络配置为目标。

### Q：GitHub Desktop 更新后还能继续使用吗？

不保证。官方更新可能修改客户端文件结构，需要重新生成并验证对应版本的汉化补丁。

### Q：能否恢复原版英文？

可以。保留原始备份后，使用 `restore.cmd` 即可执行恢复操作。

### Q：这是官方中文版吗？

不是。本项目为第三方非官方汉化补丁，与 GitHub 官方没有隶属关系。

## 📜 来源与开源许可

本项目基础词库和生成器改编自：

**Johnserf-Seed / GitHub-Desktop-Chinese-Language-Pack**

https://github.com/Johnserf-Seed/GitHub-Desktop-Chinese-Language-Pack

原项目采用 MIT 许可证。

本次适配主要增加：

- GitHub Desktop 3.6.10 新版本文案
- 动态文本片段
- 崩溃页面汉化
- 内部状态保护
- 解析字符串保护
- CSS 标识保护

本补丁没有向 GitHub Desktop 的“关于”页面注入作者链接或额外推广内容。

第三方许可详见：

- `THIRD-PARTY-LICENSE.txt`
- `acorn-LICENSE.txt`

GitHub Desktop 官方仓库：

https://github.com/desktop/desktop

## ⚠️ 免责声明

本项目是非官方汉化补丁，与 GitHub 官方无隶属关系。

GitHub Desktop 原始软件及相关商标归其权利人所有。

本补丁提供的条款页面中文内容为非官方翻译，如需查看英文原文，可恢复原版或访问官方项目。

使用前请确认版本兼容性，并妥善保留原始文件备份。

## ⭐ 支持项目

如果这个项目对你有所帮助，欢迎点亮一个 **Star ⭐**！

如果发现汉化遗漏、翻译不准确、界面显示异常或安装问题，欢迎通过 Issues 反馈。

反馈时建议提供 GitHub Desktop 版本、相关界面截图以及错误提示，方便定位和改进。

---

**GitHub Desktop 3.6.10 简体中文补丁**

🇨🇳 让 GitHub Desktop 的中文使用体验更加完善。
