<template>
  <div class="container">
    <div class="col-left">
      <a-card class="card card-title" hoverable>
        <div class="name">
          <ruby>
            <span>{{ $t('name_family') }}</span>
            <rp>(</rp>
            <rt>{{ $t('name_family_pron') }}</rt>
            <rp>)</rp>
          </ruby>
          <ruby>
            <span>{{ $t('name_given') }}</span>
            <rp>(</rp>
            <rt>{{ $t('name_given_pron') }}</rt>
            <rp>)</rp>
          </ruby>
        </div>
        <div class="title">{{ $t('refernces') }}</div>
      </a-card>
      <a-card class="card card-nav" hoverable>
        <a-button type="text" size="small" @click="$i18n.setLocale($i18n.locale == 'ja' ? 'zh-CN' : 'ja')">{{
            $t('lang_switch')
        }}</a-button>
      </a-card>
      <a-card class="card card-setting" hoverable>
        <table>
          <tr>
            <th>{{ $t('name') }}</th>
            <td>{{ $t('yumeno_meguri') }}</td>
          </tr>
          <tr>
            <th>{{ $t('pronounce') }}</th>
            <td>{{ $t('yumeno_meguri_pron') }}</td>
          </tr>
          <tr>
            <th>{{ $t('age') }}</th>
            <td>{{ $t('13yo') }}</td>
          </tr>
          <tr>
            <th>{{ $t('height') }}</th>
            <td>{{ $t('145cm') }}</td>
          </tr>
          <tr>
            <th>{{ $t('bust') }}</th>
            <td>{{ $t('a_cup') }}</td>
          </tr>
        </table>
      </a-card>
      <div class="footer">
        <span>&copy; 2022 梦途圣地巡礼 All rights reserved.</span>
      </div>
    </div>
    <div class="col-right">
      <a-card class="card card-image" hoverable></a-card>
      <a-card class="card card-image" hoverable></a-card>
    </div>
  </div>
</template>
<script lang="ts" setup>
const { t } = useI18n()
useHead({
  title: computed(() => t('title'))
})
</script>
<style lang="less">
a {
  text-decoration: none;
  transition: all .1s ease-in-out;
}

body {
  -webkit-font-smoothing: antialiased;
  font-smoothing: antialiased;
  font-family: 'Zen Maru Gothic';
}

.container {
  max-width: 1000px;
  display: flex;
  margin: auto;
  padding-top: 10px;
}

.col-left {
  position: sticky;
  width: 375px;
  top: 0;
  height: 100%;
}

.col-right {
  width: 615px;
  padding-left: 10px;
}

.footer {
  margin-top: 15px;
  padding-left: 8px;
  color: #878787;
}

.card {
  width: 100%;
  border-radius: 8px;
  box-sizing: border-box;
  margin-bottom: 10px;
}

.card-title {
  text-align: center;

  ruby:first-child {
    margin-right: 7px;
  }

  rt {
    padding-left: 6.5px;
    padding-right: 6.5px;
  }

  .name {
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 4px;
  }

  .title {
    font-size: 22px;
    font-weight: 500;
  }
}

.card-nav {
  height: 60px;
}

.card-setting {
  // height: 450px;
  font-size: 16px;
  text-align: left;
  padding: 5px 10px;

  table {
    width: 100%;
    line-height: 20px;

    th {
      font-weight: 700;
      width: 70px;
    }

    td {
      font-weight: 500;
    }
  }
}

.card-image {
  height: 350px;
}
</style>