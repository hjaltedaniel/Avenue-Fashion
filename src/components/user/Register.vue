<template>
  <div class="registration-form">
    <h3>Register</h3>
    <form>
      <input
        v-model.lazy="user.email"
        v-validate="'required|email'"
        type="email"
        name="email"
        placeholder="Your Email..."
        :class="{ error : errors.has('email') }"
      >
      <span v-show="errors.has('email')">{{ errors.first('email') }}</span>
      <input
        v-validate="'required'"
        name="password"
        :class="{ error : errors.has('password_confirmation') }"
        type="password"
        placeholder="Password"
        ref="password"
      >
      
      <input
        v-validate="'required|confirmed:password'"
        name="password_confirmation"
        type="password"
        :class="{ error : errors.has('password_confirmation') }"
        placeholder="Confirm password"
        data-vv-as="password"
        v-model="user.password"
      >
      <span v-show="errors.has('password_confirmation')">{{ errors.first('password_confirmation') }}</span>
      <span>
        <input v-model="user.newsletter" type="checkbox" name="newsletter" value="confirmed">
        <span>
          Sign up for exclusive updates,
          discounts,
          new arrivals, contests, and more!
        </span>
      </span>
    </form>
    <div class="registration-form__end-section">
      <button type="submit" @click="postData">Create Account</button>
      
      <span>
        By clicking 'Create Account', you agree to our
        <a href="#">
          Privacy policy
          <i class="fas fa-long-arrow-alt-right"></i>
        </a>
      </span>
    </div>
  </div>
</template>

<script>
import ApiService from "@/services/ApiService.js";
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
        newsletter: ""
      }
    };
  },
  methods: {
    postData: function() {
      if (this.errors.items == 0) {
        ApiService.postUser(this.user)
          .then(function(response) {
            console.log(response);
          })
          .catch(function(error) {
            console.log(error);
          });
        this.user = {};
        this.errors.clear();
      } else {
        alert("You need to input data, to be registered");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/_vars.scss";
.registration-form {
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

  .error {
    border: 1px solid $red;
    background-color: $lightred;
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