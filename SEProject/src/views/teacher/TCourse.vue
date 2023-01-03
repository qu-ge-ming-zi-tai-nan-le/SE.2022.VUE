<template>
    <div>
    <el-container style="height: 1000px; border: 1px solid #eee">
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
            <div class="tishi">
                <div class="juzhong">课程发布</div>
            </div>
            <br />
            <br />
            <div class="add">
            <span class="tishi">课程名称：</span>
            <input type="text" v-model="productName" />
            <br />
            <br />
            <br />
            <span class="tishi">教师姓名：</span>
            <input type="text" v-model="type" />
            <br /><br /><br />
            <span class="tishi"> 课程简介：</span>
            <br /><br /><br />
            <el-input
            type="textarea"
            :rows="6"
            placeholder="请输入课程简介"
            style="font-size:22px;font-family:'Microsoft YaHei'"
            v-model="textarea">
            </el-input>
            <br /><br /><br />
            </div>
            <div class="juzhong">
                <el-button type="primary" >确认发布</el-button>
            </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
    data() {
    return {
      productName: "",
      price: 0,
      type: "", //商品类型
      desc: "", //商品描述
      fileList: [],
      textarea: ''
    };
},
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
  /* 表单外边距 */
.add {
  margin:27px 600px 0px 600px;
}
/* 输入框 */
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
/* 超链接 */
a {
  text-decoration: none;
  color: black;
}
/* 所有提示 */
.tishi {
  font-weight: 550;
  color: rgba(63, 79, 94, 0.525);
  font-size: larger;
}
.biaoti {
  font-size: 27px;
  color: white;
  font-weight: 600;
  margin: 0 auto;
}
.nonesize {
    resize: none;
    font-size: large;
  		color: #000;
   		padding: 10px;
    	border-radius: 30px ;
   		box-shadow: 0 0 0 2px #e1f0fd;
}
/* 首行 */
.head {
  line-height: 2;
  background: #89d8d3;
  font-weight: 500;
  font-size: 27px;
  color: white;
  height: 53px;
}
.head h1 {
  margin: 0 1rem;
}
.juzhong{
    text-align: center;
}
</style>