<template>
  <div class="w-full">
    <!-- Hero section -->
    <section id="hero" class="w-full pb-24">
      <BaseSection>
        <div class="col-span-12 lg:col-span-6 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left">
          <span data-aos="fade-right" data-aos-once="true" class="text-base text-gradient font-semibold uppercase">Contact us now</span>
          <h1
            data-aos="fade-right"
            data-aos-once="true"
            class="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10"
          >
            Coding with Joy <span class="text-header-gradient">Enjoy development</span> Web App
          </h1>
          <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="paragraph hidden sm:block">
            다양한 개발 작업을 즐기는 개발자를 지금 만나보세요
          </p>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="700"
            class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2"
          >
            <BaseButton
              class="max-w-full px-8 py-4 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] border border-[#0c66ee] text-white"
              v-on:click="goToKakaoLink"
            >
              카카오톡연결
            </BaseButton>
            <BaseButton
              class="max-w-full px-6 py-4 bg-inherit text-gradient border border-[#0c66ee] flex items-center justify-center"
              v-on:click="goPlayStore"
            >
              <span>플레이 스토어 연결</span>
              <ChevronDownIcon :size="20" class="mt-1 text-[#0c66ee]" />
            </BaseButton>
          </div>
        </div>
        <div class="hidden sm:block col-span-12 lg:col-span-6">
          <div class="w-full">
            <img
              data-aos="fade-up"
              data-aos-once="true"
              :src="require('~/assets/img/hero-image.png')"
              class="-mt-4"
              alt=""
            />
          </div>
        </div>
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          :src="require('~/assets/img/pattern/ellipse-1.png')"
          class="hidden sm:block absolute bottom-12 xl:bottom-16 left-4 xl:left-0 w-6"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          :src="require('~/assets/img/pattern/ellipse-2.png')"
          class="hidden sm:block absolute top-4 sm:top-10 right-64 sm:right-96 xl:right-[32rem] w-6"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          :src="require('~/assets/img/pattern/ellipse-3.png')"
          class="hidden sm:block absolute bottom-56 right-24 w-6"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          :src="require('~/assets/img/pattern/star.png')"
          class="hidden sm:block absolute top-20 sm:top-28 right-16 lg:right-0 lg:left-[30rem] w-8"
        />
      </BaseSection>
    </section>

    <!-- Crypto statistic section -->
    <section
      class="max-w-screen-xl mx-2 sm:mx-auto px-4 sm:px-6 lg:px-0 py-6 pb-20 sm:py-8 rounded-[2.25rem] sm:rounded-xl bg-white shadow-lg sm:shadow-md transform lg:-translate-y-12"
    >
      <div class="w-full flex flex-col lg:flex-row items-center justify-center">
        <LandingCryptoStatistic
          data-aos="fade-up"
          title="🔥 최근관심사"
          :datasets="trendings"
          class="xl:border-r border-gray-200 lg:px-8"
        />
        <LandingCryptoStatistic
          data-aos="fade-up"
          data-aos-delay="150"
          title="🚀 툴"
          :datasets="topGainers"
          class="xl:border-r border-gray-200 lg:px-8"
        />
        <LandingCryptoStatistic
          data-aos="fade-up"
          data-aos-delay="300"
          title="🛠 기타"
          :datasets="recents"
          class="lg:px-8"
        />
      </div>
    </section>

    <!-- Buy and trade section -->
    <section class="w-full my-24">
      <BaseSection>
        <LandingBuyTradeImage class="sm:hidden mb-8" />
        <div data-aos="fade-right" class="col-span-12 lg:col-span-6 mt-4 xl:mt-20 space-y-6 px-4">
          <h2 class="text-4xl font-semibold sm:pr-8 xl:pr-12">
            연락처<br class="hidden sm:block" />
          </h2>
          <p class="paragraph">
            2가지 방법으로 연결 가능합니다.
          </p>
          <div class="space-y-6 lg:pr-12">
            <div class="flex items-center space-x-4">
              <div class="lg:max-w-[1600px] w-full flex items-center relative px-5 py-3 border border-[#0c66ee] rounded-xl">
                <span class="lg:max-w-[80px] w-full text-sm font-medium pr-5 py-3 text-[#0c66ee] border-r border-[#0c66ee]"> 이메일 </span>
                <input
                  type="text"
                  class="w-full text-lg font-medium text-right border-none ring-0 focus:outline-none focus:ring-0"
                  name="contactName"
                  value="support_you@naver.com"
                />
                <button @click="copyToClipboard('support_you@naver.com')" class="ml-4 text-blue-500 hover:text-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16h.01M12 20h.01M16 16h.01M8 12h.01M12 8h.01M16 12h.01M12 4v.01M4 4v16h16V4H4z" />
                  </svg>
                </button>
              </div>
            </div>
            <BaseButton class="w-full px-5 py-4 bg-blue-gradient text-white text-base font-medium"
                        v-on:click="goToKakaoLink"
            >카카오톡연결</BaseButton>
          </div>
        </div>
        <LandingBuyTradeImage data-aos="fade-left" class="hidden sm:block" />
      </BaseSection>
    </section>

    <!-- Partners section -->
    <section class="bg-partner relative max-w-full sm:mx-6 my-24 shadow sm:rounded-2xl overflow-hidden">
      <div class="w-full px-6 sm:px-0 py-16 flex flex-col items-center justify-center space-y-4 text-center">
        <h3 data-aos="flip-down" class="text-2xl text-neutral-800 font-semibold">사용 가능한 스킬</h3>
        <p data-aos="flip-down" class="paragraph">프로젝트에 적용해보세요</p>
        <div data-aos="fade-up" class="flex flex-wrap items-center justify-center">
          <LandingPartnerImage
            v-for="img in ['jquery240.png', 'vue240.png', 'flutter240.png', 'spring-boot240.png', 'git240.png', 'javascript240.png']"
            :key="img"
            :img="img"
          />
        </div>
      </div>
    </section>

    <!-- Credit card section -->
    <section class="w-full my-36">
      <BaseSection data-aos="fade-down">
        <div class="col-span-12 lg:col-span-7">
          <div class="w-full">
            <img :src="require('~/assets/img/app-icons.png')" class="w-[95%]" alt="" />
          </div>
        </div>
        <div class="col-span-12 lg:col-span-5 space-y-6 px-4 sm:px-6 mt-20">
          <h2 class="text-4xl font-semibold">
            다양한
            <span class="text-header-gradient">사용자 경험</span>
          </h2>
          <p class="paragraph">프로젝트 및 다양한 프로그램 사용 노하우를 적용해보세요</p>
          <ul class="space-y-4 sm:space-y-2">
            <LandingListItem title="다양한 개발을 하면서 겪은 노하우와 경험을 제공합니다." />
            <LandingListItem title="머물러 있는 개발이 아닌 도전적이 개발 추구" />
            <LandingListItem title="안정적인 서비스를 위한 개발" />
          </ul>
