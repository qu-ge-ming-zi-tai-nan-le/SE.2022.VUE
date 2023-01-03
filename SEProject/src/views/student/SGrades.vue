<template>
  <div>
    <el-container style="height: 1000px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
				<el-menu :default-openeds="['1', '2', '3', '4', '5']">
					<el-submenu index="1">
						<template slot="title"><i class="el-icon-setting"></i>首页</template>
						<el-menu-item index="1-1">
							<router-link :to="'/shome'" class="link">
								前往首页
							</router-link>
						</el-menu-item>
					</el-submenu>
					<el-submenu index="2">
						<template slot="title"><i class="el-icon-message"></i>信息管理</template>
						<el-menu-item index="2-1">
							<router-link :to="'/smodification'" class="link">
								信息修改
							</router-link>
							</el-menu-item>
					</el-submenu>
					<el-submenu index="3">
						<template slot="title"><i class="el-icon-menu"></i>课程管理</template>
						<el-menu-item index="3-1">
							<router-link :to="'/scourse'" class="link">
								加入课程
							</router-link>
						</el-menu-item>
					</el-submenu>
					<el-submenu index="4">
						<template slot="title"><i class="el-icon-setting"></i>实验管理</template>
						<el-menu-item index="4-1"><router-link :to="'/sexperiment'" class="link">
								上传实验报告
							</router-link></el-menu-item>
						<el-menu-item index="4-2"><router-link :to="'/sdocument'" class="link">
								下载项目文档
							</router-link></el-menu-item>
					</el-submenu>
					<el-submenu index="5">
						<template slot="title"><i class="el-icon-message"></i>成绩管理</template>
						<el-menu-item index="5-1"><router-link :to="'/sgrades'" class="link">
								查看成绩
							</router-link></el-menu-item>
					</el-submenu>
				</el-menu>
			</el-aside>
      <el-container>
        <el-header style="text-align: right; font-size: 12px" class="black">
					<i class="el-icon-setting black" style="margin-right: 15px">
						<span>
							<router-link :to="'/login'" class="link">
								退出登录
							</router-link>
						</span>
					</i>
					<span class="black">刘泽昊</span>
					<span class="black">（学生）</span>
				</el-header>
        <el-main>
          <el-table :data="tableData">
            <el-table-column prop="course" label="课程名称" width="250">
            </el-table-column>
            <el-table-column prop="teacher" label="授课老师" width="250">
            </el-table-column>
            <el-table-column prop="grade" label="课程成绩" width="250">
            </el-table-column>
            <el-table-column prop="note" label="备注">
            </el-table-column>
          </el-table>
        </el-main>
        <el-footer height="400px" style="text-align:center; font-size: 12px">
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      tableData: [{
        course: '计算机系统结构',
        teacher: '张晨曦',
        grade: '90',
        note: '无'
      }, {
        course: '计算机网络实验',
        teacher: '金伟祖',
        grade: '87',
        note: '无'
      }, {
        course: '数据结构',
        teacher: '张颖',
        grade: '85',
        note: '无'
      }, {
        course: '数据库课程设计',
        teacher: '袁时金',
        grade: '76',
        note: '无'
      }]
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
</style>
