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
            <el-table-column prop="num" label="实验课程" width="300">
            </el-table-column>
            <el-table-column prop="name" label="实验项目" width="300">
            </el-table-column>
            <el-table-column prop="address" label="实验报告">
          <div class="submit">
             <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="3"
            :on-exceed="handleExceed" :file-list="fileList">
            <el-button size="small" width="40%" type="primary">上传文件</el-button>
            <el-button size="small" width="40%" type="primary">确认</el-button>
            <div slot="tip" class="el-upload__tip">只能上传pdf文件,且不超过5Mb</div>
            </el-upload>
          </div>
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      tableData: [{
        num: '计算机网络实验',
        name: '网络端地址实验'
      }, {
        num: '计算机网络实验',
        name: '邮件收发协议实验'
      }, {
        num: '计算机组成原理实验',
        name: '加法器实验'
      }, {
        num: '计算机组成原理实验',
        name: '乘法器实验'
      }]
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
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
