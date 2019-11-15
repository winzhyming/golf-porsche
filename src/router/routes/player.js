import Index from '@/views/index'
import Menu from '@/views/player/menu'
import EventMain from '@/views/player/event/index'
import EventMenu from '@/views/player/event/event-menu'
import EventForm from '@/views/player/event/event-form'
import EventRule from '@/views/player/event/event-rule'
import EventGroup from '@/views/player/event/event-group'
import EventResult from '@/views/player/event/event-result'
import ScheduleMain from '@/views/player/schedule/index'
import ScheduleList from '@/views/player/schedule/schedule-list'
import MapMain from '@/views/player/map/index'
import MapHotel from '@/views/player/map/map-hotel'
import ForecastMain from '@/views/player/forecast/index'
import ForecastWeather from '@/views/player/forecast/forecast-weather'
import ColMain from '@/views/player/collection/index'
import VideosPics from '@/views/player/collection/videos-pics'
import ActivityMain from '@/views/player/activity/index'
import ActivityMenu from '@/views/player/activity/activity-menu'
import BusSchedule from '@/views/player/activity/bus-schedule'
import Dressugestion from '@/views/player/activity/dress-suggestion'
import EmergContact from '@/views/player/activity/emergency-contact'
import ActivitySponsor from '@/views/player/activity/activity-sponsor'
import SiteMain from '@/views/player/site/index'
import SiteGuide from '@/views/player/site/site-guide'

export default {
    path: '/player',
    component: Index,

    children: [{
            path: '/',
            name: 'player',
            component: Menu
        },
        {
            path: 'activity',
            component: ActivityMain,

            children: [{
                    path: '/',
                    name: 'activity.menu',
                    component: ActivityMenu,
                },
                {
                    path: 'buschedule',
                    name: 'activity.buschedule',
                    component: BusSchedule
                },
                {
                    path: 'dressugestion',
                    name: 'activity.dressugestion',
                    component: Dressugestion
                },
                {
                    path: 'emergcontact',
                    name: 'activity.emergcontact',
                    component: EmergContact
                },
                {
                    path: 'sponsor',
                    name: 'activity.sponsor',
                    component: ActivitySponsor
                }
            ]
        },
        {
            path: 'event',
            component: EventMain,

            children: [{
                    path: '/',
                    name: 'event.menu',
                    component: EventMenu
                },
                {
                    path: 'form',
                    name: 'event.form',
                    component: EventForm
                },
                {
                    path: 'rule',
                    name: 'event.rule',
                    component: EventRule
                },
                {
                    path: 'group',
                    name: 'event.group',
                    component: EventGroup
                },
                {
                    path: 'result',
                    name: 'event.result',
                    component: EventResult
                }
            ]
        },
        {
            path: 'schedule',
            component: ScheduleMain,

            children: [{
                path: '/',
                name: 'schedule.list',
                component: ScheduleList
            }]
        },
        {
            path: 'site',
            component: SiteMain,

            children: [{
                path: '/',
                name: 'site.guide',
                component: SiteGuide
            }]
        },
        {
            path: 'map',
            component: MapMain,

            children: [{
                path: 'hotel',
                name: 'map.hotel',
                component: MapHotel
            }]
        },
        {
            path: 'forecast',
            component: ForecastMain,

            children: [{
                path: 'weather',
                name: 'forecast.weather',
                component: ForecastWeather
            }]
        },
        {
            path: 'collection',
            component: ColMain,

            children: [{
                path: 'col',
                name: 'col.videospics',
                component: VideosPics
            }]
        }
    ]
}


// WEBPACK FOOTER //
// ./src/router/routes/player.js