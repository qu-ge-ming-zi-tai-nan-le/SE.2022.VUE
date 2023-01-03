<template>
    <div>
      <el-container style="height: 1000px; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <el-menu :default-openeds="['1', '2', '3', '4']">
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-setting"></i>首页</template>
              <el-menu-item index="1-1"><router-link :to="'/ahome'" class="link">
								前往首页
							</router-link></el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title"><i class="el-icon-message"></i>信息管理</template>
              <el-menu-item index="2-1"><router-link :to="'/amodification'" class="link">
								信息修改
							</router-link></el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title"><i class="el-icon-menu"></i>课程管理</template>
              <el-menu-item index="3-1"><router-link :to="'/acourse'" class="link">
								加入课程
							</router-link></el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title"><i class="el-icon-setting"></i>实验管理</template>
              <el-menu-item index="4-1"><router-link :to="'/aexperiment'" class="link">
								批改实验报告
							</router-link></el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-container>
          <el-header style="text-align: right; font-size: 12px" class="black">
            <i class="el-icon-setting black" style="margin-right: 15px" >
              <span>
                <router-link :to="'/login'" class="link">
                  退出登录
                </router-link>
              </span>
            </i>
            <span class="black">施俊威</span>
            <span class="black">（助教）</span>
          </el-header>
          
          <el-main>
            <el-table
              :data="tableData"
              style="width: 100%">
              <el-table-column
                label=""
                width="280">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.name }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="个人信息"
                width="440">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.data }}</span>
                </template>
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)">修改</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tableData: [{
          name:'工号',
          data:'2054319',
        }, {
          name:'姓名',
          data:'施俊威',
        }, {
          name:'年龄',
          data:'21',
        }, {
          name:'专业',
          data:'软件工程',
        }, {
          name:'性别',
          data:'男',
        }, {
          name:'电话',
          data:'13312122131',
        }, {
          name:'电子邮箱',
          data:'253736253@qq.com',
        },{
          name:'身份',
          data:'助教',
        },{
          name:'入学/任职年份',
          data:'2020',
        },{
          name:'个人签名',
          data:'学习使我快乐！',
        }]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  
  }
  </script>
  
  <style>
    .el-header {
      background-color: #B3C0D1;
      color: #333;
      line-height: 60px;
    }
    
    .el-aside {
      color: #333;
    }
    .black{
      color: #333;
    }
    .link{
      color: #333;
      text-decoration: none;
    }
    .introduction{
      font-size: xx-large;
      text-align: center;
      margin: 200px;
    }
  
  </style>
  