<!--          <BaseButton-->
<!--            class="w-full sm:max-w-[240px] px-10 py-4 bg-inherit text-gradient border border-[#0c66ee] text-base"-->
<!--          >Join the waitlist</BaseButton-->
<!--          >-->
        </div>
      </BaseSection>
    </section>

    <!-- Advanced trading tools section -->
    <section class="bg-trading-tools relative max-w-full sm:mx-4 my-20 py-16 shadow rounded-2xl overflow-hidden">
      <div class="relative max-w-screen-xl px-4 sm:px-2 mx-auto grid grid-cols-12 gap-x-6">
        <LandingTradingToolImage class="sm:hidden" />
        <div data-aos="fade-right" class="col-span-12 lg:col-span-6 space-y-8 sm:space-y-6 px-4 sm:px-6 mt-8">
          <h2 class="text-4xl font-semibold">다양한 <span class="text-header-gradient">개발도구</span> 사용</h2>
          <div class="space-y-2">
            <h4 class="text-lg font-medium">도구의 중요성</h4>
            <p class="paragraph text-sm xl:text-base">
              개발 도구는 복잡한 문제를 해결하고, 코드를 관리하며, 프로젝트의 요구사항을 충족시키는 데 필수적입니다. 현대적인 도구들은 클라우드 서비스, 자동화된 테스트, 컨테이너화, 버전 관리 등을 지원하여 개발자가 보다 집중하여 더 창의적인 솔루션을 개발할 수 있도록 돕습니다.
            </p>
          </div>
          <div class="space-y-2">
            <h4 class="text-lg font-medium">도구의 다양성</h4>
            <p class="paragraph text-sm xl:text-base">
              다양한 개발 도구를 사용하는 것은 개발자로 하여금 여러 프로그래밍 언어와 프레임워크에 대한 이해를 넓히는 동시에, 다양한 문제에 대응할 수 있는 능력을 키울 수 있도록 합니다. 예를 들어, JetBrains의 IntelliJ IDEA는 Java 개발에 최적화된 도구이며, Microsoft의 Visual Studio는 .NET 프레임워크와 C# 개발에 강력한 지원을 제공합니다
            </p>
          </div>
          <div class="space-y-2">
            <h4 class="text-lg font-medium">향상된 제품 품질</h4>
            <p class="paragraph text-sm xl:text-base">
              다양한 개발 도구를 활용하면, 버그를 조기에 발견하고 수정할 수 있는 자동화된 테스트 및 코드 검사 기능을 이용할 수 있습니다. 이는 최종 제품의 안정성과 성능을 개선하는 결과를 가져오며, 고객에게 더 높은 품질의 소프트웨어를 제공할 수 있습니다.
            </p>
          </div>
        </div>
        <LandingTradingToolImage data-aos="fade-left" class="hidden sm:block" />
      </div>
    </section>

    <!-- Industry-leading security section -->
    <section class="w-full my-24">
      <div class="relative max-w-screen-xl px-8 mx-auto grid grid-cols-12 gap-x-6">
        <div data-aos="fade-right" class="col-span-12 lg:col-span-6">
          <div class="w-full">
            <img :src="require('~/assets/img/industry-leading-security.png')" class="w-full" alt="" />
          </div>
        </div>
        <div data-aos="fade-left" class="col-span-12 lg:col-span-5 space-y-8 sm:space-y-6 mt-8 xl:px-8">
          <h2 class="text-4xl font-semibold">개인 <span class="text-header-gradient">보안</span> 중요성</h2>
          <ul class="space-y-8 sm:space-y-4">
            <LandingListItem title="내부보안관리">
              <p class="text-sm text-gray-700 leading-relaxed">
                기술 및 코드 유출의 상당 부분은 내부자에 의해 발생할 수 있습니다. 이를 방지하기 위해 정기적인 보안 교육을 실시하고, 직원의 보안 의식을 강화하는 것이 중요합니다. 또한, 행동 분석을 통해 비정상적인 활동을 감지하고 즉시 대응할 수 있는 시스템을 구축해야 합니다.
