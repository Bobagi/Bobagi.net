<template>
    <div class="login-container">
      <form class="login-form" @submit.prevent="handleLogin">
        <div class="input-group">
          <input type="text" id="username" name="username" v-model="username" required placeholder="Login">
        </div>
        <div class="input-group">
          <input type="password" id="password" name="password" v-model="password" required placeholder="Password">
        </div>
        <div class="input-group-button"> 
            <button type="submit">Sign In</button>
            <button type="button" @click="handleRegister">Sign Up</button>
        </div>
      </form>
    </div>
</template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
        handleLogin() {
        // Existing login method
        alert(`Login under construction.\nLogging in with ${this.username}, ${this.password}`);
        // Here, you'd typically handle the login logic,
        // like sending the data to your server for validation.
        },
        handleRegister() {
        // New register method
        alert('Register under construction.');
        // Here, you could do anything related to the registration process,
        // like redirecting to a registration page or opening a registration modal.
        },
    },
  };
  </script>
  
  <style>
  .login-container{
    display: flex;
    justify-content: end;
    padding-right: 10%;
    padding-bottom: 10px;
  }
  .login-form {
    display: flex;
    align-items: center;
  }

  .login-form button{
    border: 2px solid yellow;
    background-color: black;
    color: yellow;
    padding: 0;
  }
  
  .input-group input {
    padding: 4px;
    border: 2px solid yellow;
    background-color: black;
    color: yellow;
    border-radius: 5px;
    margin-right: 3px;
    font-family: inherit;
  }

    .input-group input::placeholder {
        color: rgba(255, 255, 0, 0.6);
        font-family: inherit; /* Inherit the font-family from the input (which inherits from :root) */
        font-style: italic;
    }

    .input-group input::-webkit-input-placeholder {
        color: rgba(255, 255, 0, 0.6);
  font-family: inherit;
  font-style: italic;
}
.input-group input::-moz-placeholder {
  color: rgba(255, 255, 0, 0.6);
  font-family: inherit;
  font-style: italic;
}
.input-group input:-ms-input-placeholder {
    color: rgba(255, 255, 0, 0.6);
  font-family: inherit;
  font-style: italic;
}
.input-group input::-ms-input-placeholder {
    color: rgba(255, 255, 0, 0.6);
  font-family: inherit;
  font-style: italic;
}

  .input-group input:focus {
    outline: none;
    border-color: #ffcc00;
  }

  .input-group-button{
    margin: 0px 10px;
    display: flex;
    gap: 5px;
  }
  </style>