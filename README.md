# jj-utils-template

一个基于 Vue 2.7.10 的工具函数库。

## 安装

```bash
pnpm add jj-utils-template
```

## 开发

```bash
# 安装依赖
pnpm install
```
# 文档站预览
```bash
pnpm docs
```

# 函数库本地测试
 - 项目内测试
 ```bash
 pnpm example
 ```

 - 关联业务项目测试(由于业务项目包管理器方案不同，本地调试统一使用基于file文件系统的硬链接引用，而不用link方案)
 业务项目根据实际包管理器进行添加，例如 npm add file:../jj-utils-template(项目相对业务项目的相对地址)

# 开发函数库
```bash
pnpm build:dev
```

# 构建
```bash
pnpm build
```
