<template>
  <section
    class="max-w-screen-xl mt-6 mx-2 sm:mx-auto px-4 sm:px-6 lg:px-0 py-6 pb-20 sm:py-8 rounded-[2.25rem] sm:rounded-xl bg-white shadow-lg sm:shadow-md transform lg:-translate-y-12"
  >
    <div class="w-full flex flex-col lg:flex-row items-start justify-center">
      <div class="w-full lg:w-1/2 m-6 lg:mt-0 overflow-hidden space-y-6" v-bind="$attrs">
        <div class="w-full flex items-center justify-between">
          <span class="font-medium">프로젝트정보</span>
        </div>
        <div>
          <ProjectTextBox
            label-name="사업명"
            :label-value="profileProject.name"
          ></ProjectTextBox>
          <ProjectTextBox
            label-name="사업기간"
            :label-value="profileProject.date"
          ></ProjectTextBox>
          <ProjectTextBox
            label-name="담당업무"
            :label-value="profileProject.duty"
          ></ProjectTextBox>
          <ProjectTextBox
            label-name="프론트"
            :label-value="profileProject.front"
          ></ProjectTextBox>
          <ProjectTextBox
            label-name="백엔드"
            :label-value="profileProject.back"
          ></ProjectTextBox>
        </div>
      </div>
      <div class="w-full lg:w-1/4 mt-6 lg:mt-0 overflow-hidden space-y-6" v-bind="$attrs">
        <div class="w-full flex items-center justify-between">
          <span class="font-medium">F</span>
        </div>
        <div class="flex flex-col">
          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="px-2 sm:px-6 py-2 align-middle inline-block min-w-full overflow-hidden">
              <table class="min-w-full">
                <thead>
                <tr>
                  <th class="text-left text-sm font-medium text-gray-500"></th>
                  <th class="text-left text-sm font-medium text-gray-500"></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="data in projectSkills" :key="data.id" class="border-b border-gray-200">
                  <td class="py-4 whitespace-nowrap">
                    <div class="flex items-center space-x-2 p-2">
                      <img :src="require(`~/assets/img/lang-icon/${data.logo}`)" alt="" />
                      <span>{{ data.name }}</span>
                    </div>
                  </td>
                  <td class="py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <PlusThickIcon v-if="data.increase" :size="14" class="text-emerald-500" />
                      <MinusThickIcon v-else :size="14" class="text-red-500" />
                    </div>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-1/4 mt-6 lg:mt-0 overflow-hidden space-y-6" v-bind="$attrs">
        <div class="w-full flex items-center justify-between">
          <span class="font-medium">T</span>
        </div>
        <div class="flex flex-col">
          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="px-2 sm:px-6 py-2 align-middle inline-block min-w-full overflow-hidden">
              <table class="min-w-full">
                <thead>
                <tr>
                  <th class="text-left text-sm font-medium text-gray-500"></th>
                  <th class="text-left text-sm font-medium text-gray-500"></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="data in projectTools" :key="data.id" class="border-b border-gray-200">
                  <td class="py-4 whitespace-nowrap">
                    <div class="flex items-center space-x-2 p-2">
                      <img :src="require(`~/assets/img/lang-icon/${data.logo}`)" alt="" />
                      <span>{{ data.name }}</span>
                    </div>
                  </td>
                  <td class="py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <PlusThickIcon v-if="data.increase" :size="14" class="text-emerald-500" />
                      <MinusThickIcon v-else :size="14" class="text-red-500" />
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
import ProjectTextBox from '~/components/profile/project/ProjectTextBox'
import aosMixin from '~/mixins/aos'

export default {
  name: 'ProjectContainer',
  components: { ProjectTextBox },
  mixins: [aosMixin],
  props: {
    profileProject: {
      type: Object,
      default: () => ({
        name: '프로젝트 명을 입력해주세요',
        date: '프로젝트 기간명을 입력해주세요',
        duty: '프로젝트 담당업무를 입력해주세요d',
        front: '프론트',
        back: '백엔드'
      }),
      required: true
    },
    projectSkills: {
      type: Array,
      default: () => []
    },
    projectTools: {
      type: Array,
      default: () => []
    }
  }
}
</script>
