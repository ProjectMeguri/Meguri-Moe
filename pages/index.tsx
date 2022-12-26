import { useTranslation } from 'next-i18next'
import type { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { Button, Menu, Card, Tooltip } from "@arco-design/web-react";
const MenuItem = Menu.Item;

type Props = {
  // Add custom props here
}

export default function Home() {
  const { t } = useTranslation('common')
  const router = useRouter()
  const changeTo = router.locale === 'ja' ? 'zh' : 'ja'
  const randpic = Math.floor(Math.random() * (Math.floor(4) - Math.ceil(1)) + Math.ceil(1))
  return (
    <>
      <Head>
        <title>{t('title')}</title>
      </Head>
      <div className="container">
        <div className="col-left">
          <Card className="card card-title">
            <div className="name">
              <div className="name-element">
                <span lang="ja" className="name-pron">{t('name_family_pron')}</span>
                <span>{t('name_family')}</span>
              </div>
              <div className="name-element">
                <span lang="ja" className="name-pron">{t('name_given_pron')}</span>
                <span>{t('name_given')}</span>
              </div>
            </div>
            <div className="title">{t('refernces')}</div>
          </Card>
          <Menu className="nav-menu" mode="horizontal" defaultSelectedKeys={['0']} selectedKeys={['0']}>
            <Button type="text" size="small" onClick={() => { window.open('https://www.acgtour.com', '_blank') }} disabled>{t('go_back')}</Button>
            <MenuItem key='0'>{t('setting')}</MenuItem>
            <Button type="text" size="small" onClick={() => { router.push('/', '/', { locale: changeTo }) }}>{t('lang_switch')}</Button>
          </Menu>
          <Card className="card card-setting">
            <table>
              <tbody>
                <tr>
                  <th>{t('name')}</th>
                  <td>{t('yumeno_meguri')}</td>
                </tr>
                <tr>
                  <th>{t('pronounce')}</th>
                  {
                    router.locale === 'ja'
                      ? <td lang="ja">{t('yumeno_meguri_pron')}</td>
                      : <td lang="ja">
                        <ruby>
                          <span>{t('name_family_pron')}</span>
                          <rp>(</rp>
                          <rt>{t('name_family_pron_en')}</rt>
                          <rp>)</rp>
                        </ruby>
                        <span>&nbsp;</span>
                        <ruby>
                          <span>{t('name_given_pron')}</span>
                          <rp>(</rp>
                          <rt>{t('name_given_pron_en')}</rt>
                          <rp>)</rp>
                        </ruby>
                      </td>
                  }
                </tr>
                <tr>
                  <th>{t('age')}</th>
                  <td>{t('13yo')}</td>
                </tr>
                <tr>
                  <th>{t('birthday')}</th>
                  <td>{t('birthday_date')}</td>
                </tr>
                <tr>
                  <th>{t('height')}</th>
                  <td>{t('145cm')}</td>
                </tr>
                <tr>
                  <th>{t('bust')}</th>
                  <td>{t('a_cup')}</td>
                </tr>
                <tr>
                  <th>{t('eye_color')}</th>
                  <td className="color-box">
                    <Tooltip content="#FDC0D0" position="top" mini>
                      <div style={{ backgroundColor: '#FDC0D0' }}></div>
                    </Tooltip>
                    <Tooltip content="#A0D9EA" position="top" mini>
                      <div style={{ backgroundColor: '#A0D9EA' }}></div>
                    </Tooltip>
                    <Tooltip content="#B33B61" position="top" mini>
                      <div style={{ backgroundColor: '#B33B61' }}></div>
                    </Tooltip>
                    <Tooltip content="#4473A1" position="top" mini>
                      <div style={{ backgroundColor: '#4473A1' }}></div>
                    </Tooltip>
                    <Tooltip content={t('color_help')} position="right" mini>
                      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className="icon-help" strokeWidth="4" strokeLinecap="butt" strokeLinejoin="miter" filter="ques" style={{ fontSize: '32px' }}>
                        <path fillRule="evenodd" clipRule="evenodd" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm-3.862-24.021a.461.461 0 0 0 .462-.462 2.37 2.37 0 0 1 .636-1.615C21.64 17.48 22.43 17 23.988 17c1.465 0 2.483.7 3.002 1.493.555.848.446 1.559.182 1.914-.328.444-.736.853-1.228 1.296-.15.135-.335.296-.533.468-.354.308-.75.654-1.067.955C23.22 24.195 22 25.686 22 28v.013a1 1 0 0 0 1.006.993l2.008-.012a.993.993 0 0 0 .986-1c.002-.683.282-1.19 1.101-1.97.276-.262.523-.477.806-.722.21-.18.439-.379.713-.626.57-.513 1.205-1.13 1.767-1.888 1.516-2.047 1.161-4.634-.05-6.485C29.092 14.398 26.825 13 23.988 13c-2.454 0-4.357.794-5.642 2.137-1.25 1.307-1.742 2.954-1.746 4.37 0 .26.21.472.47.472h3.068Zm1.868 14.029a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V32a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2.008Z" fill="currentColor" stroke="none"></path>
                      </svg>
                    </Tooltip>
                  </td>
                </tr>
                <tr>
                  <th>{t('hair_style')}</th>
                  <td>{t('hair_style_val')}</td>
                </tr>
                <tr>
                  <th>{t('hair_color')}</th>
                  <td className="color-box">
                    <Tooltip content="#D2EDFF" position="top" mini>
                      <div style={{ backgroundColor: '#D2EDFF' }}></div>
                    </Tooltip>
                    <Tooltip content="#FCD7DE" position="top" mini>
                      <div style={{ backgroundColor: '#FCD7DE' }}></div>
                    </Tooltip>
                    <Tooltip content={t('color_help')} position="right" mini>
                      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className="icon-help" strokeWidth="4" strokeLinecap="butt" strokeLinejoin="miter" filter="ques" style={{ fontSize: '32px' }}>
                        <path fillRule="evenodd" clipRule="evenodd" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm-3.862-24.021a.461.461 0 0 0 .462-.462 2.37 2.37 0 0 1 .636-1.615C21.64 17.48 22.43 17 23.988 17c1.465 0 2.483.7 3.002 1.493.555.848.446 1.559.182 1.914-.328.444-.736.853-1.228 1.296-.15.135-.335.296-.533.468-.354.308-.75.654-1.067.955C23.22 24.195 22 25.686 22 28v.013a1 1 0 0 0 1.006.993l2.008-.012a.993.993 0 0 0 .986-1c.002-.683.282-1.19 1.101-1.97.276-.262.523-.477.806-.722.21-.18.439-.379.713-.626.57-.513 1.205-1.13 1.767-1.888 1.516-2.047 1.161-4.634-.05-6.485C29.092 14.398 26.825 13 23.988 13c-2.454 0-4.357.794-5.642 2.137-1.25 1.307-1.742 2.954-1.746 4.37 0 .26.21.472.47.472h3.068Zm1.868 14.029a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V32a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2.008Z" fill="currentColor" stroke="none"></path>
                      </svg>
                    </Tooltip>
                  </td>
                </tr>
                <tr>
                  <th>{t('chara')}</th>
                  <td>{t('chara_val')}</td>
                </tr>
              </tbody>
            </table>
          </Card>
          <div className="footer" lang="zh-CN">
            <a>&copy; 2022 梦途圣地巡礼 Acgtour.com All rights reserved.</a>
          </div>
        </div>
        <div className="col-right">
          <a href="https://static.acgtour.com/meguri/setting/uniform.png" target="_blank" rel="noreferrer">
            <Card className="card card-image">
              <picture>
                <source srcSet="https://static.acgtour.com/meguri/setting/uniform.png/setting_thumb-1x.webp 1x, https://static.acgtour.com/meguri/setting/uniform.png/setting_thumb-2x.webp 2x, https://static.acgtour.com/meguri/setting/uniform.png/setting_thumb-3x.webp 3x" type="image/webp" />
                <source srcSet="https://static.acgtour.com/meguri/setting/uniform.png/setting_thumb-1x.png 1x, https://static.acgtour.com/meguri/setting/uniform.png/setting_thumb-2x.png 2x, https://static.acgtour.com/meguri/setting/uniform.png/setting_thumb-3x.png 3x" type="image/png" />
                <img src="https://static.acgtour.com/meguri/setting/uniform.png/setting_thumb-2x.png" alt="" />
              </picture>
              <div className="description">
                <p className="title">{t('uniform')} Ver.</p>
                <div className="icon-magnifier">
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className="arco-icon arco-icon-zoom-in" strokeWidth="4" strokeLinecap="butt" strokeLinejoin="miter">
                    <path d="M32.607 32.607A14.953 14.953 0 0 0 37 22c0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15 4.142 0 7.892-1.679 10.607-4.393Zm0 0L41.5 41.5M29 22H15m7 7V15"></path>
                  </svg>
                  {t('details')} »
                </div>
              </div>
            </Card>
          </a>
          <a href="https://static.acgtour.com/meguri/setting/private.png" target="_blank" rel="noreferrer">
            <Card className="card card-image">
              <picture>
                <source srcSet="https://static.acgtour.com/meguri/setting/private.png/setting_thumb-1x.webp 1x, https://static.acgtour.com/meguri/setting/private.png/setting_thumb-2x.webp 2x, https://static.acgtour.com/meguri/setting/private.png/setting_thumb-3x.webp 3x" type="image/webp" />
                <source srcSet="https://static.acgtour.com/meguri/setting/private.png/setting_thumb-1x.png 1x, https://static.acgtour.com/meguri/setting/private.png/setting_thumb-2x.png 2x, https://static.acgtour.com/meguri/setting/private.png/setting_thumb-3x.png 3x" type="image/png" />
                <img src="https://static.acgtour.com/meguri/setting/private.png/setting_thumb-2x.png" alt="" />
              </picture>
              <div className="description">
                <p className="title">{t('private')} Ver.</p>
                <div className="icon-magnifier">
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className="arco-icon arco-icon-zoom-in" strokeWidth="4" strokeLinecap="butt" strokeLinejoin="miter">
                    <path d="M32.607 32.607A14.953 14.953 0 0 0 37 22c0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15 4.142 0 7.892-1.679 10.607-4.393Zm0 0L41.5 41.5M29 22H15m7 7V15"></path>
                  </svg>
                  {t('details')} »
                </div>
              </div>
            </Card>
          </a>
        </div>
      </div>
      <div className="side-character">
        <picture>
          <source srcSet={'https://static.acgtour.com/meguri/t/' + randpic + '.png/chara_thumb-1x.webp 1x, https://static.acgtour.com/meguri/t/' + randpic + '.png/chara_thumb-2x.webp 2x, https://static.acgtour.com/meguri/t/' + randpic + '.png/chara_thumb-3x.webp 3x'} type="image/webp" />
          <source srcSet={'https://static.acgtour.com/meguri/t/' + randpic + '.png/chara_thumb-1x.png 1x, https://static.acgtour.com/meguri/t/' + randpic + '.png/chara_thumb-2x.png 2x, https://static.acgtour.com/meguri/t/' + randpic + '.png/chara_thumb-3x.png 3x'} type="image/png" />
          <img src={'https://static.acgtour.com/meguri/t/' + randpic + '.png/chara_thumb-2x.webp'} alt="" />
        </picture>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'ja', ['common'])),
  },
})