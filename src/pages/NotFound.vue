<template>
  <div class="not-found">
      <div class="not-found-error">
        <div class="not-found-text">
          <span class="not-found-message">Error 404. Page not found</span>
          <h1 class="not-found-title">Sorry! We are unable to<br> find the page you are<br> looking for.</h1>
          <basic-button
            contentClass="not-found-back"
            @click="$router.push('/')">Go back</basic-button>
        </div>
        <div class="not-found-view">
          <div class="not-found-image">
            <img
              src="@/assets/images/error404.svg"
              alt="error-image"
            >
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped lang="scss">
.not-found {
  background: #fff;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 120px 0 0 0;

  &-error {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &-image {
    width: 691px;
  }

  &-message {
    display: block;
    font-weight: 700;
    font-size: 24px;
    color: #8692A6;
    margin: 0 0 30px 0;
  }

  &-title {
    margin: 0 0 30px 0;
    font-weight: 500;
    font-size: 40px;
    line-height: 60px;
  }

  &-back {
    padding: 14px 10px;
    border-radius: 25px;
  }
}
</style>