<!--                <span class="underline">Learn more</span> about our commitment to security.-->
              </p>
            </LandingListItem>
            <LandingListItem title="계약과 법적 보호">
              <p class="text-sm text-gray-700 leading-relaxed">
                모든 개발자와 협력 업체는 기술 유출을 방지하기 위한 법적 계약(비밀 유지 계약, NDA)에 서명해야 합니다. 이러한 계약은 지적 재산의 중요성을 강조하고, 유출 시의 법적 책임을 명확히 합니다.
              </p>
            </LandingListItem>
            <LandingListItem title="문서와 코드의 접근 권한 관리">
              <p class="text-sm text-gray-700 leading-relaxed">
                자신이 관리하는 문서나 코드에 대해 불필요한 접근 권한을 제한해야 합니다. 접근 권한은 업무상 필요한 최소한의 범위에 국한되어야 하며, 권한 변경이 필요한 경우 즉시 조정해야 합니다.
              </p>
            </LandingListItem>
          </ul>
        </div>
      </div>
    </section>

    <!-- Getting started section -->
    <section class="bg-trading-tools relative max-w-full sm:mx-4 xl:mx-10 my-24 shadow sm:rounded-2xl overflow-hidden">
      <div class="w-full py-16 flex flex-col items-center">
        <h2 data-aos="flip-down" class="text-3xl sm:text-4xl font-semibold text-center">
          함께 일하는 방법
        </h2>
        <div
          data-aos="fade-up"
          class="relative w-full flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 px-4 xl:px-10 mt-16 sm:mt-8"
        >
          <LandingStep v-for="step in steps" :key="step.title" :step="step" />
          <img
            :src="require('~/assets/img/getting-started/arrow.png')"
            class="hidden lg:inline-block absolute top-32 left-64 xl:left-[22rem] w-24 xl:w-[9.5rem]"
            alt=""
          />
          <img
            :src="require('~/assets/img/getting-started/arrow.png')"
            class="hidden lg:inline-block absolute top-32 right-64 xl:right-[22rem] w-24 xl:w-[9.5rem]"
            alt=""
          />
        </div>
      </div>
    </section>

    <!-- FAQ section -->
    <section class="w-full my-24">
      <BaseSection>
        <div data-aos="fade-right" data-aos-delay="150" class="col-span-12 lg:col-span-6">
          <div class="w-full">
            <img :src="require('~/assets/img/faq.png')" class="w-full" alt="" />
          </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="150" class="col-span-12 lg:col-span-6 px-4 sm:px-6 mt-8">
          <span class="text-base text-gradient font-semibold uppercase mb-4 sm:mb-2">Support</span>
          <h2 class="text-3xl sm:text-4xl font-semibold mb-10 sm:mb-6">FAQ</h2>

          <ul class="shadow-box">
            <BaseAccordion v-for="(accordion, index) in accordions" :key="index" :accordion="accordion" />
          </ul>
        </div>
      </BaseSection>
    </section>

    <div class="w-full my-10 flex justify-center">
      <a
        v-smooth-scroll
        data-aos="flip-down"
        data-aos-delay="150"
        href="#navbar"
        class="px-6 py-3 flex items-center space-x-2 bg-[#FAFAFA] hover:bg-gray-100 hover:shadow-md border border-[#DDDDDD] rounded-md text-gray-700"
      >
