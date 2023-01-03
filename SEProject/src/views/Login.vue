<template>
  <div class="login-page">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="login-title">实验课程管理系统</span>
      </div>
      <div class="login-form">
        <el-form :model="form" :rules="loginRules" ref="loginForm">
          <el-form-item prop="userName">
            <el-input type="text" v-model="form.userName" auto-complete="off" placeholder="请输入用户名">
              <template slot="prepend"><i style="font-size:20px" class="el-icon-user"></i></template>
            </el-input>
          </el-form-item>
          <el-form-item prop="passWord">
            <el-input type="text" v-model="form.passWord" auto-complete="off" placeholder="请输入密码" show-password>
              <template slot="prepend"><i style="font-size:20px" class="el-icon-key"></i></template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button style="width:30%;" type="primary" @click="handleLogin1" :loading="loading">学生登录</el-button>
            <el-button style="width:30%;" type="primary" @click="handleLogin2" :loading="loading">教师登录</el-button>
            <el-button style="width:30%;" type="primary" @click="handleLogin3" :loading="loading">助教登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      loading: false,
      form: {
        userName: '',
        passWord: ''
      },
      loginRules: {
        userName: [
          { required: true, message: '请输入账户', trigger: 'blur' },
        ],
        passWord: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleLogin1() {
      this.$refs.loginForm.validate().then(() => {
        this.loading = true;
        //模拟异步请求后台接口 登录操作
        setTimeout(() => {
          this.$router.push('/shome');
          this.loading = false;
        }, 1000)
      }).catch((error => {
        this.$message({
          message: '输入错误！',
          type: 'warning'
        });
      }))
    },
    handleLogin2() {
      this.$refs.loginForm.validate().then(() => {
        this.loading = true;

        //模拟异步请求后台接口 登录操作
        setTimeout(() => {
          this.$router.push('thome');
          this.loading = false;
        }, 1000)
      }).catch((error => {
        this.$message({
          message: '输入错误！',
          type: 'warning'
        });
      }))
    },
    handleLogin3() {
      this.$refs.loginForm.validate().then(() => {
        this.loading = true;

        //模拟异步请求后台接口 登录操作
        setTimeout(() => {
          this.$router.push('/ahome');
          this.loading = false;
        }, 1000)
      }).catch((error => {
        this.$message({
          message: '输入错误！',
          type: 'warning'
        });
      }))
    }
  }
}
</script>

<style>
.login-page {
  background-image: url(../assets/jiading.jpg);
  background-size: 100% 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-title {
  font-size: 20px;
  text-align: center;
}

.box-card {
  width: 400px;
}
</style>
