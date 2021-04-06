<template>
  <div class="app-content content">
    <div class="content-wrapper">
      <div class="content-wrapper-before"></div>
      <div class="content-header row">
      </div>
      <div class="content-body">
        <section class="flexbox-container">
          <div class="col-12 d-flex align-items-center justify-content-center">
            <div class="col-lg-4 col-md-6 col-10 box-shadow-2 p-0">
              <div class="card border-grey border-lighten-3 px-1 py-1 m-0">
                <div class="card-header border-0">
                  <div class="text-center mb-1">
                    <img src="~/static/images/logo/logo.png" alt="branding logo">
                  </div>
                  <div class="font-large-1  text-center">
                    Cashier Login
                  </div>
                </div>
                <div class="card-content">

                  <div class="card-body">
                    <b-form class="form-horizontal" @submit.prevent="onSubmit">
                      <fieldset class="form-group position-relative has-icon-left">
                        <b-form-input type="text" class="form-control round" placeholder="Your Username" required v-model="userInfo.username" />
                        <div class="form-control-position">
                          <i class="ft-user"></i>
                        </div>
                      </fieldset>
                      <fieldset class="form-group position-relative has-icon-left">
                        <b-form-input type="password" class="form-control round" placeholder="Enter Password" required v-model="userInfo.password" />
                        <div class="form-control-position">
                          <i class="ft-lock"></i>
                        </div>
                      </fieldset>

                      <div class="form-group text-center">
                        <b-button type="submit" class="btn round btn-block btn-glow btn-bg-gradient-x-purple-blue col-12 mr-1 mb-1 text-white">Login</b-button>
                      </div>

                    </b-form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    head: {
      title: 'Login',
      bodyAttrs: {
        class: 'bg-primary'
      }
    },
    data() {
      return {
        userInfo: {
          username: '',
          password: '',
        },
      }
    },
    methods: {
      async onSubmit() {
        try {
          await this.$auth.loginWith('local', {data: this.userInfo})
          this.$router.go('/')
        } catch (err) {
          console.log(err)
        }
      }
    }
  }

</script>

<style>
  html {
    font-family:
      'Source Sans Pro',
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      'Helvetica Neue',
      Arial,
      sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
  }

  .button--green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    text-decoration: none;
    padding: 10px 30px;
  }

  .button--green:hover {
    color: #fff;
    background-color: #3b8070;
  }

  .button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
  }

  .button--grey:hover {
    color: #fff;
    background-color: #35495e;
  }

</style>