<template>
  <div>
    <ProjectContainer
      :project-skills="skills"
      :project-tools="tools"
      />
    <ProjectContainer
      :project-skills="skills"
      :project-tools="tools"
    />
  </div>
</template>
<script>
import ProjectContainer from '~/components/profile/project/ProjectContainer'
import aosMixin from '~/mixins/aos'
export default {
  name: 'ProfileProject',
  components: { ProjectContainer },
  mixins: [aosMixin],
  data () {
    return {
      skills: [
        {
          name: 'SPRING',
          logo: 'spring.png'
        },
        {
          name: 'JAVASCRIPT',
          logo: 'javascript.png'
        },
        {
          name: 'JQUERY',
          logo: 'jquery.png'
        },
        {
          name: 'BATIS',
          logo: 'batis.png'
        }
      ],
      tools: [
        {
          name: 'ECLIPSE',
          logo: 'eclipse.png'
        },
        {
          name: 'SQLDEVLOPER',
          logo: 'sqldeveloper.png'
        },
        {
          name: 'REPORTDESIGNER',
          logo: 'reportdesigner.png'
        },
        {
          name: 'SVN',
          logo: 'subversion.png'
        }
      ]
    }
  }
}
</script>
