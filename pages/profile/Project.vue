<template>
  <div>
    <ProjectContainer
      :project-info="projectInfo"
      :project-skills="skills"
      :project-tools="tools"
      />
    <ProjectContainer
      :project-info="projectInfo2"
      :project-skills="skills2"
      :project-tools="tools2"
    />
    <ProjectContainer
      :project-info="projectInfo3"
      :project-skills="skills3"
      :project-tools="tools3"
    />
    <ProjectContainer
      :project-info="projectInfo4"
      :project-skills="skills4"
      :project-tools="tools4"
    />
    <ProjectContainer
      :project-info="projectInfo5"
      :project-skills="skills5"
      :project-tools="tools5"
    />
    <ProjectContainer
      :project-info="projectInfo6"
      :project-skills="skills6"
      :project-tools="tools6"
    />
    <ProjectContainer
      :project-info="projectInfo7"
      :project-skills="skills7"
      :project-tools="tools7"
    />
    <ProjectContainer
      :project-info="projectInfo8"
      :project-skills="skills8"
      :project-tools="tools8"
    />
    <ProjectContainer
      :project-info="projectInfo9"
      :project-skills="skills9"
      :project-tools="tools9"
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
      projectInfo: {
        name: 'DGIST 통합정보시스템 고도화사업 유지보수',
        date: '2013-12-01 ~ 2016-01-01',
        duty: 'CRUD 화면 개밞 및 유지보수',
        front: 'Jsp , Jquery',
        back: 'Spring Framework, Oracle'
      },
      skills: [
        {
          name: 'SPRING(Egov)',
          logo: 'spring.png'
        },
        {
          name: 'ORACLE',
          logo: 'oracle.png'
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
      ],
      projectInfo2: {
        name: 'LH토지주택공사 전자결재 / 포탈 운영 및 개발',
        date: '2016-03-01 ~ 2016-10-01',
        duty: 'Acube 전자결재 유지보수',
        front: 'Jsp',
        back: 'Spring Framework, Oracle'
      },
      skills2: [
        {
          name: 'SPRING(Egov)',
          logo: 'spring.png'
        },
        {
          name: 'ORACLE',
          logo: 'oracle.png'
        },
        {
          name: 'JSP',
          logo: 'jsp.png'
        },
        {
          name: 'BATIS',
          logo: 'batis.png'
        }
      ],
      tools2: [
        {
          name: 'ECLIPSE',
          logo: 'eclipse.png'
        },
        {
          name: 'SQLDEVLOPER',
          logo: 'sqldeveloper.png'
        },
        {
          name: 'SVN',
          logo: 'subversion.png'
        }
      ],
      projectInfo3: {
        name: '경상북도 관광공사 MIS개발',
        date: '2016-10-01 ~ 2017-04-01',
        duty: '골프장 신청화면 및 통계화면 개발',
        front: 'Jsp, Jquery',
        back: 'Spring Framework, Oracle'
      },
      skills3: [
        {
          name: 'SPRING(Egov)',
          logo: 'spring.png'
        },
        {
          name: 'Oracle',
          logo: 'oracle.png'
        },
        {
          name: 'Jquery',
          logo: 'jquery.png'
        },
        {
          name: 'BATIS',
          logo: 'batis.png'
        }
      ],
      tools3: [
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
      ],
      projectInfo4: {
        name: '한국자산관리공사 전자결재 고도화 사업',
        date: '2017-08-01 ~ 2018-03-01',
        duty: '기존화면 리팩토링 및 전자결재 서식 작성 지원',
        front: 'Jsp, jQuery',
        back: 'Spring Framework, Oracle'
      },
      skills4: [
        {
          name: 'SPRING(Egov)',
          logo: 'spring.png'
        },
        {
          name: 'Oracle',
          logo: 'oracle.png'
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
      tools4: [
        {
          name: 'ECLIPSE',
          logo: 'eclipse.png'
        },
        {
          name: 'SQLDEVLOPER',
          logo: 'sqldeveloper.png'
        },
        {
          name: 'SVN',
          logo: 'subversion.png'
        }
      ],
      projectInfo5: {
        name: '한국사학진흥재단 전자결재 고도화사업',
        date: '2017-08-01 ~ 2018-03-01',
        duty: '핸디 8버전 업그레이드 및 대장관리 개발',
        front: 'Jsp, jQuery',
        back: 'Spring Framework, Oracle'
      },
      skills5: [
        {
          name: 'SPRING(Egov)',
          logo: 'spring.png'
        },
        {
          name: 'Oracle',
          logo: 'oracle.png'
        },
        {
          name: 'JQUERY',
          logo: 'jquery.png'
        },
        {
          name: 'HIBERNATE',
          logo: 'hibernate.png'
        }
      ],
      tools5: [
        {
          name: 'ECLIPSE',
          logo: 'eclipse.png'
        },
        {
          name: 'SQLDEVLOPER',
          logo: 'sqldeveloper.png'
        },
        {
          name: 'SVN',
          logo: 'subversion.png'
        },
        {
          name: 'REPORT DESIGNER',
          logo: 'reportdesigner.png'
        }
      ],
      projectInfo6: {
        name: '한국장학재단 고도화사업',
        date: '2019-11-01 ~ 2020-05-01',
        duty: '핸디 8버전 업그레이드 및 대장관리 개발',
        front: 'Jsp, jQuery',
        back: 'Spring Framework, Oracle'
      },
      skills6: [
        {
          name: 'SPRING(Egov)',
          logo: 'spring.png'
        },
        {
          name: 'Oracle',
          logo: 'oracle.png'
        },
        {
          name: 'JQUERY',
          logo: 'jquery.png'
        },
        {
          name: 'HIBERNATE',
          logo: 'hibernate.png'
        }
      ],
      tools6: [
        {
          name: 'ECLIPSE',
          logo: 'eclipse.png'
        },
        {
          name: 'SQLDEVLOPER',
          logo: 'sqldeveloper.png'
        },
        {
          name: 'SVN',
          logo: 'subversion.png'
        },
        {
          name: 'GRAFANA',
          logo: 'grafana.png'
        }
      ],
      projectInfo7: {
        name: '홈페이지, 인트라넷 유지보수',
        date: '2022-01-03 ~ 2024-06-14',
        duty: '인트라넷 유지보수 및 홈페이지 이벤트 관련 페이지 개발',
        front: 'Jsp, jQuery, bootstrap',
        back: 'Spring Framework, MariaDB'
      },
      skills7: [
        {
          name: 'SPRING(Egov)',
          logo: 'spring.png'
        },
        {
          name: 'MARIA',
          logo: 'maria.png'
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
      tools7: [
        {
          name: 'INTELLIJ',
          logo: 'intellij.png'
        },
        {
          name: 'DBEAVER',
          logo: 'dbeaver.png'
        },
        {
          name: 'GIT',
          logo: 'git.png'
        },
        {
          name: 'FIGMA',
          logo: 'figma.png'
        }
      ],
      projectInfo8: {
        name: '물류배송관련',
        date: '2022-01-03 ~ 현재',
        duty: '물류배송 관리를 위한 심플 앱',
        front: 'Flutter , JSP',
        back: 'SpringBoot , MariaDB'
      },
      skills8: [
        {
          name: 'FLUTTER',
          logo: 'flutter.png'
        },
        {
          name: 'MariaDB',
          logo: 'maria.png'
        },
        {
          name: 'Spring Boot',
          logo: 'spring.png'
        },
        {
          name: 'GRAFANA',
          logo: 'grafana.png'
        },
        {
          name: 'PROMETHEUS',
          logo: 'prometheus.png'
        }
      ],
      tools8: [
        {
          name: 'ANDROID STUDIO',
          logo: 'intellij.png'
        },
        {
          name: 'DBEAVER',
          logo: 'dbeaver.png'
        },
        {
          name: 'GIT',
          logo: 'git.png'
        },
        {
          name: 'FIGMA',
          logo: 'figma.png'
        },
        {
          name: 'LOKI',
          logo: 'loki.png'
        }
      ],
      projectInfo9: {
        name: '개인 프로필 페이지',
        date: '2022-05-01 ~ 현재',
        duty: '개인 프로필 페이지',
        front: 'Vue, Nuxt',
        back: 'Spring Boot, MariaDB, PM2'
      },
      skills9: [
        {
          name: 'Vue',
          logo: 'vue.png'
        },
        {
          name: 'Spring Boot',
          logo: 'spring.png'
        },
        {
          name: 'Maria',
          logo: 'maria.png'
        },
        {
          name: 'PM2',
          logo: 'pm2.png'
        },
        {
          name: 'GRAFANA',
          logo: 'grafana.png'
        },
        {
          name: 'PROMETHEUS',
          logo: 'prometheus.png'
        }
      ],
      tools9: [
        {
          name: 'Intellij',
          logo: 'intellij.png'
        },
        {
          name: 'DBEAVER',
          logo: 'dbeaver.png'
        },
        {
          name: 'GIT',
          logo: 'git.png'
        },
        {
          name: 'FIGMA',
          logo: 'figma.png'
        },
        {
          name: 'LOKI',
          logo: 'loki.png'
        },
        {
          name: 'AWS EC2',
          logo: 'ec2.png'
        }
      ]
    }
  }
}
</script>
