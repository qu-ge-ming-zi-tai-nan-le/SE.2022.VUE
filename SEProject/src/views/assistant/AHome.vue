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
          <div class="introduction">
          </div>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
export default {
  data: () => {
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
	background-image: url(../../assets/7-1401291P635.png);
	background-size: 100% 100%;
	height: 75vh;
	width:120vh;
	margin:0px 0px 0px 250px;
	display: flex;
	justify-content: center;
	align-items: center;
}



</style>
