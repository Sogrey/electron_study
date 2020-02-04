const fs = require('fs');
const path = require('path');

module.exports = {
  port: "3000",
  dest: "docs",
  ga: "UA-85414008-1",
  base: "/electron_study/",
  markdown: {
    externalLinks: {
      target: '_blank',
      rel: 'noopener noreferrer'
    }
  },
  locales: {
    "/zh/": {
      lang: "zh-CN",
      title: "MyBatis-Plus",
      description: "为简化开发而生"
    },
    "/en/": {
      lang: "en-US",
      title: "MyBatis-Plus",
      description: "Born To Simplify Development"
    }
  },
  head: [
    ["link", {
      rel: "icon",
      href: `/favicon.ico`
    }]
  ],
  themeConfig: {
    repo: "Sogrey/electron_study",
    docsRepo: "Sogrey/electron_study",
    editLinks: true,
    docsDir: 'source',
    locales: {
      "/zh/": {
        label: "简体中文",
        selectText: "选择语言",
        editLinkText: "在 GitHub 上编辑此页",
        lastUpdated: "上次更新",
        nav: [{
            text: "指南",
            link: "/zh/guide/"
          },
          {
            text: "配置",
            link: "/zh/config/"
          },
          {
            text: "生态",
            items: [{
                text: "百度",
                link: "https://www.baidu.com"
              },
              {
                text: "淘宝",
                link: "http://www.taobao.com"
              },
              {
                text: "爱奇艺",
                link: "http://www.iqiyi.com/"
              }
            ]
          }
        ],
        sidebar: {
          "/zh/guide/": genGuideSidebar(true),
          "/zh/config/": genConfigSidebar(true)
        }
      },
      "/en/": {
        label: "English",
        selectText: "Languages",
        editLinkText: "Edit this page on GitHub",
        lastUpdated: "Last Updated",
        nav: [{
            text: "Guide",
            link: "/en/guide/"
          },
          {
            text: "Config",
            link: "/en/config/"
          },
          {
            text: "Ecosystem",
            items: [{
                text: "Baidu",
                link: "https://www.baidu.com"
              },
              {
                text: "Taobao",
                link: "http://www.taobao.com"
              },
              {
                text: "Iqiyi",
                link: "http://www.iqiyi.com/"
              }
            ]
          }
        ],
        sidebar: {
          "/en/guide/": genGuideSidebar(false),
          "/en/config/": genConfigSidebar(false)
        }
      }
    }
  }
};

function genGuideSidebar(isZh) {
  var resultD = getAllDirs('./source/'+(isZh?"zh":"en")+"/guide/",['.vuepress']);//
  console.log(resultD);
  console.log("=================================");
  return [{
      title: isZh ? "快速入门" : "Getting Start",
      collapsable: false,
      children: ["", "quick-start"]
    },
    {
      title: isZh ? "核心功能" : "Core",
      collapsable: false,
      children: ["generator"]
    }
  ]
}

/**
 * 
 * @param {string} mypath 要遍历的目录
 * @param {Array<string>} excludes 排除目录或文件
 */
function getAllDirs(mypath = ".",excludes=[]) { 
  const items = fs.readdirSync(mypath);
  let result = [];
  // 遍历当前目录中所有的文件和文件夹
  items.map(item => {
    let temp = path.join(mypath, item);
    if (excludes.indexOf(temp) == -1) {
      // 若当前的为文件夹
      if (fs.statSync(temp).isDirectory()) {
        let parent = {
          title: "",
          collapsable: false,
          children: []
        }

        parent.title = item;

        let children = getAllDirs(temp);
        // 进入下一级文件夹访问
        parent.children = children;

        result.push(parent); // 存储当前文件夹的名字
      } else if (fs.statSync(temp).isFile()) {
        result.push(item); // 存储当前文件夹的名字
      }
    }
  });
  return result;
}

// let resultD = getAllDirs('./soure/',['.vuepress']);
// console.log(resultD);

function genConfigSidebar(isZh) {
  // var resultD = getAllDirs('./source/'+(isZh?"zh":"en")+"/config/",['.vuepress']);//
  // console.log(resultD);
  // console.log("=================================");
  return [{
    title: isZh ? "配置" : "Config",
    collapsable: false,
    children: [""]
  }]
}