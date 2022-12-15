<template>
  <div class="container">
    <div class="col-left">
      <a-card class="card card-title" hoverable>
        <div class="name">
          <div class="name-element">
            <span lang="ja" class="name-pron">{{ $t('name_family_pron') }}</span>
            <span>{{ $t('name_family') }}</span>
          </div>
          <div class="name-element">
            <span lang="ja" class="name-pron">{{ $t('name_given_pron') }}</span>
            <span>{{ $t('name_given') }}</span>
          </div>
        </div>
        <div class="title">{{ $t('refernces') }}</div>
      </a-card>
      <a-card class="card card-nav">
        <a-button type="text" size="small"></a-button>
        <a-button type="text" size="small" :lang="$i18n.locale == 'ja' ? 'zh-CN' : 'ja'" @click="$i18n.setLocale($i18n.locale == 'ja' ? 'zh-CN' : 'ja')">{{ $t('lang_switch') }}</a-button>
      </a-card>
      <a-card class="card card-setting">
        <table>
          <tr>
            <th>{{ $t('name') }}</th>
            <td>{{ $t('yumeno_meguri') }}</td>
          </tr>
          <tr>
            <th>{{ $t('pronounce') }}</th>
            <td v-if="$i18n.locale == 'ja'" lang="ja">{{ $t('yumeno_meguri_pron') }}</td>
            <td v-else lang="ja">
              <ruby>
                <span>{{ $t('name_family_pron') }}</span>
                <rp>(</rp>
                <rt>{{ $t('name_family_pron_en') }}</rt>
                <rp>)</rp>
              </ruby>
              <span>&nbsp;</span>
              <ruby>
                <span>{{ $t('name_given_pron') }}</span>
                <rp>(</rp>
                <rt>{{ $t('name_given_pron_en') }}</rt>
                <rp>)</rp>
              </ruby>
            </td>
          </tr>
          <tr>
            <th>{{ $t('age') }}</th>
            <td>{{ $t('13yo') }}</td>
          </tr>
          <tr>
            <th>{{ $t('birthday') }}</th>
            <td>{{ $t('birthday_date') }}</td>
          </tr>
          <tr>
            <th>{{ $t('height') }}</th>
            <td>{{ $t('145cm') }}</td>
          </tr>
          <tr>
            <th>{{ $t('bust') }}</th>
            <td>{{ $t('a_cup') }}</td>
          </tr>
          <tr>
            <th>{{ $t('eye_color') }}</th>
            <td class="color-box">
              <a-tooltip content-class="color-box" content="#FDC0D0" position="top" mini>
                <div style="background-color: #FDC0D0;"></div>
              </a-tooltip>
              <a-tooltip content-class="color-box" content="#A0D9EA" position="top" mini>
                <div style="background-color: #A0D9EA;"></div>
              </a-tooltip>
              <a-tooltip content-class="color-box" content="#B33B61" position="top" mini>
                <div style="background-color: #B33B61;"></div>
              </a-tooltip>
              <a-tooltip content-class="color-box" content="#4473A1" position="top" mini>
                <div style="background-color: #4473A1;"></div>
              </a-tooltip>
              <a-tooltip content-class="color-box" :content="$t('color_help')" position="right" mini>
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" class="icon-help" stroke-width="4" stroke-linecap="butt" stroke-linejoin="miter" filter="ques" data-v-249840b0="" style="font-size: 32px;">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm-3.862-24.021a.461.461 0 0 0 .462-.462 2.37 2.37 0 0 1 .636-1.615C21.64 17.48 22.43 17 23.988 17c1.465 0 2.483.7 3.002 1.493.555.848.446 1.559.182 1.914-.328.444-.736.853-1.228 1.296-.15.135-.335.296-.533.468-.354.308-.75.654-1.067.955C23.22 24.195 22 25.686 22 28v.013a1 1 0 0 0 1.006.993l2.008-.012a.993.993 0 0 0 .986-1c.002-.683.282-1.19 1.101-1.97.276-.262.523-.477.806-.722.21-.18.439-.379.713-.626.57-.513 1.205-1.13 1.767-1.888 1.516-2.047 1.161-4.634-.05-6.485C29.092 14.398 26.825 13 23.988 13c-2.454 0-4.357.794-5.642 2.137-1.25 1.307-1.742 2.954-1.746 4.37 0 .26.21.472.47.472h3.068Zm1.868 14.029a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V32a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2.008Z" fill="currentColor" stroke="none"></path>
                </svg>
              </a-tooltip>
            </td>
          </tr>
          <tr>
            <th>{{ $t('hair_style') }}</th>
            <td>{{ $t('hair_style_val') }}</td>
          </tr>
          <tr>
            <th>{{ $t('hair_color') }}</th>
            <td class="color-box">
              <a-tooltip content-class="color-box" content="#D2EDFF" position="top" mini>
                <div style="background-color: #D2EDFF;"></div>
              </a-tooltip>
              <a-tooltip content-class="color-box" content="#FCD7DE" position="top" mini>
                <div style="background-color: #FCD7DE;"></div>
              </a-tooltip>
              <a-tooltip content-class="color-box" :content="$t('color_help')" position="right" mini>
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" class="icon-help" stroke-width="4" stroke-linecap="butt" stroke-linejoin="miter" filter="ques" data-v-249840b0="" style="font-size: 32px;">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm-3.862-24.021a.461.461 0 0 0 .462-.462 2.37 2.37 0 0 1 .636-1.615C21.64 17.48 22.43 17 23.988 17c1.465 0 2.483.7 3.002 1.493.555.848.446 1.559.182 1.914-.328.444-.736.853-1.228 1.296-.15.135-.335.296-.533.468-.354.308-.75.654-1.067.955C23.22 24.195 22 25.686 22 28v.013a1 1 0 0 0 1.006.993l2.008-.012a.993.993 0 0 0 .986-1c.002-.683.282-1.19 1.101-1.97.276-.262.523-.477.806-.722.21-.18.439-.379.713-.626.57-.513 1.205-1.13 1.767-1.888 1.516-2.047 1.161-4.634-.05-6.485C29.092 14.398 26.825 13 23.988 13c-2.454 0-4.357.794-5.642 2.137-1.25 1.307-1.742 2.954-1.746 4.37 0 .26.21.472.47.472h3.068Zm1.868 14.029a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V32a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2.008Z" fill="currentColor" stroke="none"></path>
                </svg>
              </a-tooltip>
            </td>
          </tr>
          <tr>
            <th>{{ $t('chara') }}</th>
            <td>{{ $t('chara_val') }}</td>
          </tr>
        </table>
      </a-card>
      <div class="footer" lang="zh-CN">
        <span>&copy; 2022 梦途圣地巡礼 Acgtour.com All rights reserved.</span>
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
const nuxtApp = useNuxtApp()
useHead({
  title: computed(() => t('title'))
})
nuxtApp.$i18n.onLanguageSwitched = (oldLocale: string, newLocale: string) => {
  useHead({
    htmlAttrs: {
      lang: computed(() => newLocale)
    }
  })
}
</script>
<script lang="ts">
export default {
  created() {
    useHead({
      htmlAttrs: {
        lang: this.$i18n.locale
      }
    })
  }
}
</script>
<style lang="less">
*:lang(ja) {
  font-family: 'Zen Maru Gothic';
}

