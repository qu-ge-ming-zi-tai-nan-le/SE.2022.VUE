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
            <template>
              <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                  prop="Num"
                  label="序号"
                  width="150">
                </el-table-column>
                <el-table-column
                  prop="CourseName"
                  label="课程名称"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="TeacherName"
                  label="任课教师"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="Description"
                  label="课程简介"
                  width="340">
                </el-table-column>
                <el-table-column
                  label="是否加入该课程">
                  <button   @click="favor"
                          class="my_button" :style="{backgroundColor:bg_color, color: ft_color,}"
                          @mouseenter="change()" @mouseleave="goback()">
                    {{content}}
                  </button>
                </el-table-column>
              </el-table>
            </template>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </template>
  
  <script>
  export default {
      data() {
        return {
            liked:false,
            content:'+加入',
            bg_color:"#fef0f0",
            ft_color:"#f56c6c",
            tableData: [{
              Num:'1',
              CourseName:'计算机网络实验',
              TeacherName:'金伟祖',
              Description:'“计算机网络实验”课程是计算机学院三年级本科生实践类必修课。本课程主要配合计算机网络课程，通过实验帮助学生学习和理解网络原理与协议，培养学生的动手能力、工程实践能力和综合应用能力。',
              
            }, {
              Num:'2',
              CourseName:'编译原理实验',
              TeacherName:'高珍',
              Description:'编译原理实验课程是计算机相关专业学生的必修课程和高等学校培养计算机专业人才的基础及核心课程，同时也是计算机专业课程中最难及最挑战学习能力的课程之一。',
              
            }, {
              Num:'3',
              CourseName:'计算机组成原理实验',
              TeacherName:'张晨曦',
              Description:'计算机组成原理实验课程是计算机学科的一门核心专业基础课，基本要求是使我们掌握计算机常用的逻辑器件、部件的原理、参数及使用方法，学懂简单、完备的单台计算机的基本组成原理，学习计算机设计中的入门性知识，掌握维护、使用计算机的技能。',
            
            }, {
              Num:'4',
              CourseName:'物理化学实验',
              TeacherName:'王刚',
              Description:'物理化学实验是药学专业学生必修的、继无机、有机和分析化学实验之后的一门独立的药学基础实验课，研究对象是化学体系的物理化学性质及其与反应间的关系，其手段是测量化学体系的物理量， 通过对实验数据的归纳和处理，找出变量间的作用规律，为药学研究和药物研发提供基本研究理论、工具和方法。',
              
            }]
          }
        },
        methods:{
              favor (e) {
                  this.liked=!this.liked;
                  if(this.liked){
                      this.content="已加入";
                      this.bg_color="#f56c6c";
                      this.ft_color="#fef0f0";
                  }
                  else{
                      this.content="+加入"
                      this.bg_color="#fef0f0";
                      this.ft_color="#f56c6c";
  
                  }
              },
              change(){
                  this.bg_color="#ff9999";
                  this.ft_color="#fef0f0";
              },
              goback(){
                  if(this.liked){
                      this.bg_color="#f56c6c";
                      this.ft_color="#fef0f0";
                  }
                  else{
                      this.bg_color="#fef0f0";
                      this.ft_color="#f56c6c";
                  }
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

.black {
	color: #333;
}

.link {
	color: #333;
	text-decoration: none;
}

.introduction {
	font-size: xx-large;
	text-align: center;
	margin: 200px;
}
    button{
      outline:none;
    }
    .my_button{
      color: #f56c6c;
      background: #fef0f0;
      border: #fbc4c4 solid;
      border-radius: 20px;
      padding: 12px 23px;
      text-align: center;
      font-size: 16px;
      -webkit-transform: scale(0.7);
    }
  </style>