<!--        <span>맨 위로</span>-->
        <ArrowUpIcon :size="20" />
      </a>
    </div>
  </div>
</template>

<script>
import aosMixin from '@/mixins/aos'
export default {
  methods: {
    goToKakaoLink () {
      window.location = 'https://open.kakao.com/o/svJzkzqg'
    },
    goPlayStore () {
      window.location = 'https://play.google.com/store/apps/developer?id=%EC%B0%B8%EC%B0%B8'
    },
    async saveContactNumberSubmit () {
      try {
        // FormData 객체 생성
        const formData = new FormData()
        formData.append('contactName', this.contactName)
        formData.append('contactNumber', this.contactNumber)

        // Axios를 사용한 POST 요청
        const response = await this.$axios.post('/two/number', formData, {
          headers: {
            'Content-Type': 'application/json'
          }
        })

        if (response.status === 200) {
          if (response.data.msg) {
            alert(response.data.msg)
          }
          this.$router.push('/')
        } else {
          alert(response.data.errorMessage) // response 객체에서 오류 메시지 접근 방식 확인 필요
        }
      } catch (error) {
        console.error('Login error:', error)
        alert('저장중 오류가 발생하였습니다.')
      }
    },
    copyToClipboard (text) {
      navigator.clipboard.writeText(text).then(() => {
        alert('이메일 주소가 클립보드에 복사되었습니다.')
      }).catch((err) => {
        console.error('클립보드 복사 실패:', err)
      })
    }
  },
  name: 'IndexPage',
  mixins: [aosMixin],
  data () {
    return {
      contactName: '',
      contactNumber: '',
      selected: 0,
      dropdownConcurency: false,
      dropdownCrypto: false,
      currencySelected: {
        img: 'country-icon/eng.png',
        name: 'USD'
      },
      currencies: [
        {
          img: 'country-icon/eng.png',
          name: 'USD'
        }
      ],
      cryptoSelected: {
        img: 'crypto-icon/bitcoin.png',
        name: 'BTC'
      },
      cryptocurrencies: [
        {
          img: 'crypto-icon/bitcoin.png',
          name: 'BTC'
        }
      ],
      trendings: [
        {
          id: 1,
          name: 'VUE',
          udt: '2024-05',
          price: 43180.13,
          logo: 'vue.png',
          increase: true,
          data: [40, 35, 60, 75, 60, 75, 50]
        },
        {
          id: 2,
          name: 'FLUTTER',
          udt: '2024-01',
          price: 3480.65,
          logo: 'flutter.png',
          increase: false,
          data: [25, 30, 60, 50, 80, 55, 80]
        },
        {
          id: 3,
          name: 'SPRING',
          price: 150.2,
          udt: '2024-01',
          logo: 'spring.png',
          increase: true,
          data: [40, 45, 40, 80, 50, 60, 35]
        },
        {
          id: 4,
          name: 'SWIFT',
          price: 0.1572,
          udt: '2024-01',
          logo: 'swift.png',
          increase: true,
          data: [35, 70, 60, 80, 50, 60, 40]
        },
        {
          id: 5,
          name: 'KOTLIN',
          price: 0.1572,
          udt: '2024-01',
          logo: 'kotlin.png',
          increase: true,
          data: [35, 70, 60, 80, 50, 60, 40]
        }
      ],
      topGainers: [
        {
          id: 1,
          name: 'INTELLIJ',
          price: 0.00374,
          logo: 'intellij.png',
          increase: true,
          data: [30, 50, 45, 60, 70, 40, 45]
        },
        {
          id: 2,
          name: 'POSTMAN',
          price: 0.02096,
          logo: 'postman.png',
          increase: true,
          data: [25, 60, 50, 60, 35, 50, 70]
        },
        {
          id: 3,
          name: 'FIGMA',
          price: 0.004907,
          logo: 'figma.png',
          increase: true,
          data: [40, 35, 40, 25, 50, 70, 45]
        },
        {
          id: 4,
          name: 'DBEAVER',
          price: 0.000123,
          logo: 'dbeaver.png',
          increase: true,
          data: [45, 35, 40, 30, 25, 45, 35]
        },
        {
          id: 4,
          name: 'FORK',
          price: 0.000123,
          logo: 'fork.png',
          increase: true,
          data: [45, 35, 40, 30, 25, 45, 35]
        }
      ],
      recents: [
        {
          id: 1,
          name: 'GRAFANA',
          price: 0.0608,
          logo: 'grafana.png',
          increase: false,
          data: [40, 50, 45, 60, 35, 40, 45]
        },
        {
          id: 2,
          name: 'LOKI',
          price: 0.5875,
          logo: 'loki.png',
          increase: false,
          data: [25, 50, 45, 48, 40, 60, 45]
        },
        {
          id: 3,
          name: ' PROMETHEUS',
          price: 0.04041,
          logo: 'prometheus.png',
          increase: true,
          data: [25, 35, 60, 45, 50, 45, 45]
        },
        {
          id: 4,
          name: 'GIT',
          price: 1366.24,
          logo: 'git.png',
          increase: true,
          data: [35, 30, 60, 50, 35, 45, 40]
        },
        {
          id: 5,
          name: 'SVN',
          price: 1366.24,
          logo: 'subversion.png',
          increase: true,
          data: [35, 30, 60, 50, 35, 45, 40]
        }
      ],
      accordions: [
        {
          title: '프로젝트 진행',
          description: 'Spring , Mybatis , jQuery, Jsp를 주로 개발진행하였습니다.'
        },
        {
          title: '개발 스타일',
          description:
            '새로운것에 대한 거부감은 없으며 잼있어 보이는 개발이 있으면 진행해보는 스타일입니다.'
        },
        {
          title: 'FLUTTER',
          description: '플러터는 작년 2023년 12월 부터 시작하였고 상태관리는 Hook 으로 진행하였고 진행한 프로젝트는 1건입니다.'
        },
        {
          title: 'Vue',
          description: '최근에 Vue를 시작하면서 해당 페이지를 제작하게 되었습니다. vue 는 2024.05월부터 시작하였고. vue 프레임워크로는 nuxt를 사용하고 css는 Tailwind를 사용하고있습니다.'
        }
      ],
      steps: [
        {
          img: 'sign-up.png',
          title: '연락',
          description:
            '연락처를 남겨 주시면 이메일 또는 전화를 통해 일정을 조율합니다.'
        },
        {
          img: 'fund.png',
          title: '협의',
          description:
            '상세한 논의를 통해 서로의 요구사항과 기대를 명확히 하고, 실행 가능한 계획을 수립합니다.'
        },
        {
          img: 'buy-crypto.png',
          title: '협업',
          description:
            '약속된 계획에 따라 각자의 역할을 충실히 수행하며, 공동의 목표를 향해 함께 노력합니다'
        }
      ]
    }
  }
}
</script>
<style scoped>
.text-header-gradient {
  background: rgb(57, 132, 244);
  background: linear-gradient(169.4deg, #3984f4 -6.01%, #0cd3ff 36.87%, #2f7cf0 78.04%, #0e65e8 103.77%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.bg-partner {
  background: url('../assets/img/partner/background.png');
  background-size: cover;
  background-position: center;
}
.bg-trading-tools {
  background: url('../assets/img/bg-trading-tools.webp');
  background-size: cover;
  background-position: center;
}
.max-h-0 {
  max-height: 0;
}
</style>