*:lang(zh-CN) {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

body {
  -webkit-font-smoothing: antialiased;
  font-family: unset;
}

a {
  text-decoration: none;
  transition: all .1s ease-in-out;
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
  font-size: 13px;
}

.card {
  width: 100%;
  border-radius: 8px;
  box-sizing: border-box;
  margin-bottom: 10px;
  box-shadow: 0 4px 10px rgb(var(--gray-2));
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
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 6px;
    background: linear-gradient(45deg, #94dbf0 40%, #e7c3ff 50%, #fbb3c5 58%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 1;

    .name-element {
      display: flex;
      flex-direction: column;

      .name-pron {
        font-size: 13px;
      }
    }
  }

  .title {
    font-size: 22px;
    font-weight: 500;
  }
}

.card-nav {}

.card-setting {
  font-size: 16px;
  text-align: left;
  padding: 5px 10px;

  table {
    width: 100%;
    line-height: 23px;

    th {
      font-weight: 700;
      width: 70px;
    }

    td {
      font-weight: 500;
    }
  }
}

.color-box {
  display: flex;
  height: 23px;
  align-items: center;
  font-family: monospace;
  font-size: 15px;

  div {
    height: 16px;
    width: 16px;
    border: 0.5px solid #878787;
    border-radius: 3px;
    display: inline-block;
    cursor: pointer;

    &:not(:last-child) {
      margin-right: 3px;
    }
  }
}

.icon-help {
  display: inline-block;
  width: 15px;
  height: 15px;
  cursor: pointer;
  outline: none;
}

.card-image {
  height: 350px;
}
</style>