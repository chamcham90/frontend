<template>
  <section
    class="max-w-screen-xl mt-6 mx-2 sm:mx-auto px-4 sm:px-6 lg:px-0 py-6 pb-20 sm:py-8 rounded-[2.25rem] sm:rounded-xl bg-white shadow-lg sm:shadow-md transform lg:-translate-y-12"
  >
    <div class="w-full flex flex-col lg:flex-row items-center justify-center">
      <div class="w-full lg:w-1/3 m-6 lg:mt-0 overflow-hidden space-y-6" v-bind="$attrs">
        <div class="w-full flex items-center justify-between">
          <span class="font-medium">프로젝트정보</span>
          <button
            href="#"
            class="px-3 py-1 text-sm font-medium text-blue-500 flex items-center space-x-1 rounded-md hover:bg-blue-50 transition duration-300"
          >
          </button>
        </div>
        <ProjectTextBox labelName="이름" labelValue="개인홈페이지"></ProjectTextBox>
      </div>
      <div class="w-full lg:w-1/6 mt-6 lg:mt-0 overflow-hidden space-y-6" v-bind="$attrs">
        <div class="w-full flex items-center justify-between">
          <span class="font-medium">Use</span>
          <button
            href="#"
            class="px-3 py-1 text-sm font-medium text-blue-500 flex items-center space-x-1 rounded-md hover:bg-blue-50 transition duration-300"
          >
            <ChevronRightIcon :size="16" />
          </button>
        </div>
        <div class="flex flex-col">
          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="px-2 sm:px-6 py-2 align-middle inline-block min-w-full overflow-hidden">
              <table class="min-w-full">
                <thead>
                <tr>
                  <th class="text-left text-sm font-medium text-gray-500">Name</th>
                  <th class="text-left text-sm font-medium text-gray-500"></th>
                  <!--                <th class="hidden sm:block text-left text-sm font-medium text-gray-500">Chart</th>-->
                </tr>
                </thead>
                <tbody>
                <tr v-for="data in datasets" :key="data.id" class="border-b border-gray-200">
                  <td class="py-4 whitespace-nowrap">
                    <div class="flex items-center space-x-2">
                      <img :src="require(`~/assets/img/lang-icon/${data.logo}`)" alt="" />
                      <span>{{ data.name }}</span>
                    </div>
                  </td>
                  <td class="py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <PlusThickIcon v-if="data.increase" :size="14" class="text-emerald-500" />
                      <MinusThickIcon v-else :size="14" class="text-red-500" />
                      <!--<span>{{ data?.udt }}</span>-->
                    </div>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'ProfileProject',
  components: true,
  props: {
    datasets: [
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
    ]
  }

}
</script>
