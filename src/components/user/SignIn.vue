<template>
  <div class="signin-form">
    <h3>Sign in</h3>
    <form>
      <input
        v-model.lazy="user.email"
        v-validate="'required|email'"
        type="email"
        name="email"
        placeholder="Your email..."
      >
      <span v-show="errors.has('email')">{{ errors.first('email') }}</span>
      <input
        v-model="user.password"
        v-validate="'required'"
        type="password"
        name="password"
        placeholder="Your password"
      >
    </form>
    <div class="signin-form__end-section">
      <button type="submit">Sign in</button>
      <a href="#">
        Forgot your Password
        <i class="fas fa-long-arrow-alt-right"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: "",
        password: ""
      },
      users: [
        {
          id: 1,
          email: "hdh@hjalhan.dk",
          password: "HjalteDaniel2208"
        },
        {
          id: 2,
          email: "hjal0179@edu.eal.dk",
          password: "EAL220894"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/_vars.scss";
.signin-form {
  font-family: $body-font;
  font-size: 10pt;
  margin-bottom: 40px;

  h3 {
    text-transform: uppercase;
    color: $grey;
  }
  form {
    display: flex;
    flex-direction: column;
  }

  input {
    padding: 10px;
    margin-bottom: 10px;
    margin-right: 10px;
  }

  span,
  a {
    color: $midgrey;
    margin-bottom: 10px;
  }

  a:hover {
    color: $blue;
  }

  &__end-section {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      width: 50%;
    }
  }

  button {
    color: $grey;
    font-family: $head-font;
    font-weight: 600;
    font-size: 9pt;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    border: 1px solid $grey;
    padding-left: 15px;
    padding-right: 15px;
    height: 40px;

    &:hover {
      color: $white;
      background-color: $blue;
      border: none;
    }
  }
}
</style>