<template>
	<div>
		<el-container style="height: 800px; border: 1px solid #eee">
			<el-aside width="200px" style="background-color: rgb(238, 241, 246)">
				<el-menu :default-openeds="['1', '2', '3', '4', '5']">
					<el-submenu index="1">
						<template slot="title"><i class="el-icon-setting"></i>首页</template>
						<el-menu-item index="1-1">
							<router-link :to="'/thome'" class="link">
								前往首页
							</router-link>
						</el-menu-item>
					</el-submenu>
					<el-submenu index="2">
						<template slot="title"><i class="el-icon-message"></i>信息管理</template>
						<el-menu-item index="2-1">
							<router-link :to="'/tmodification'" class="link">
								信息修改
							</router-link></el-menu-item>
					</el-submenu>
					<el-submenu index="3">
						<template slot="title"><i class="el-icon-menu"></i>课程管理</template>
						<el-menu-item index="3-1">
							<router-link :to="'/tcourse'" class="link">
								发布课程
							</router-link>
						</el-menu-item>
					</el-submenu>
					<el-submenu index="4">
						<template slot="title"><i class="el-icon-setting"></i>实验管理</template>
						<el-menu-item index="4-1"><router-link :to="'/publish'" class="link">
								发布实验项目
							</router-link></el-menu-item>
						<el-menu-item index="4-2"><router-link :to="'/tdocument'" class="link">
								上传项目文档
							</router-link></el-menu-item>
						<el-menu-item index="4-3"><router-link :to="'/texperiment'" class="link">
								批改实验报告
							</router-link></el-menu-item>
					</el-submenu>
					<el-submenu index="5">
						<template slot="title"><i class="el-icon-message"></i>成绩管理</template>
						<el-menu-item index="5-1"><router-link :to="'/tgrades'" class="link">
								发布成绩
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
            <span class="black">沈小龙</span>
            <span class="black">（教师）</span>
          </el-header>
		  <el-main>
					<el-table :data="tableData">
						<el-table-column prop="course" label="实验课程" width="150">
						</el-table-column>
						<el-table-column prop="project" label="实验项目" width="150">
						</el-table-column>
						<el-table-column prop="name" label="学生姓名" width="150">
						</el-table-column>
						<el-table-column prop="doc" label="实验报告" width="600">
						</el-table-column>
						<el-table-column prop="grades" label="分数" width="60">
              <input type="text" v-model="type" />
						</el-table-column>
					</el-table>
				</el-main>
        <el-footer height="350px" style="text-align:center; font-size: 12px">
          <div class="submit">
            <el-button type="primary">确认</el-button>
          </div>
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
        course: '计算机网络实验',
        project: '网络端地址实验',
        name: '李华',
        doc: 'http://canvas.tongji.edu.cn/courses/64341/files/folder/%E8%AF%BE%E7%A8%8B%E8%AE%BE%E8%AE%A1?preview=1515394'
      }, {
        course: '计算机网络实验',
        project: '网络端地址实验',
        name: '王强',
        doc: 'http://canvas.tongji.edu.cn/courses/64341/files/folder/%E8%AF%BE%E7%A8%8B%E8%AE%BE%E8%AE%A1?preview=1669405'
      }, {
        course: '计算机网络实验',
        project: '邮件收发协议实验',
        name: '李华',
        doc: 'http://canvas.tongji.edu.cn/courses/64341/files/folder/%E8%AF%BE%E4%BB%B6PPT?preview=1528604'
      }, {
        course: '计算机网络实验',
        project: '邮件收发协议实验',
        name: '王强',
        doc: 'http://canvas.tongji.edu.cn/courses/64341/files/folder/%E8%AF%BE%E4%BB%B6PPT?preview=1528600'
      }],
      type: ''
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
input[type="text"] {
  height: 25px;
  border: 1.5px solid rgba(63, 79, 94, 0.525);
  padding: 0 6px;
  width: 185px;
  border-left-style: none;
  border-right-style: none;
  border-top-style: none;
  font-size: larger;
}
.submit {
  margin: 100px;
  text-align: center;
}
</style>
