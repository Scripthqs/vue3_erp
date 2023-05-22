export const localMenu = [
  {
    icon: "l-icon-folder-checked",
    id: 90,
    name: "测试一级",
    type: 1,
    url: "/main/test",
    children: [
      {
        icon: "el-icon-document",
        id: 91,
        name: "测试二级1",
        type: 2,
        url: "/main/test/demo"
      },
      {
        icon: "l-icon-folder-checked",
        id: 92,
        name: "测试二级2",
        type: 1,
        url: "/main/test/list",
        children: [
          {
            icon: "el-icon-document",
            id: 93,
            name: "测试三级1",
            type: 2,
            url: "/main/test/list/son1"
          },
          {
            icon: "l-icon-folder-checked",
            id: 94,
            name: "测试三级2",
            type: 1,
            url: "/main/test/list/son2",
            children: [
              {
                icon: "el-icon-document",
                id: 95,
                name: "测试四级1",
                type: 2,
                url: "/main/test/list/son2/gon1"
              },
              {
                icon: "el-icon-document",
                id: 96,
                name: "测试四级2",
                type: 2,
                url: "/main/test/list/son2/gon2"
              }
            ]
          }
        ]
      }
    ]
  }
];
