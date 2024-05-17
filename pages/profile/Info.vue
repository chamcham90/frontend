<template>
  <div class="container mx-auto p-4">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      <InfoContainer
        :profile-info="profileInfo1"
      ></InfoContainer>
      <InfoContainer
        :profile-info="profileInfo2"
      ></InfoContainer>
      <InfoContainer
        :profile-info="profileInfo3"
      ></InfoContainer>
      <InfoContainer
        :profile-info="profileInfo4"
      ></InfoContainer>
      <InfoContainer
        :profile-info="profileInfo5"
      ></InfoContainer>
      <InfoContainer
        :profile-info="profileInfo6"
      ></InfoContainer>
      <InfoContainer
        :profile-info="profileInfo7"
      ></InfoContainer>
      <InfoContainer
        :profile-info="profileInfo8"
      ></InfoContainer>
    </div>
  </div>
</template>
<script>
import InfoContainer from '~/components/profile/info/InfoContainer'
import aosMixin from '~/mixins/aos'
export default {
  name: 'ProfileInfo',
  components: { InfoContainer },
  mixins: [aosMixin],
  data () {
    return {
      profileInfo1: {
        bannerImgSrc: 'https://images.unsplash.com/photo-1506809515450-5a40a2e32f51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fCVFQiVCMCVCMSVFQiVBNyU4OHxlbnwwfHwwfHx8MA%3D%3D',
        circleImgSrc: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JUVCJUIwJUIxJUVCJUE3JTg4fGVufDB8fDB8fHww',
        titleTxt: '1990',
        subTitleTxt: '35세',
        bodyTxt: '뭐 벌써 30대냐',
        footerTxt: 'support_you@naver.com',
        footerHref: 'https://naver.com'
      },
      profileInfo2: {
        bannerImgSrc: require('~/assets/img/profile/istp-banner.png'),
        circleImgSrc: require('~/assets/img/profile/istp-person.png'),
        titleTxt: 'ISTP',
        subTitleTxt: '만능재주꾼',
        bodyTxt: '처음 테스트했을때와 계속 동일',
        footerTxt: '010-1234-1234',
        footerHref: 'https://naver.com'
      },
      profileInfo3: {
        bannerImgSrc: require('~/assets/img/profile/daegu-banner.png'),
        circleImgSrc: require('~/assets/img/profile/daegu.png'),
        titleTxt: '대구',
        subTitleTxt: '대구 거주중',
        bodyTxt: '25년째 대구 거주중',
        footerTxt: '대구삼',
        footerHref: 'https://naver.com'
      },
      profileInfo4: {
        bannerImgSrc: require('~/assets/img/profile/dev-banner.png'),
        circleImgSrc: require('~/assets/img/profile/dev.png'),
        titleTxt: '개발자',
        subTitleTxt: '웹개발자',
        bodyTxt: '이것저것함',
        footerTxt: '기술스택은모르겟음',
        footerHref: 'https://naver.com'
      },
      profileInfo5: {
        bannerImgSrc: require('~/assets/img/profile/swim-banner.png'),
        circleImgSrc: require('~/assets/img/profile/swim.png'),
        titleTxt: '수영',
        subTitleTxt: '접영은 못합니다',
        bodyTxt: '수영2년차',
        footerTxt: '어쩌구저쩌꾸',
        footerHref: 'https://naver.com'
      },
      profileInfo6: {
        bannerImgSrc: require('~/assets/img/profile/house-banner.png'),
        circleImgSrc: require('~/assets/img/profile/house.png'),
        titleTxt: '집돌이',
        subTitleTxt: '집에만있습니다.',
        bodyTxt: '주로 집에만있습니다.',
        footerTxt: '어쩌구저쩌꾸',
        footerHref: 'https://naver.com'
      },
      profileInfo7: {
        bannerImgSrc: require('~/assets/img/profile/army-banner.png'),
        circleImgSrc: require('~/assets/img/profile/army.png'),
        titleTxt: '군필',
        subTitleTxt: '육군',
        bodyTxt: '통신 병장 만기전역.',
        footerTxt: '어쩌구저쩌꾸',
        footerHref: 'https://naver.com'
      },
      profileInfo8: {
        bannerImgSrc: require('~/assets/img/profile/smoke-banner.png'),
        circleImgSrc: require('~/assets/img/profile/smoke.png'),
        titleTxt: '비흡연',
        subTitleTxt: '금연',
        bodyTxt: '비흡연자이고 주량은 소주 반병정도입니다.',
        footerTxt: '1달에 1~2번정도',
        footerHref: 'https://naver.com'
      }
    }
  }
}
</script>
