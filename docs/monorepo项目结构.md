### monorepo 管理模式项目结构

monorepo 管理模式项目结构解析

```
├── apps                // 各种应用
    ├── web-app         // web-app
    ├── mobile-app      // mobile-app
├── packages            // 公共模块
    ├── components      // 组件库
    ├── utils           // 工具函数
```




Tips：

1. apps中的项目使用packages中的模块需配置其自身的package.json。比如：web-app中package.json配置dependencies，便可以将common模块作为第三方包使用。[详情](https://pnpm.io/zh/workspaces)
    ```  
     "dependencies": {
        "common": "workspace:*",
      },
    ```

   
