import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public editorOptions: JsonEditorOptions;
  public data = {"products":[{"name":"car","product":[{"name":"honda","model":[{"id":"civic","name":"civic"},{"id":"accord","name":"accord"},{"id":"crv","name":"crv"},{"id":"pilot","name":"pilot"},{"id":"odyssey","name":"odyssey"}]}]}]};
  public form;
  // @ViewChild(JsonEditorComponent, { static: false })
  // editor: JsonEditorComponent = new JsonEditorComponent;

 

  title = 'Sample';
  public flattenedArray: any = [];
  public json = {
    home: {
                line1: 'EXPERIENCE',
                line2: 'Hassle-Free',
                line2_ext: 'Solar',
                box1: {
                  line1: 'Less',
                  line2: 'time',
                  content: 'Get multiple quotes in one place, instead of negotiating with each installer.'
                },
  }
};

constructor(public fb: FormBuilder) {
  this.editorOptions = new JsonEditorOptions();
  this.editorOptions.modes = ['tree']; // set all allowed modes
  this.form = this.fb.group({
    myinput: [this.data]
  });

}
  // public json = {
  //   _main: {
  //     banner: {
  //       html: '<b>Update:</b> During COVID-19, the process of going solar on Solar.com is <b>exactly the same as it always is - fully remote and online.</b> From the comfort of your home, you can shop, compare, and discuss with a dedicated energy advisor to ensure you’re getting the best deal.'
  //     },
  //     'default-disclaimer': {
  //       html: 'This website contains links to third-party external websites. SCE does not endorse, or accept any liability for, the content of, or products sold on any third-party websites. <a href="https://pickmysolar.com/sce-terms-conditions-and-privacy-policy/" target="_blank">Click here</a> for Pick My Solar’s Terms and Conditions.'
  //     },
  //     'terms-and-conditions': {
  //       url: 'https://pickmysolar.com/terms-conditions-and-privacy-policy/',
  //       privacyURL: 'https://www.lg.com/us/privacy',
  //       support: 'https://www.electrum.co/contact'
  //     },
  //     'landing-page': {
  //       'default-landing': {
  //         home: {
  //           line1: 'EXPERIENCE',
  //           line2: 'Hassle-Free',
  //           line2_ext: 'Solar',
  //           box1: {
  //             line1: 'Less',
  //             line2: 'time',
  //             content: 'Get multiple quotes in one place, instead of negotiating with each installer.'
  //           },
  //           box2: {
  //             line1: 'More',
  //             line2: 'Savings',
  //             content: 'Our network of approved installers compete for your project, giving you a competitive price.'
  //           },
  //           box3: {
  //             line1: '100%',
  //             line2: 'Online',
  //             content: 'Our online tools will allow you to compare and select the bid that best fits you.'
  //           },
  //           address_bottom: {
  //             title: 'Why do we need an address?',
  //             tooltip: 'Every rooftop is unique. Your address allows our energy advisors to accurately design a system that best fits your needs.Don\'t worry, your information will not be shared with any third parties without consent.'
  //           }
  //         },
  //         estimate: {
  //           title: 'Find the Best Solar Deal in the Market',
  //           error_msg: 'Wrong home? Click a different roof on the map to view your home’s estimates.',
  //           disclaimer: 'The estimates above are based on your address, monthly energy bill, and financing your system with $0 down 20 year loan. Cash, lease, and other loan terms are available as well.'
  //         },
  //       },
  //       'v3-landing': {
  //         home: {
  //           line1: 'EXPERIENCE',
  //           line2: 'Hassle-Free',
  //           line2_ext: 'Solar',
  //           how_much : 'See how much you can save by switching to solar.',
  //           your_addr: 'Your address allows us to find available incentives in your area and find historical pricing from installers in our network.',
  //           dnt_wrry: 'Don’t worry, your information will not be shared with any third parties without consent.',
  //           box1: {
  //             line1: 'Less',
  //             line2: 'time',
  //             content: 'Get multiple quotes in one place, instead of negotiating with each installer.'
  //           },
  //           box2: {
  //             line1: 'More',
  //             line2: 'Savings',
  //             content: 'Our network of approved installers compete for your project, giving you a competitive price.'
  //           },
  //           box3: {
  //             line1: '100%',
  //             line2: 'Online',
  //             content: 'Our online tools will allow you to compare and select the bid that best fits you.'
  //           },
  //           address_bottom: {
  //             title: 'Why do we need an address?',
  //             tooltip_text: 'Your address allows us to find available incentives in your area and find historical pricing from installers in our network. Don\'t worry, your information will not be shared with any third parties without consent.'
  //           },
  //           home_bg: ''
  //         },
  //         estimate: {
  //           filter_title: 'Tell Us About Your Project',
  //           filter_location: 'Location',
  //           filter_avg_bill: 'Average Energy Bill',
  //           filter_month: 'Month',
  //           filter_est_sys_size: 'Est. System Size',
  //           filter_fin_pref: 'Financing Preference',
  //           filter_cash: 'Cash',
  //           filter_loan: 'Loan',
  //           filter_add_battery: 'Add home battery to your solar project?',
  //           filter_home_batt: 'Home Batteries Needed',
  //           filter_recommended: 'Recommended',
  //           filter_own_solar: 'Do you already own a solar system?',
  //           filter_add_solar: 'Add solar to your battery project?',
  //           filter_size_solar: 'What’s your solar system size?',
  //           filter_capacity: 'Capacity',
  //           solar_cs: 'Your Community Solar Estimates ',
  //           solar: 'Your project qualifies you for',
  //           solar_ext: 'additional incentives!',
  //           battery: 'Your project qualifies for',
  //           battery_ext: 'incentives!',
  //           content: 'The values on this page are estimates based on your address and monthly energy bill. You can fine-tune these estimates and get multiple offers with our expert energy advisors, absolutely free!',
  //           outages: 'Prepare for Extended Outages',
  //           outages_content: 'If there are any extended power outages, you can keep your essential appliances on with a home battery system.',
  //           with_sun: 'Charge With the Sun',
  //           with_sun_content: 'In an extended outage, a standalone battery will power your home for just one cycle. Pairing your home battery with solar can power your home for days.',
  //           customized_cta: 'Get Customized Offers',
  //           title: 'Find the Best Solar Deal in the Market',
  //           error_msg: 'Wrong home? Click a different roof on the map to view your home’s estimates.',
  //           disclaimer: 'The estimates above are based on your address, monthly energy bill, and financing your system with $0 down 20 year loan. Cash, lease, and other loan terms are available as well.',
  //           hpwh: 'Your project qualifies you for',
  //           hpwh_ext: 'incentives!',
  //           size_water: 'Size your water heater',
  //           fuel_type: 'What is your current water heater fuel type?',
  //           emergency: 'Is this a water heater emergency?',
  //           immediate_help: 'Got it! We will submit to our partner your need for immediate help.',
  //           recomended_text: 'Your Hybrid Electric Water Heater Recommended Options',
  //           electric_heater: 'Heat Pump Electric Water Heater ',
  //           back: 'Back to Results',
  //         },
  //         templates: {
  //           default: 'V3_LANDING_HOME'
  //         }
  //       },
  //       'shared-snippet': {
  //         'v3-loader': {
  //           title: 'Hang Tight!',
  //           'sub-title': 'We’re preparing your estimates.',
  //           'btn-title': 'View Your Estimates',
  //           solar: [
  //             {icon: 'pms-satallite', title: 'Retrieving satellite imagery of your address', alt: 'Icon - Satillite', success: false},
  //             {icon: 'pms-cloudy', title: 'Reviewing your roof’s solar potential', alt: 'Icon - Sun shining behind clouds', success: false},
  //             {icon: 'pms-home', title: 'Configuring solar panel placement', alt: 'Icon - House with Solar panels', success: false},
  //             {icon: 'pms-circle-money', title: 'Analyzing your local energy rates', alt: 'Icon - Savings', success: false},
  //             {icon: 'pms-price-tag', title: 'Searching applicable rebates and incentives', alt: 'Icon - Rebates', success: false},
  //             {icon: 'pms-growth-chart', title: 'Generating estimates based on historical pricing', alt: 'Icon - Pricing history graph', success: false},
  //           ],
  //           battery: [
  //             {icon: 'pms-location', title: 'Retrieving energy usage data in your area', alt: 'Icon - Location', success: false},
  //             {icon: 'pms-file', title: 'Reviewing your utility’s battery policy', alt: 'Icon - Documents', success: false},
  //             {icon: 'pms-energy', title: 'Configuring recommended battery size', alt: 'Icon - Energy', success: false},
  //             {icon: 'pms-circle-money', title: 'Analyzing your local energy rates', alt: 'Icon - Savings', success: false},
  //             {icon: 'pms-price-tag', title: 'Searching applicable rebates and incentives', alt: 'Icon - Rebates', success: false},
  //             {icon: 'pms-growth-chart', title: 'Generating your estimates', alt: 'Icon - Pricing history graph', success: false},
  //           ],
  //           solarSM: [
  //             {icon: 'pms-satallite', title: 'Retrieving satellite imagery', alt: 'Icon - Satillite', success: false},
  //             {icon: 'pms-home', title: 'Configuring panel layout', alt: 'Icon - House with Solar panels', success: false},
  //             {icon: 'pms-price-tag', title: 'Searching incentives', alt: 'Icon - Rebates', success: false},
  //             {icon: 'pms-growth-chart', title: 'Analyzing your local energy rates', alt: 'Icon - Pricing history graph', success: false},
  //           ],
  //           batterySM: [
  //             {icon: 'pms-location', title: 'Retrieving energy usage data', alt: 'Icon - Location', success: false},
  //             {icon: 'pms-energy', title: 'Configuring battery size', alt: 'Icon - Energy', success: false},
  //             {icon: 'pms-price-tag', title: 'Searching incentives', alt: 'Icon - Rebates', success: false},
  //             {icon: 'pms-growth-chart', title: 'Generating estimates', alt: 'Icon - Pricing history graph', success: false},
  //           ],
  //           heatPumps: [
  //             {icon: 'pms-circle-money', title: 'Retrieving local contractor pricing', alt: 'Icon - Savings', success: false},
  //             {icon: 'pms-price-tag', title: 'Searching applicable rebates and incentives', alt: 'Icon - Rebates', success: false},
  //             {icon: 'pms-growth-chart', title: 'Matching you with the best options', alt: 'Icon - Pricing history graph', success: false},
  //           ],
  //           heatPumpsSM: [
  //             {icon: 'pms-circle-money', title: 'Retrieving local contractor pricing', alt: 'Icon - Savings', success: false},
  //             {icon: 'pms-price-tag', title: 'Searching applicable rebates and incentives', alt: 'Icon - Rebates', success: false},
  //             {icon: 'pms-growth-chart', title: 'Matching you with the best options', alt: 'Icon - Pricing history graph', success: false},
  //           ],
  //         },
  //         'address-bar': {
  //           placeholder: 'Insert an address to begin.',
  //           home_type: 'Home Type',
  //           single_family: 'Single Family',
  //           rental: 'Rental',
  //           multi_family: 'Multi Family',
  //           duplex: 'Duplex',
  //           condo: 'Condo',
  //           error_msg: 'Please Enter then Select an address from the dropdown to begin.',
  //           savings: 'Get savings',
  //           entr_addr: 'Please enter address to proceed.',
  //           invalid_addr: 'Please enter valid address to proceed.',
  //           no_service: 'There was a problem with the address selected. Please check the address or try another address.',
  //           type: 'Please Enter then Select a home type from the dropdown to begin.'
  //         },
  //         'before-solar': {
  //           title: 'Before Going Solar',
  //           slider_text: 'Adjust Your Energy Bill'
  //         },
  //         'solar-estimate': {
  //           title: 'After Solar Estimates',
  //           energy_bill: {
  //             title: 'New Energy Bill',
  //             tooltip: 'Your new energy bill includes remaining utility bill plus loan payments.'
  //           },
  //           total_saving: {
  //             title: 'Total Savings',
  //             tooltip: 'Your total savings is your avoided cost of utility energy over ',
  //             tooltip_ext: 'years less the cost of your solar PV system, including estimated utility rate increases and solar panel production degradation.'
  //           },
  //           bill_reduction: {
  //             title: 'Energy Bill Reduction',
  //             tooltip: 'This is the % your total energy payments will be reduced the first year with a typical loan. A dash indicates the project does not have estimated monthly savings in the first year.'
  //           },
  //           incentives: {
  //             title: 'Federal and Local Incentives',
  //             tooltip: 'This represents your total available solar incentives in your area for the project estimates we’ve put together. This includes all available Federal, State, and Local incentives.'
  //           },
  //           system_size: {
  //             title: 'System Size',
  //             tooltip: ''
  //           },
  //           cost: {
  //             title: 'Solar Energy vs Utility Energy Cost',
  //             tooltip: 'This is the estimated levelized cost of power from your solar project compared to the estimated levelized cost of power from your utility over 20 years.'
  //           },
  //           CTA_text: 'Get Customized Solar Bids',
  //         },
  //         'cs-estimate': {},
  //         'battery-estimate' : {
  //           battery_solution: 'Complete Battery Solution',
  //           instant_start: 'Instant Start',
  //           grid: 'Grid Integrated',
  //           maintenance: 'No Maintenance',
  //           outages: 'Your Backup Power During Outages',
  //           cost: 'Cost',
  //           net_cost: 'Net Cost',
  //           net_cost_tooltip: 'Your monthly battery payment including estimated savings based on a 10-year loan.',
  //           include_saving: '(Including Savings)',
  //           battery_price: 'Battery Price',
  //           battery_tooltip: 'Estimated total cost of your home battery system before incentives.',
  //           benefits: 'Benefits',
  //           benefits_tooltip: 'This represents your total available battery incentives in your area for the project estimates we\'ve put together. This includes all available Federal, State, and Local Incentives.',
  //           load_shifting: 'Load-Shifting Savings',
  //           load_shifting_tooltip: 'Your estimated savings with a battery with load-shifting.Load-shifting involves charging your battery when energy prices are low, and discharging the battery to your home when energy prices are high.',
  //           battImg: 'https://assets.solar.com/partner_assets/battery.png',
  //           'learn-more': {
  //             title: 'How does your battery system work during an outage?',
  //             text: 'Battery Solutions are seamlessly integrated with your home’s power supply. If a grid disruption takes place, your battery will instantly kick-on to power your home. For prolonged grid disruptions, a battery system paired with solar can keep your home 100% self-powered. Without a battery, your solar system would shutdown during a grid disruption.<br><br>We calculate your battery backup hours by evaluating your energy bill and considering typical weather patterns and usage.'
  //           }
  //         },
  //         'solar-estimate-v3': {
  //           monthly_payment: {
  //             title: 'Monthly Payment',
  //             tooltip_cash: 'Your estimated monthly utility payment after going solar.',
  //             tooltip_loan: 'Your estimated total monthly payment, assuming a',
  //             tooltip_loan_ext: '-year loan and including your remaining utility payment. Other financing options are available.'
  //           },
  //           bill_reduction: {
  //             title: 'Bill Reduction',
  //             tooltip_cash: 'This is the estimated % your electricity bill will be reduced the first year after going solar. A dash indicates the project does not have estimated monthly savings in the first year.',
  //             tooltip_loan: 'This is the estimated % your total energy payments will be reduced the first year after going solar with a typical loan. A dash indicates the project does not have estimated monthly savings in the first year.'
  //           },
  //           lifetime_energy: {
  //             title: 'Lifetime Energy Cost',
  //             tooltip: 'Your estimated total cost of electricity over',
  //             tooltip_ext: 'years before and after going solar. After solar cost includes the estimated total cost of the system including financing and remaining utility bill.'
  //           },
  //           lifetime_savings: {
  //             title: 'Lifetime Savings',
  //             tooltip: 'Your total savings is your avoided cost of utility energy over',
  //             tooltip_ext: 'years less the cost of your solar PV system, including estimated utility rate increases and solar panel production degradation.'
  //           },
  //           avg_electricity: {
  //             title: 'Average Electricity Rate',
  //             tooltip: 'This is the estimated levelized cost of power from your solar project compared to the estimated levelized cost of power from your utility over',
  //             tooltip_ext: 'years.'
  //           },
  //           available_incentives: {
  //             title: 'Available Incentives',
  //             tooltip: 'This represents your total available solar incentives in your area for the project estimates we\'ve put together. This includes all available Federal, State, and Local Incentives.'
  //           },
  //           before_solar: 'Before Solar',
  //           loan_term: '(20-year loan term)',
  //           after_solar: 'After Solar'
  //          }
  //       }
  //     },
  //     ev_dashboard: {
  //       skip: 'Skip to main content',
  //       home: 'Home',
  //       ev: 'EV Charger',
  //       step: 'Step',
  
  //       components: {
  //         call_scheduler: {
  //           all_set: 'You’re All Set!',
  //           energy_adv: 'Your Energy Advisor',
  //           call: 'will be calling at',
  //           on: 'on',
  //           over_que: 'to go over any questions about your project.',
  //           return: 'Return to Previous Page',
  //           cancel_return: '< Cancel & Return',
  //           meet_advisor: 'Meet Your Online Energy Advisor!',
  //           ev_longtext: 'There are often savings available if you bundle multiple \
  //                        home electrification upgrades into one project. This call is to help us \
  //                        gather more information on your other upgrades to maxamize savings.',
  
  //           switch_solar: 'Make the switch to solar with ease. The first step is a brief phone call.',
  //           min: '15 minutes',
  //           ps: 'Privacy Secured',
  //           rc: 'Reschedule Call',
  //           edit: '< Edit Date',
  //           vmt: 'View More Times',
  //           vlt: 'View Less Times',
  //           confirm_date: 'Confirm Date & Time',
  
  //         },
  //         ev_complete: {
  //           ready_electrify: 'You\'re ready to electrify your commute.',
  //           happy: 'We’re so happy that you switched to EV home charging with us!',
  //           explore: 'Explore Other Electrification Products',
  //           other_products: 'See what other electrification products are available in your area!',
  //           go: 'Go',
  //         },
  //         ev_disqualify: {
  //           sorry: 'We\'re Sorry',
  //           unable_installer: 'Our Installer will be unable to take your project',
  //           unfortunately: 'Unfortunately, installing a residential EV charger requires permission of the property owner and a dedicated meter and panel box.',
  //           further_info: 'For further information, contact the',
  //           lg_concierge: 'LG Concierge',
  //           at: 'at',
  //           number: '+1 (888) 982-4406',
  //           go_dashboard: 'Go To Dashboard',
  //           pre: '< Previous',
  
  //         },
  //         ev_ooa: {
  
  //         },
  //         file_upload: {
  //           upload: 'Upload Photos',
  //           upload_pics: 'Upload pictures of the',
  //           prefrred_location: 'Preferred EV Charger Location',
  //           your_pics: 'Upload pictures of your',
  //           panel_box: 'Panel Box',
  //           continue: 'Continue',
  //           edit_project: '< Edit Project Details',
  
  //         },
  //         installation_progress: {
  //           ip: 'Installation Progress',
  //           has: 'Has',
  //           schedule_installation: 'scheduled your installation?',
  //           no: 'No',
  //           yes: 'Yes',
  //           installed: 'installed your charger?',
  //           rate_installer: 'On a scale of zero to ten, how would you rate your installer?',
  //           recommend_service: 'On a scale of zero to ten, how likely are you to recommend our service to a friend or colleague?',
  //           need_assistence: 'If you need assistance from a Energy Advisor, please schedule a call or email us here support@lg.solar.com',
  //           next: 'Next',
  //         },
  //         project_detail: {
  //           finalize: 'Let’s Finalize the Details of Your Project',
  //           available_saving: 'There are often savings available if you bundle multiple home electrification upgrades into one project.',
  //           ev_longtext: 'To find out how much you could save, select all upgrades you are interested in,\
  //                        you can always remove them later and move forward with only the upgrades you want immediately.',
  //           su: 'Solar Upgrade',
  //           bu: 'Battery Upgrade',
  //           none: 'None',
  //           gs: 'Get Started',
  //           expect: 'What to Expect',
  //           ans_que: 'Answer a few additional questions about your home',
  //           review: 'Review your preliminary installation quote',
  //           get_connected: 'Get connected with a qualified and vetted local installer',
  //           iq: 'Installation Questions',
  //           pre: '< Previous',
  //           next: 'Next',
  
  //           user_info: {
  //             own_property: 'Do you own the property or have the owner’s written permission to install the charger on their property?*',
  //             yes: 'Yes',
  //             no: 'No',
  //             dedicated_meter: 'Is there a dedicated meter and electrical panel for the property?*',
  //             charge_location: 'Do you know if there is an available 240v electrical line run to the desired charger location?*',
  //             not_sure: 'Not sure',
  //             home_built: 'When was the home built, approximately?*',
  //             year1: '2015 - present',
  //             year2: '2000 - 2014',
  //             year3: 'Before 2000',
  //             panel_upgrade: 'Was the electrical panel upgraded after the home was built?',
  //             ev_longtext: 'If you answered yes to the previous question, was the upgrade made to support a large appliance such as central air conditioning, a hot tub, or a pool pump?',
  //             how_far: 'How far away is the electrical panel from the desired charger location?*',
  //             distance1: '10 feet or less',
  //             distance2: '11-20 feet',
  //             distance3: '21-30 feet',
  //             distance4: '31-40 feet',
  //             distance5: '41-60 feet',
  //             distance6: '61-100 feet',
  //             distance7: 'Greater than 100 feet',
  //             any_obstruction: 'Are there any obstructions in the path between the electrical panel and the desired charger location?*',
  //             none_path: 'None, the path is free of any obstructions',
  //             above_ground: 'Some above ground obstructions, such as doors or fences',
  //             large_obstruction: 'Large obstructions, such as a walkway, driveway, or a structure with a foundation',
  //             size_in_sqft: 'How many square feet is your home, approximately?*',
  //             sqft1: 'Less than 1,000',
  //             sqft2: '1,000 to 1,400',
  //             sqft3: '1,500 to 1,900',
  //             sqft4: '2,000 to 2,400',
  //             sqft5: '2,500 to 2,900',
  //             sqft6: '3,000 or more',
  //             panel_location: 'Where is the home’s main electrical panel (sometimes called a "breaker box") located?*',
  //             location1: 'Basement (finished)',
  //             location2: 'Basement (unfinished)',
  //             location3: 'Inside home (ground floor)',
  //             location4: 'Garage',
  //             location5: 'Outside',
  //             electric_panel_amperage: 'Do you know the amperage of the home’s main electrical panel? If not, it’s okay, we can gather this information later.*',
  //             lte100: '100A or less',
  //             125: '125A',
  //             200: '200A',
  //             notsure: 'Not sure',
  //             preferred_charger_installation: 'Which best describes the location where you would like your charger installed?*',
  //             garage_attached: 'Garage (attached)',
  //             garage_detached: 'Garage (detached)',
  //             outside: 'Outside',
  //             attached_to_other: 'Attached to a pedestal or fence',
  //             other: 'Other',
  //             automatic_generator: 'Does your property have an automatic generator?*'
  //           },
  //         },
  //         review_quotes: {
  //           incentive: '*With all incentives applied',
  //           bp: 'Base Price',
  //           ec: 'Equipment Cost',
  //           purchase_price: 'The purchase price of equipment after incentives. This does not include installation costs.',
  //           annual_saving: 'Your Est. Annual Savings is',
  //           eas: 'Estimated Annual Savings.',
  //           ev_longtext: 'All values displayed on this page are based on standard industry assumptions.\
  //                       Savings numbers are calculated based on present day market circumstances, but may vary due to utility \
  //                       adjustments to rates or policy, or due to updates to the system design. Finance payments displayed are \
  //                       estimates subject to credit approval and based upon current provider rates that are subject to change. \
  //                       Your payments and rates may be higher.',
  //         },
  //         schedule_installation: {
  //           schedule_install: 'You’re Ready to Schedule Your Installation',
  //           local_installer: 'A local installer is reviewing your project details and will contact you within',
  //           days: '1-2 days',
  //           confirm: 'to confirm everything and schedule your installer',
  //           estimated_total: 'Based on your selections your estimated total project cost is',
  //           charg_point: 'Includes ChargePoint Home Flex, NEMA 14-50 Plug',
  //           vd: 'View Details',
  //           rate_installer: 'Be sure to rate your installer after you connect'
  //         },
  
  //       },
  //     },
  //     dashboard: {
  //       home: 'Home',
  //       b: '> Battery',
  //       s: '> Solar',
  //       sb: '> Solar+Battery',
  //       step: 'Step',
  //       hewh: 'Hybrid Electric Water Heater',
  //       quote: '>  Quote',
  //       ewh: ' Electric Water Heater',
  
  //       'dashboard-components': {
  //         agreements: {
  //           'agreements-ready': {
  //             title: 'Good News!',
  //             solar_ready: 'Your Solar Agreement is Ready!',
  //             battery_ready: 'Your Energy Storage Agreement is Ready!',
  //             solar_ready_soon: 'Your Solar Agreement Will Be Ready Soon!',
  //             battery_ready_soon: 'Your Energy Storage Agreement Will Be Ready Soon!',
  //             expires: 'Expires',
  //             view_sign: 'View & Sign',
  //             session_expired: 'Session has been expired.',
  //             signed: 'Thanks for Signing!',
  //             reload: 'Reload',
  //             agreements: 'Agreements',
  //             generated: 'Your Contract has been Generated and Sent to your provided email. If you have not received it, please let your Energy Advisor know.',
  //             in_review: 'Your selected installer is reviewing and signing the agreement. We\'ll have an update shortly.',
  //             voided: 'Voided',
  //             Bids : 'View Original Bids',
  //             never_show: 'Here is never showing',
  //             ready_soon: {
  //               title: 'Your New Solar Agreement Will Be Ready Soon',
  //               content: 'Your Energy Advisor will need to review your contract. You will receive an email once the agreement is ready.'
  //             },
  //           },
  //           'details-confirmation': {
  //             title: 'Confirm Your Information',
  //             content: 'Make sure all the information below is correct before we generate your custom agreement.',
  //             full_name: 'Full Legal Name',
  //             full_name_error: 'Name is required',
  //             email: 'Email Address',
  //             email_error: 'Email is required',
  //             email_error_invalid: 'Email must be a valid email address',
  //             address1: 'Address Line 1',
  //             acknowledge_error: 'Please acknowledge it',
  //             acknowledge_e: 'Please check the box to acknowledge and continue',
  //             address1_error: 'Address is required',
  //             address2: 'Address Line 2',
  //             city: 'City',
  //             state: 'State',
  //             zip: 'Zip',
  //             phone_no: 'Phone Number',
  //             max_length: 'Full name should be less than 35 characters.',
  //             email_length: 'Maximum 100 characters are allowed for email.',
  //             valid_phone: 'Phone number must be valid.',
  //             name_length: 'Name should be less that 35 characters.',
  //             co_signer: {
  //               checkbox_text: 'Include Co-Signer',
  //               line1: 'Please Note',
  //               line2: 'If you intend to have a co-signer on the loan application, they will need to be listed as a cosigner on this document.'
  //             },
  //             term_agreement: 'I understand that once I generate this agreement, I will not be able to change my bid selection without direct assistance from my Energy Advisor.',
  //             generate: 'Generate Agreement',
  //             signed_docusign: {
  //               title: 'Thanks For Signing!',
  //               content1: 'Your selected installer is reviewing and signing the agreement. We\'ll have an update shortly.',
  //               content2: 'On a scale of zero to ten, how likely are you to recommend Pickmysolar to a friend or colleague?',
  //               submit_rating: 'Submit Rating'
  //             },
  //             please_note: 'Please Note',
  //             note_content: 'If you intend to have a co-signer on the loan application, they will need to be listed as a cosigner on this document.'
  //           },
  //           'embedded-docusign': {
  //             title: 'Your Agreement',
  //             close: 'Close',
  //             never_show: 'Here is never showing',
  //             cpuc: {
  //               title: 'CPUC Acknowledgement',
  //               content: 'The California Public Utilities Commission requires that you acknowledge and sign this document prior to signing your solar agreement. Not doing so will prevent your solar system from connecting to the utility grid. After signing this document, your solar agreement will be generated.'
  //             },
  //           }
  //         },
  //         'bid-call-scheduler': {
  //           cancel_return: '< Cancel & Return',
  //           schedule_bid: 'Schedule Online Bid Review',
  //           set_time: 'Please set a time for a web conference. In just 45 minutes your Energy Advisor will give you a detailed analysis of your best offers!',
  //           time: '45 minutes',
  //           secured: 'Privacy Secured',
  //           call: 'Reschedule Call',
  //           edit: '< Edit Date',
  //           view_more: 'View More Times',
  //           less_time: 'View Less Times',
  //           date: 'Confirm Date & Time',
  //           at: 'at',
  //           bid_scheduled: {
  //             title: 'bid Review Scheduled!',
  //             content: 'will call you on',
  //             content_ext: 'at',
  //             content_ext1: 'to go over your bids.'
  //           },
  //           bid_review: {
  //             title: 'Schedule Online bid Review',
  //             content_text: 'Select a time for a 45-minute web conference to review your bids with the next available Energy Advisor.',
  //             content: 'Your bids will be ready on',
  //             content_ext: 'at',
  //             content_ext1: 'Please set a time for a web conference. In just 15-30 minutes your Energy Advisor will give you a detailed analysis of your best bids!'
  //           },
  //           bids_not_ready: {
  //             title: 'Your bids Will Be Ready When',
  //             content1: 'You’ve submitted all the required information',
  //             content2: 'Our engineers designed and evaluated your system',
  //             content3: 'You’ve scheduled a bid review call',
  //             go_to_project: 'Go to My Project'
  //           },
  //           bid_ready: {
  //             title: 'Your Bids Are Ready!',
  //             content: 'Your Bids Are Ready! Let’s schedule a time to go over them together.'
  //           },
  //           schedule: 'Schedule',
  //           reschedule: 'Reschedule Call Time'
  
  //         },
  //         commitments: {
  //           title: 'Our Commitment',
  //           box1: {
  //             line1: 'Hassle-Free Experience',
  //             line2: 'No unwanted phone calls',
  //             text1: 'We never share your info with other solar companies',
  //             text2: 'An unbiased Energy Advisor remotely manages your project'
  //           },
  //           box2: {
  //             line1: 'Approved Installers',
  //             line2: 'Over 150 top certified installers',
  //             text1: 'Only approved providers can bid quotes on our platform',
  //             text2: 'Pickmysolar oversees the installation process'
  //           },
  //           box3: {
  //             line1: 'TriGuard Guarantee',
  //             line2: 'Best guarantees in the business',
  //             text1: 'System Price',
  //             text2: 'System Production',
  //             text3: 'Panel Perfomance',
  //             text4: 'Installer Workmanship'
  //           }
  //         },
  //         'call-scheduled': {
  //           before_upload: {
  //             title: 'We Need A Few More Things',
  //             line1: 'Upload or link your usage information.',
  //             line2: 'Upload your usage information.',
  //             line3: 'Upload pictures of your main panel box.',
  //             line4: 'Upload pictures of your utility bills.'
  //           },
  //           after_upload: {
  //             title: 'Thanks For Sharing!',
  //             content: 'Your Energy Advisor will review your file(s) and get back to you shortly.'
  //           },
  //           'on-upload': {
  //             title: 'You’re All Set!',
  //             reschedule: 'Reschedule Call Time',
  //             heading: 'Let’s Jump Start Your Project',
  //             content: 'While you wait, save time by uploading the essential documents below.',
  //             line: 'will call you on',
  //             line_ext: 'at',
  //             line_ext1: 'to go over your project details.',
  //             yea: 'Your Energy Advisor',
  //             approve: 'Files Pre-Approved!',
  //             pull_info: 'We were able to pull in your information from your previous project. Feel free to add more if neccessary',
  
  
  //           },
  //           usage_info: {
  //             title: 'Usage Information',
  //             box1: {
  //               line1: 'Connect to my utility',
  //               line1_ext: 'Recommended',
  //               line2: 'Log into your utility and instantly share your usage data.',
  //               share_btn: 'Share'
  //             },
  //             box2: {
  //               line1: {
  //                 title: 'Upload a PDF or image of my utility bill',
  //                 tooltip: ''
  //               },
  //               line2: 'Accepted files: JPEG, PDF, PNG',
  //               line2_ext: '(Max Size: 10Mb, Max File: 20)',
  //               text: 'Uploaded Documents',
  //               btn_text: 'Upload'
  //             }
  //           },
  //           panel_box: {
  //             title: 'Panel Box Pictures',
  //             line1: ' Upload my panel box pictures',
  //             line2: 'Accepted files: JPEG, PDF, PNG',
  //             line2_ext: '(Max Size: 10Mb, Max File: 20)',
  //             text: 'Uploaded Documents',
  //             upload_btn: 'Upload'
  //           }
  //         },
  //         'call-scheduler': {
  //           heading: 'Meet Your Online Energy Advisor',
  //           content: 'Make the switch to solar with ease. A dedicated expert advisor will be with you every step of the way to make sure you get the best value possible.',
  //           battery_content: 'Add an energy storage system to your home with ease. A dedicated expert advisor will be with you every step of the way to make sure you get the best value possible.',
  //           min: '15 minutes',
  //           ps: 'Privacy Secured',
  //           fname_req: 'First Name is required.',
  //           max_limit: 'Maximum 35 characters are allowed.',
  //           lname_req: 'Last Name is required.',
  //           valid_phone: 'Phone number must be valid.',
  //           phone_req: 'Phone number is required.',
  //           electrum_auth: 'By submitting, you authorize Electrum to call you at the number you entered above with offers or services. You also consent to receiving appointment reminders via SMS text messages through an automatic telephone dialing system. Message and data rates may apply. By signing up, you agree to solar.com\'s',
  //           terms: 'Terms of Use & Privacy Policy.',
  //           cancel: ' < Cancel & Return',
  //           meet_advisor: 'Meet Your Online Energy Advisor!',
  //           switch_solar: 'Make the switch to solar with ease. A dedicated expert advisor will be with you every step of the way to make sure you get the best value possible.',
  //           first_step: 'Make the switch to solar with ease. The first step is a brief phone call.',
  //           rc: 'Reschedule Call',
  //           ed: '< Edit Date',
  //           vmt: 'View More Times',
  //           vlt: 'View Less Times',
  //           confirm: 'Confirm Date & Time',
  //           return: 'Return to Previous Page',
  //           yea: 'Your Energy Advisor',
  //           call: 'will be calling at',
  //           on: 'on',
  //           to_go: ' to go over any questions about your project.',
  //           all_set: 'You’re All Set!',
  //           ccs: 'Continue to Call Schedule',
  //           rt: '< Return',
  //           contact_info: 'First, We’ll Need Your Contact Information',
  //           finalize: 'Let’s Finalize the Details of Your Project',
  //           ask_image: 'We may ask for images of equipment in your home, but it’s okay to skip and revisit later.',
  //           gs: 'Get Started',
  //           expect: 'What to Expect',
  //           ans: 'Answer a few additional questions about your home',
  //           review: 'Review your preliminary installation quote',
  //           req: 'Request a site visit with a local qualified installer',
  //           lg: 'Looks Good!',
  //           up: 'Update',
  
  //           name: {
  //             title: 'Name',
  //             placeholder: ''
  //           },
  //           firstName: {
  //             title: 'First Name',
  //             placeholder: ''
  //           },
  //           lastName: {
  //             title: 'Last Name',
  //             placeholder: ''
  //           },
  //           email: {
  //             title: 'Email',
  //             placeholder: ''
  //           },
  //           phone_no: {
  //             title: 'Phone number',
  //             placeholder: ''
  //           },
  //           privacy: {
  //             title: 'Privacy Secured',
  //             description: 'By submitting, you authorize Pickmysolar to call you at the number you entered above with bids or services. You also consent to receiving appointment reminders via SMS text messages through an automatic telephone dialing system. Message and data rates may apply. By signing up, you agree to Pickmysolar\'s',
  //             description_ext: 'Terms of Use & Privacy Policy.'
  //           },
  //           pick_date_btn: 'Submit and Continue',
  //           date_picker: {
  //             bid_review: {
  //               title: 'Schedule Online bid Review',
  //               content: 'Your Bids will be ready on',
  //               content_ext: 'at',
  //               content_ext1: 'Please set a time for a web conference. In just 15-30 minutes your Energy Advisor will give you a detailed analysis of your best bids!'
  //             },
  //             bid_ready: {
  //               title: 'Your Bids Are Ready!',
  //               content: 'Please set a time for a web conference. In just 15-30 minutes your Energy Advisor will give you a detailed analysis of your best bids!',
  //               line2: 'Bids expire in'
  //             },
  //             bid_reactivate: {
  //               title: 'Welcome Back!',
  //               content: 'Please set a time to speak with your Energy Advisor and re-activate your project.'
  //             },
  //             reactivation_scheduled: {
  //               title: 'Project Re-Activation Scheduled!',
  //               content: 'will call you on',
  //               content_ext: 'at',
  //               content_ext1: 'to confirm some details and re-activate your project.',
  //               reschedule: 'Reschedule'
  //             },
  //             title: 'When Is The Best Time To Reach You?',
  //             content: 'A dedicated expert energy advisor will be with you every step of the way to make sure you get the best value possible.',
  //             date: {
  //               title: 'Pick a date',
  //               placeholder: ''
  //             },
  //             day_time: {
  //               title: 'Pick a time of day',
  //               placeholder: ''
  //             },
  //             time: {
  //               title: 'Pick a time'
  //             },
  //             schecule_btn: 'Schedule',
  //             confirm: 'confirm',
  //             manager_call_schedule: {
  //               title: 'Let’s Talk Solar!',
  //               '30_minutes': '30 Minutes',
  //               ph: '(413) 255-3455',
  //               content: 'I’m here to help. Choose a time that\'s most convenient for you, and I will call you directly at that time. I’ll be happy to answer any of your questions or concerns. ',
  //               pacific_time: 'Pacific Time - US'
  //             },
  //             detail_input: {
  //               title: 'Enter Details',
  //               name: 'Name',
  //               email: 'Email',
  //               phone_no: 'Your Phone Number'
  //             },
  //             manager_call_confirmed: {
  //               title: 'Confirmed',
  //               line2: 'You are scheduled with',
  //               '30_minute': '30 Minute Solar Review',
  //               ph: '(413) 255-3455',
  //               pacific_time: 'Pacific Time - US',
  //               bottom_text: 'A calendar invitation has been sent to your email address.'
  //             }
  //           },
  
  //         },
  //         bid_ready: {
  //           bid_review: {
  //             title: 'Schedule Online bid Review',
  //             content: 'Your bids will be ready on',
  //             content_ext: 'at',
  //             content_ext1: 'Please set a time for a web conference. In just 15-30 minutes your Energy Advisor will give you a detailed analysis of your best bids!'
  //           },
  //           bids_ready: {
  //             title: 'Your Bids Are Ready!',
  //             cta: 'Go to Bids',
  //             line2: 'Bids expire in'
  //           },
  //           bids_expire: {
  //             title: 'Your Bids Have Expired',
  //             cta: 'RE-ACTIVATE BIDS'
  //           },
  //           bid_reactivate: {
  //             title: 'Welcome Back!',
  //             content: 'Your Energy Advisor has been notified and will reach out to you soon to resume your project.'
  //           },
  //           timer: {
  //             title: 'Bids expire in'
  //           }
  //         },
  //         bid_refresh: {
  //           title: 'Your Bids Are Ready',
  //           pdf: 'Download bids PDF',
  //           design_studio: {
  //             title: 'Solar Design Studio',
  //             line2: 'Add or Remove Solar Panels',
  //             content: 'Tune your bids below by adjusting the number of panels on your roof. Keep in mind that your Energy Advisor and selected Installer may review your adjustments to ensure best value.',
  //             bids: {
  //               title: 'bid',
  //               tooltip: 'No more panels fit on your roof. ',
  //               panel_number: 'Panel Number',
  //               system_size: 'System Size',
  //               annual_production: 'Annual Production',
  //               bill_reduction: 'Bill Reduction'
  //             },
  //             new_solution: 'Name Your New Solution -',
  //             new_solution_ext: '0 Custom Proposals Left',
  //             solution_placeholder: 'i.e. EV Vehicle',
  //             save_as_new: 'Save As New',
  //             error_msg: 'It looks like you’ve reached your custom proposal limit. Please contact your Energy Advisor for assistance.',
  //             creating_solution: 'Creating New Solution',
  //             adjust_design: 'Adjusting System Design',
  //             calculate_savings: 'Calculating Financials and Savings',
  //             best_value: 'Ensuring Best Value',
  //             saving_selection: 'Saving Selection',
  //             generating_proposal: 'Generating New Proposal'
  //           },
  //           before_solar: {
  //             title: 'Before',
  //             title_ext: 'Going Solar',
  //             text1: 'Your current average monthly electric bill',
  //             text2: 'Your average annual electricity consumption',
  //             text3: 'Your lifetime (25 year) utility cost',
  //             text3_ext: 'without solar'
  //           },
  //           solar_offers: {
  //             title: 'Your Bids',
  //             line1: 'Solar',
  //             filter_box: {
  //               financing_option: {
  //                 title: 'Financing Option',
  //                 option1: 'Cash',
  //                 option2: 'Loan'
  //               },
  //               loan_option: 'Loan Option',
  //               team_range: 'Term Range (years)',
  //               down_payment: 'Down Payment'
  //             }
  //           },
  //           tabs: {
  //             tab1: 'Overview',
  //             tab2: 'System Details',
  //             tab3: 'Financials'
  //           },
  //           'system-details': {
  //             bid_list: {
  //               title: 'bid',
  //               panel_model: 'Panel Model',
  //               inverter: 'Inverter',
  //               inverter_warranty: 'Inverter Warranty',
  //               system_size: 'System Size',
  //               annual_consumption: 'Annual Consumption',
  //               annual_production: 'Annual Production',
  //               workmanship_warranty: 'Workmanship Warranty',
  //               added_btn: 'Added to Cart',
  //               add_btn: 'Add to Cart'
  //             },
  //             bid_detail: {
  //               Chart: {
  //                 consumption: 'Consumption',
  //                 production: 'Production'
  //               },
  //               overview: {
  //                 title: 'Overview',
  //                 system_size: 'System Size',
  //                 annual_consumption: 'Annual Consumption',
  //                 annual_production: 'Annual Production'
  //               },
  //               panels: {
  //                 title: 'Panels',
  //                 panel_model: 'Panel Model',
  //                 efficiency: 'Efficiency',
  //                 color: 'Color',
  //                 origin: 'Origin',
  //                 performance_warranty: 'Performance Warranty'
  //               },
  //               inverter: {
  //                 title: 'Inverter',
  //                 inverter_model: 'Inverter Model ',
  //                 warranty: 'Warranty',
  //                 Monitoring: 'Monitoring System'
  //               },
  //               optimizer: {
  //                 title: 'Optimizer',
  //                 optimizer_model: 'Optimizer Model'
  //               }
  //             }
  //           },
  //           financials: {
  //             bid_list: {
  //               title: 'bid',
  //               gross_price: 'Gross Price',
  //               loan_discount: {
  //                 title: 'Loan Discount',
  //                 tooltip: ''
  //               },
  //               utility_rebates: {
  //                 title: 'Utility Rebates',
  //                 tooltip: ''
  //               },
  //               contract_value: 'Contract Value',
  //               federal_tax: {
  //                 title: 'Federal Tax Credit',
  //                 tooltip: ''
  //               },
  //               solar_tax: {
  //                 title: 'State Tax Credit',
  //                 tooltip: ''
  //               },
  //               net_price: 'Net Price',
  //               energy_bill: 'New Energy Bill',
  //               loan_payment: 'Loan Payment',
  //               utility_payment: 'Utility Payment',
  //               monthly_savings: 'Monthly Savings',
  //               internal_rate: 'Internal Rate of Return (IRR)',
  //               added_btn: 'Added to Cart',
  //               add_btn: 'Add to Cart'
  //             },
  //             bid_details: {
  //               bar_graph: {
  //                 title: 'Immediate Savings',
  //                 energy_bill: 'Current Energy Bill',
  //                 energy_payment: 'Solar Energy Payments',
  //                 before_solar: 'Before Solar',
  //                 utility_payment: 'Utility Payment',
  //                 saved: 'Saved'
  //               },
  //               longterm_graph: {
  //                 title: 'Long-Term Savings',
  //                 years: 'Years',
  //                 annual_savings: 'Annual Savings',
  //                 cumulative_savings: 'Cumulative Savings',
  //                 loan_payoff: 'Loan Payoff',
  //                 legend1: 'Annual',
  //                 legend2: 'Cumulative'
  //               },
  //               breakdown: {
  //                 title: 'Breakdown',
  //                 gross_price: 'Gross Price',
  //                 loan_discount: {
  //                   title: 'Loan Discount',
  //                   tooltip: ''
  //                 },
  //                 utility_rebates: {
  //                   title: 'Utility Rebates',
  //                   tooltip: ''
  //                 },
  //                 contract_value: 'Contract Value',
  //                 federal_tax: {
  //                   title: 'Federal Tax Credit',
  //                   tooltip: ''
  //                 },
  //                 solar_tax: {
  //                   title: 'State Tax Credit',
  //                   tooltip: ''
  //                 },
  //                 net_price: 'Net Price',
  //                 bill_reduction: {
  //                   title: 'Bill Reduction',
  //                   tooltip: ''
  //                 },
  //                 price_per_watt: {
  //                   title: 'Price Per Watt',
  //                   tooltip: ''
  //                 },
  //                 cost_per_kwh: {
  //                   title: 'Cost Per kWh',
  //                   tooltip: ''
  //                 }
  //               },
  //               payments: {
  //                 title: 'Payments',
  //                 loan_provider: 'Loan Provider',
  //                 year1_payment: 'Year 1 Payments',
  //                 year2_payment: 'Years 2-12 Payments',
  //                 Avg_loan: 'Average Loan Payments',
  //                 utility_payment: 'Utility Payment',
  //                 energy_bill: 'New Energy Bill'
  //               },
  //               Savings_Benefits: {
  //                 title: 'Savings & Benefits',
  //                 month1_saving: {
  //                   title: 'Year 1 Monthly Savings',
  //                   tooltip: ''
  //                 },
  //                 annual_savings: {
  //                   title: 'Average Annual Savings',
  //                   tooltip: ''
  //                 },
  //                 lifetime_saving: 'Lifetime Savings',
  //                 IRR: {
  //                   title: 'IRR',
  //                   tooltip: ''
  //                 },
  //                 home_value: {
  //                   title: 'Home Value',
  //                   tooltip: ''
  //                 },
  //                 referral_bonus: {
  //                   title: 'Referral Bonus',
  //                   tooltip: ''
  //                 },
  //                 payback_period: {
  //                   title: 'Payback Period',
  //                   tooltip: ''
  //                 },
  //                 ROI: {
  //                   title: 'Return on Investment (ROI)',
  //                   tooltip: ''
  //                 }
  //               },
  //               property_tax: {
  //                 title: 'NYC Property Tax Abatement',
  //                 tooltip: '',
  //                 incentive_type: 'Incentive Type',
  //                 payment_based: 'Payment Based Off Of',
  //                 term: 'Term',
  //                 rate: 'Rate',
  //                 est_total: 'Est. Total Value'
  //               }
  //             }
  //           },
  //           overview: {
  //             Bid_list: {
  //               title: 'bid',
  //               energy_bill: {
  //                 title: 'New Energy Bill',
  //                 tooltip: ''
  //               },
  //               upfront_payment: {
  //                 title: 'Upfront Payment',
  //                 tooltip: ''
  //               },
  //               loan_terms: 'Loan Terms',
  //               lifetime_savings: 'Lifetime Savings',
  //               system_size: 'System Size'
  //             }
  //           },
  //           installer: {
  //             vendor: 'Green Power Energy',
  //             rating_tooltip: '',
  //             about: {
  //               title: 'About',
  //               line1: ''
  //             },
  //             detail: {
  //               title: 'Details',
  //               year_established: 'Year Established',
  //               installations: 'Installations',
  //               workmanship: 'Workmanship Warranty',
  //               qualifications: 'Qualifications',
  //               text1: 'Fully licensed and insured.',
  //               text2: 'NABCEP certified.',
  //               text3: 'Excellent reputation for workmanship and customer service.',
  //               text4: '3+ years of experience installing solar PV.'
  //             },
  //             installations: 'Installations'
  //           },
  //           utility: {
  //             title: 'Your Monthly Utility Bills',
  //             month: {
  //               month: 'month',
  //               january: 'January',
  //               february: 'February',
  //               march: 'March',
  //               april: 'April',
  //               may: 'May',
  //               june: 'June',
  //               july: 'July',
  //               august: 'August',
  //               september: 'September',
  //               october: 'October',
  //               november: 'November',
  //               december: 'December'
  //             },
  //             without_solar: 'Without Solar',
  //             with_solar: 'With Solar',
  //             net_savings: 'Net Savings',
  //             total: 'Total',
  //             tooltip: ''
  //           },
  //           home_battery: {
  //             title: 'Home Battery',
  //             line2: 'options with the installer',
  //             battery_checkbox: 'Only display Financing Options that allow Solar plus Battery',
  //             battery: {
  //               added_payment: 'Added Payment',
  //               tooltip: '',
  //               add_btn: 'Add to Cart',
  //               added_btn: 'Added to Cart'
  //             },
  //             battery_detail: {
  //               price: {
  //                 title: 'Price',
  //                 gross_price: 'Gross Price',
  //                 loan_discount: {
  //                   title: 'Loan Discount',
  //                   tooltip: ''
  //                 },
  //                 utility_rebates: {
  //                   title: 'Utility Rebates',
  //                   tooltip: ''
  //                 },
  //                 contract_value: 'Contract Value',
  //                 federal_tax: {
  //                   title: 'Federal Tax Credit',
  //                   tooltip: ''
  //                 },
  //                 solar_tax: {
  //                   title: 'State Tax Credit',
  //                   tooltip: ''
  //                 },
  //                 net_price: 'Net Price'
  //               },
  //               Specs: {
  //                 title: 'Specs',
  //                 capacity: 'Capacity (Power)',
  //                 link: 'View Full Specs'
  //               },
  //               warranty: {
  //                 title: 'Warranty',
  //                 manufacturer: 'Manufacturer',
  //                 green_power: 'Green Power Energy'
  //               },
  //               financing: {
  //                 title: 'Financing',
  //                 loan_provider: 'Loan Provider',
  //                 year1_payment: 'Year 1 Payments',
  //                 year2_payment: 'Years 2-10 Payments',
  //                 Avg_loan_payment: 'Average Loan Payment'
  //               }
  //             }
  //           },
  //           cart: {
  //             title: 'Cart',
  //             est_loan_payment: 'Est. Loan Payment',
  //             panel_model: 'Panel Model',
  //             system_size: 'System Size',
  //             financing_option: 'Financing Option',
  //             referral_bonus: 'Referral Bonus',
  //             contract_price: 'Contract Price',
  //             loan_provider: 'Loan Provider',
  //             down_payment: 'Down Payment',
  //             terms: 'Terms',
  //             interest_rate: 'Interest Rate',
  //             complementary: 'Complementary',
  //             complementary_tooltip: 'Tri-Guard includes your system’s equipment warranty, installer’s workmanship warranty, and Pick My Solar’s 1st year production guarantee. Pick My Solar requires solar production monitoring access for the 1st year of service.',
  //             discount: 'discount applied for the second battery',
  //             remove_btn: 'Remove',
  //             estimated_total: 'Estimated Total',
  //             total_contract_price: 'Total Contract Price',
  //             btn_text: 'Checkout'
  //           },
  //           disclaimer: 'All values displayed on this page are based on standard industry assumptions. Savings numbers are calculated based on present day market circumstances, but may vary due to utility adjustments to rates or policy, or due to updates to the system design. Finance payments displayed are estimates subject to credit approval and based upon current provider rates that are subject to change. Your payments and rates may be higher.',
  //           popup: {
  //             installer: 'Solar and Battery selections must have the same installer. If you choose to add this item, your current selections will be removed.',
  //             financing: 'All Cart selections must have the same financing option of Cash or Loan. If you choose to add this item with the current financing selection, others items in your cart wil be removed.',
  //             Add_btn: 'Add'
  //           }
  //         },
  //         'bid-refresh': {
  //           title: 'Your Bids Are Ready',
  //           pdf: 'Download Bids PDF',
  //           daily_usage: 'Avg. Daily Usage',
  //           solar_system: 'Solar System Size',
  //           annual_solar: 'Annual Solar Production',
  //           battery_content: 'Your Battery Bids are based on your provided home energy profile.',
  //           breadCrumb: 'Bids',
  //           new_sol: 'New Solution Added!',
  //           adjustment: 'We’ve created a new solution based off of your adjustments. Use the dropdown above to switch back to the default set at anytime.',
  //           omt: 'One More Thing.',
  //           sol_look: 'If you\'d like to see how this solution would look on your roof, please notify your Energy Advisor.',
  //           gi: 'Got It',
  //           yp: 'Your Project',
  
  
  //           tabs: {
  //             'before-solar': {
  //               title: 'Before',
  //               title_ext: 'Going Solar',
  //               current_avg: 'Your current average monthly electric bill',
  //               annual_avg: 'Your average annual electricity consumption',
  //               lifetime_utility: 'Your lifetime (',
  //               lifetime_utility_after: ' year) utility cost without solar'
  //             },
  //             'bid-cart': {
  //               title: 'Cart',
  //               solar_offer: 'Solar Bid',
  //               battery_offer: 'Battery Bid',
  //               est_loan_payment: 'Est. Loan Payment',
  //               panel_model: 'Panel Model',
  //               system_size: 'System Size',
  //               financing_option: 'Financing Option',
  //               referral_bonus: 'Referral Bonus',
  //               contract_price: 'Contract Price',
  //               loan_provider: 'Loan Provider',
  //               down_payment: 'Down Payment',
  //               terms: 'Terms',
  //               interest_rate: 'Interest Rate',
  //               tri_guard: 'Tri-Guard Guarantee',
  //               complementary: 'Complementary',
  //               complementary_tooltip: 'Tri-Guard includes your system’s equipment warranty, installer’s workmanship warranty, and Pick My Solar’s 1st year production guarantee. Pick My Solar requires solar production monitoring access for the 1st year of service.',
  //               complementary_tooltip1: 'Tri-Guard includes your system’s equipment warranty, installer’s workmanship warranty, and Pick My Solar’s 1st year production guarantee. Pick My Solar requires solar production monitoring access for the 1st year of service.',
  //               discount: 'discount applied for the second battery',
  //               remove_btn: 'Remove',
  //               estimated_total: 'Estimated Total',
  //               total_contract_price: 'Total Contract Price',
  //               no_selection: 'No Selections Yet',
  //               add_item: 'Add an item to your cart to checkout',
  //               btn_text: 'Checkout',
  //               show: 'Show Details',
  //               hide: ' Hide Details',
  //               bonus: 'Referral Bonus',
  //               incentive: 'incentives are applied.',
  //               assume: 'assuming all',
  //               checkout: 'Checkout',
  //               price: 'Contract Price',
  //               loan: 'Est. Loan Payment',
  //               month: '/Month',
  //               remove: 'Remove',
  //               confirm: 'Confirm Your Selection',
  //               make_sure: 'Make sure all the bid information you selected below is correct before we generate your custom agreement.',
  //               installer: 'Installer',
  //               solar: 'Solar',
  //               size: 'System Size',
  //               module: 'Solar Module',
  //               contract: 'Contract Value',
  //               battery: 'Battery',
  //               capacity: 'Capacity',
  //               hm_battery: 'Home Battery',
  //               finance: 'Financing',
  //               op: 'Option',
  //               dp: 'Down Payment',
  //               lp: 'Loan Provider',
  //               ir: 'Interest Rate',
  //               elp: 'Est. Loan Payment',
  //               return: '< Return to Bids',
  //               cfrm: 'Confirm',
  //             },
  //             'bid-images': {
  //               'design-studio': {
  //                 title: 'Solar Design Studio',
  //                 line2: 'Add or Remove Solar Panels',
  //                 content: 'Tune your bids below by adjusting the number of panels on your roof. Keep in mind that your Energy Advisor and selected Installer may review your adjustments to ensure best value.',
  //                 bids: {
  //                   title: 'Bid',
  //                   tooltip: 'No more panels fit on your roof. ',
  //                   panel_number: 'Panel Number',
  //                   system_size: 'System Size',
  //                   annual_production: 'Annual Production',
  //                   bill_reduction: 'Bill Reduction'
  //                 },
  //                 new_solution: 'Name Your New Solution -',
  //                 new_solution_ext: 'Custom Proposals Left',
  //                 solution_placeholder: 'i.e. EV Vehicle',
  //                 save_as_new: 'Save As New',
  //                 error_msg: 'It looks like you’ve reached your custom proposal limit. Please contact your Energy Advisor for assistance.',
  //                 creating_solution: 'Creating New Solution',
  //                 adjust_design: 'Adjusting System Design',
  //                 calculate_savings: 'Calculating Financials and Savings',
  //                 best_value: 'Ensuring Best Value',
  //                 saving_selection: 'Saving Selection',
  //                 generating_proposal: 'Generating New Proposal'
  //               },
  //                 title: 'Solar Design Studio',
  //                 'sub-title': 'We’re preparing your estimates.',
  //                 'btn-title': 'View Your Estimates',
  //                  change_panel: 'Add or Remove Solar Panels',
  //                 creating_solution: 'Creating New Solution',
  //                  text1: 'Tune your bids below by adjusting the number of panels on your roof. Keep in mind that your Energy Advisor and selected Installer may review your \n' +
  //                   'adjustments to ensure best value.',
  //                 solar: [
  //                   {icon: 'pms-pms-adjusting-design', title: 'Adjusting System Design', alt: 'Icon - adjusting-design', success: false},
  //                   {icon: 'pms-pms-c-f-s', title: 'Calculating Financials and Savings', alt: 'Icon - Calculating Financials and Savings', success: false},
  //                   {icon: 'pms-pms-ensuring-best', title: 'Ensuring Best Value', alt: 'Icon - Ensuring Best Value', success: false},
  //                   {icon: 'pms-pms-saving-selection', title: 'Saving Selection', alt: 'Icon - Saving Selection', success: false},
  //                   {icon: 'pms-layers', title: 'Generating New Proposal', alt: 'Icon - Generating New Proposal', success: false},
  //                 ],
  //                 solarSM: [
  //                   {icon: 'pms-pms-adjusting-design', title: 'Adjusting System Design', alt: 'Icon - adjusting-design', success: false},
  //                   {icon: 'pms-pms-c-f-s', title: 'Calculating Financials and Savings', alt: 'Icon - Calculating Financials and Savings', success: false},
  //                   {icon: 'pms-pms-ensuring-best', title: 'Ensuring Best Value', alt: 'Icon - Ensuring Best Value', success: false},
  //                   {icon: 'pms-pms-saving-selection', title: 'Saving Selection', alt: 'Icon - Saving Selection', success: false},
  //                   {icon: 'pms-layers', title: 'Generating New Proposal', alt: 'Icon - Generating New Proposal', success: false},
  //                 ]
  //             },
  //             'bid-installer': {
  //               title: 'LG Pro Installer',
  //               partner_content: 'Reliable manufacturers invest in the people you will be\n' +
  //                 '          working with. LG maintains a network of local installers who will give you\n' +
  //                 '          thoughtful, expert guidance when laying out your new system. All of these\n' +
  //                 '          installers benefit from additional training, access to our engineers and\n' +
  //                 '          research team and the most current technology.',
  //               rating_tooltip: '',
  //               about: 'About',
  //               detail: 'Details',
  //               year_established: 'Year Established',
  //               installations: 'Installations',
  //               workmanship: 'Solar Workmanship Warranty',
  //               qualifications: 'Qualifications',
  //               text1: 'Fully licensed and insured.',
  //               text2: 'NABCEP certified.',
  //               text3: 'Excellent reputation for workmanship and customer service.',
  //               text4: '3+ years of experience installing solar PV.',
  //               show: 'Show Installer Profile',
  //               hide: 'Hide Installer Profile',
  //               certificateImg: '',
  //               rate: 'This rating is the aggregate score of numerous sites like Facebook, Google, Yelp and Solar Marketplace.',
  //               p: 'Previous',
  //               n: 'Next',
  //              },
  //             'financing-options': {
  //               title: 'Custom Financing',
  //                 financing_option: 'Financing Option',
  //                 Cash: 'Cash',
  //                 Loan: 'Loan',
  //               loan_option: 'Loan Option',
  //               top_recommended: 'Top Recommended',
  //               term_range: 'Term Range (years)',
  //               down_payment: 'Down Payment',
  //               update: 'Update',
  //               text1: 'Change option to',
  //               text2: 'to see more financing tools.'
  //             },
  //             'home-battery': {
  //               title: 'Home Battery',
  //               bid: 'Bid',
  //               not_available_battery: 'Hover & select one of the solar offers above ',
  //                 ext: 'to view battery offers. ',
  
  //               'battery-filter': {
  //                 recommended_battery: 'Your Recommended Battery System Capacity',
  //                 tooltip_recommended: '',
  //                 content: 'The default number of batteries for each offer is set to at minimum meet the recommended capacity. You may revise the number of batteries as you see fit.',
  //                 restore_default: 'Restore Default Number',
  //                 show_advance: 'Show Advanced Tools',
  //                 hide_advance: 'Hide Advanced Tools',
  //                 Battery_assumption: 'Update Battery Assumptions',
  //                 assumption_line1: 'The following assumptions will impact your battery savings and hours of backup power.',
  //                 state_charge: 'State of Charge',
  //                 state_charge_content: 'The percentage of the battery’s capacity available when the outage occurs',
  //                 critical_load: 'Critical Load',
  //                 critical_load_content: 'The number of circuits being backed up will affect the amount of power being drawn ' +
  //                   'from the battery',
  //                 'hour-power': 'Hour Power Goes Out',
  //                 hour_power_content: 'The time of day the outage occurs will impact how much solar energy is available to recharge the battery',
  //                 min_charge: 'Minimum Charge',
  //                 min_charge_content: 'The amount of reserve charge you set will change the backup duration available',
  //                 restore_assumption: 'Restore Default Assumptions',
  //                 battery_available: 'Battery Options (Available with Bid',
  //                 toggle_left: 'Set to one battery',
  //                 toggle_right: 'Set to match recommended system capacity',
  //                 kwh: 'kWh',
  //                 estimate: 'Estimate based on your battery system’s ability to power your home for 24+ hours if the grid goes down',
  //                 estimate2: 'Estimate based on your solar + battery system’s ability to power your home for 7+ days if the grid goes down',
  //                 default: 'Default number of batteries for each offer',
  //                 ht: 'Hang Tight!',
  //                 update: 'We’re updating your battery assumptions',
  //                 u: 'Update',
  //                 n0: '0%', n1: '10%', n2: '20%', n3: '30%', n4: '40%', n5: '50%', n6: '60%', n7: '70%', n8: '80%', n9: '90%', n10: '100%',
  //               },
  //               'battery-compare': {
  //                 title: 'Bid',
  //                 batteries: 'Number of Batteries',
  //                 add_battery: 'Add another battery ',
  //                 for_only: 'for ',
  //                 kwh: 'kWh',
  //                 select: 'Select a',
  //                 solar: 'solar',
  //                 f: 'first',
  //                 b: 'before',
  //                 p: 'Previous',
  //                 n: 'Next',
  //                 add: 'adding a home battery to your cart',
  //                 backup_outage: {
  //                   title: 'Backup During Outage',
  //                 tooltip: 'Duration of time your home will be powered after an outage.'},
  //                 net_cost: {
  //                   cash: 'Net Cost',
  //                   loan: 'Net Cost Including Savings',
  //                 tooltip_cash : 'Cost for battery once applicable incentives are applied.',
  //                 tooltip_loan: 'Monthly cost for battery once applicable incentives and monthly savings are applied.'
  //                 },
  //                 incentives: {
  //                   title: 'Incentives',
  //                   tooltip: ''
  //                 },
  //                 system_capacity: 'System Capacity',
  //                 added_btn: 'Added to Cart',
  //                 add_btn: 'Add to Cart',
  //                 update_btn: 'Update Cart',
  //                 solar_first: 'bid'
  //               },
  //               'battery-bid-detail': {
  //                 previous: 'Previous Bid',
  //                 next: 'Next Bid',
  //                 added_btn: 'Added to Cart',
  //                 add_btn: 'Add to Cart',
  //                 update_btn: 'Update Cart',
  //                 sd: 'Sys. Details',
  //                 finance: 'Financials',
  //                 installer: 'Installer',
  //                 utility: 'Utility',
  //                 'battery-sys-detail': {
  //                   batteries: 'Number of Batteries',
  //                   add_battery: 'Add another battery ',
  //                   for_only: 'for ',
  //                   view_spec: 'View Full Spec Sheet',
  //                   system_specs: 'System Specs',
  //                   component: 'Components',
  //                   capacity: 'Capacity',
  //                   peak_power: 'Peak / Continuous Power',
  //                   cw: 'Capacity Warranty',
  //                   tw: 'Throughput Warranty',
  //                   year: 'Years /',
  //                   year1: 'Years',
  //                   ww: 'Workmanship Warranty provided by',
  //                   pn: 'Project Notes',
  //                   power_stacking: {
  //                     title: 'Power Stacking',
  //                   tooltip: 'Some batteries have the ability to "stack" power if you have multiple batteries in your home. This allows a greater rate of power to be discharged in a moment of time.'},
  //                   type: 'Type',
  //                   power_outage: {
  //                     title: 'Continuous Power During Outage',
  //                     tooltip: 'Duration of time your home will be powered after an outage.'
  //                   },
  //                   battery_specs: 'Battery Specs',
  //                   cycles: 'Cycles',
  //                   manufacturer_warrenty: 'Manufacturer Warranty',
  //                   origin: 'Origin',
  //                   workmanship_warranty: 'Workmanship Warranty provided by New York Power Solutions',
  //                   project_notes: 'Project Notes'
  
  //                 },
  //                 'battery-financials': {
  //                   batteries: 'Number of Batteries',
  //                   add_battery: 'Add another battery ',
  //                   for_only: 'for ',
  //                   view_spec: 'View Full Spec Sheet',
  //                   system_specs: 'System Specs',
  //                   sys_size: 'System Size',
  //                   month: '/month',
  //                   elect: 'By electing to proceed with this cash purchase you will be eligible for this discount.',
  //                   curr_loan: 'The current selected loan option includes this Loan Discount off your gross price.',
  //                   power_outage: {
  //                     title: 'Continuous Power During Outage',
  //                     tooltip: 'Duration of time your home will be powered after an outage.'
  //                   },
  //                   price: {
  //                     title: 'Price',
  //                     gross_price: 'Gross Price',
  //                     loan_discount: {
  //                       title: 'Loan Discount',
  //                       tooltip_cash: 'By electing to proceed with this cash purchase you will be eligable for this discount.',
  //                       tooltip_loan: 'The current selected loan option includes this Loan Discount off your gross price.'
  //                     },
  //                     utility_rebates: {
  //                       title: 'Utility Rebates',
  //                       tooltip: ''
  //                     },
  //                     contract_value: 'Contract Value',
  //                     federal_tax: {
  //                       title: 'Federal Tax Credit',
  //                       tooltip: ''
  //                     },
  //                     solar_tax: {
  //                       title: 'State Tax Credit',
  //                       tooltip: ''
  //                     },
  //                     net_price: 'Net Price',
  //                     cost_per: 'Cost Per kWh (capacity)'
  //                   },
  //                   financing: {
  //                     title: 'Financing',
  //                     loan_provider: 'Loan Provider',
  //                     year1_payment: 'Year 1 Payments',
  //                     year2_payment: 'Years 2-10 Payments',
  //                     Avg_loan_payment: 'Average Loan Payment'
  //                   },
  //                   Savings_Benefits: {
  //                     title: 'Savings & Benefits',
  //                     month1_saving: {
  //                       title: 'Year 1 Monthly Savings',
  //                       tooltip: ''
  //                     },
  //                     annual_savings: {
  //                       title: 'Annual Savings',
  //                       tooltip: 'You can save money by storing power when electricity from the grid is cheap, and discharing power when it\'s expensive. This is known as "load shifting".'
  //                     },
  //                     lifetime_saving: {
  //                       title: 'Lifetime Savings',
  //                     tooltip: 'Your annual savings multiplied by your batteries warrantied lifetime.'},
  //                     IRR: {
  //                       title: 'IRR',
  //                       tooltip: ''
  //                     },
  //                     home_value: {
  //                       title: 'Home Value',
  //                       tooltip: ''
  //                     },
  //                     referral_bonus: {
  //                       title: 'Referral Bonus',
  //                       tooltip: ''
  //                     },
  //                     payback_period: {
  //                       title: 'Payback Period',
  //                       tooltip: ''
  //                     },
  //                     ROI: {
  //                       title: 'Return on Investment (ROI)',
  //                       tooltip: ''
  //                     }
  //                   },
  //                   property_tax: {
  //                     title: 'NYC Property Tax Abatement',
  //                     tooltip: '',
  //                     incentive_type: 'Incentive Type',
  //                     payment_based: 'Payment Based Off Of',
  //                     term: 'Term',
  //                     rate: 'Rate',
  //                     est_total: 'Est. Total Value'
  //                   }
  //                 },
  //                 'battery-installer': {},
  //                 'battery-utility': {
  //                   'battery-load': 'Your Battery Load Shifting',
  //                   'off-peak': 'Off-Peak (avg 15¢/kWh)',
  //                   'mid-peak': 'Mid-Peak (avg 25¢/kWh)',
  //                   'bill-reduction': 'Bill Reduction (avg 35¢/kWh)',
  //                   'annual-usage': 'Annual Usage Per Time-of-Use Period',
  //                   before_battery: 'Before Battery',
  //                   after_battery: 'After Battery',
  //                   savings: 'Savings',
  //                   battery_load : 'Your Battery Load Shifting',
  //                   k4: '400 kWh',
  //                   k1: '1100 kWh',
  //                   k3: '300 kWh',
  //                   d3: '-$300',
  //                   d13: '-$1300',
  //                   ts: '-$1300 Total Savings'
  //                 }
  //               }
  //             },
  //             'shared-components': {
  //               'bid-sys-detail-chart': {
  //                 consumption: 'Consumption',
  //                 production: 'Production'
  //               },
  //               'immediate-savings': {
  //                 title: 'Immediate Savings',
  //                 energy_bill: 'Current Energy Bill',
  //                 energy_payment: 'Solar Energy Payments',
  //                 before_solar: 'Before Solar',
  //                 utility_payment: 'Utility Payment',
  //                 saved: 'Saved'
  //               },
  //               'long-term-savings': {
  //                 title: 'Long-Term Savings',
  //                 years: 'Years',
  //                 annual_savings: 'Annual Savings',
  //                 cumulative_savings: 'Cumulative Savings',
  //                 loan_payoff: 'Loan Payoff',
  //                 legend1: 'Annual',
  //                 legend2: 'Cumulative'
  //               }
  //             },
  //             'solar-bids-tabs': {
  //               title: 'Solar',
  //               tab1: 'Overview',
  //               tab2: 'System Details',
  //               tab3: 'Financials',
  //               noBid_msg : 'No Bids Found. Please contact your Energy Advisor.',
  //               noLoan_msg : 'The given Installers are not configured for loan options in your area. Please reach out to your Energy Advisor to see loan options.',
  //               overview: {
  //                 title: 'Bid',
  //                 add: 'Add to Cart',
  //                 added: 'Added to Cart',
  //                 bill_compare: 'New Utility bill after solar vs. your Utility bill before solar.',
  //                 p: 'Previous',
  //                 n: 'Next',
  
  
  //                 energy_bill: {
  //                   title: 'New Energy Bill',
  //                   tooltip: 'New Utility bill after solar vs Utility bill before solar.',
  //                   tooltip_loan: 'Your total new energy bill after solar (Utility Payment + Loan Payment) vs. your Utility Payment before solar.'
  //                 },
  //                 upfront_payment: {
  //                   title: 'Upfront Payment',
  //                   tooltip: 'Optional down payment on your low to reduce your monthly payments and increase savings.'
  //                 },
  //                 payback_period: {
  //                   title: 'Payback Period',
  //                   tooltip: 'Number of years to recoup your net investment.'
  //                 },
  //                 loan_terms: 'Loan Terms',
  //                 lifetime_savings: 'Lifetime Savings',
  //                 system_size: 'System Size',
  //                 added_btn: 'Added to Cart',
  //                 add_btn: 'Add to Cart'
  //               },
  //               'system-design': {
  //                 title: 'Bid',
  //                 panel_model: 'Panel Model',
  //                 inverter: 'Inverter',
  //                 inverter_warranty: 'Inverter Warranty',
  //                 system_size: 'System Size',
  //                 annual_consumption: 'Annual Consumption',
  //                 annual_production: 'Annual Production',
  //                 workmanship_warranty: 'Workmanship Warranty',
  //                 monitoring: 'Monitoring System',
  //                 added_btn: 'Added to Cart',
  //                 add_btn: 'Add to Cart',
  //                 triGuarantee: 'First year production of your solar system. This value is backed by our TriGuard Guarantee.',
  //                 io: 'Optimizers Included.',
  //                 add: 'Add to Cart',
  //                 added: 'Added to Cart',
  //                 p: 'Previous',
  //                 n: 'Next',
  
  //               },
  //               financials: {
  //                 title: 'Bid',
  //                 gross_price: 'Gross Price',
  //                 loap_op: ' The current selected loan option includes this Loan Discount off your Gross Price.',
  //                 lifetime: 'Average lifetime (25 years) cost per kWh of solar vs. your average lifetime cost of energy from your Utility.',
  //                 recoup: 'Number of years to recoup your net investment.',
  //                 return: 'Average annual return on your net investment.',
  //                 bill_compare: 'New Utility bill after solar vs. your Utility bill before solar.',
  //                 total_bill: 'Your total new energy bill after solar (Utility Payment + Loan Payment) vs. your Utility Payment before solar.',
  //                 lp: 'Loan Payment',
  //                 up: 'Utility Payment',
  //                 add: 'Add to Cart',
  //                 added: 'Added to Cart',
  //                 p: 'Previous',
  //                 n: 'Next',
  
  
  //                 loan_discount: {
  //                   title: 'Loan Discount',
  //                   tooltip: ''
  //                 },
  //                 utility_rebates: {
  //                   title: 'Utility Rebates',
  //                   tooltip: ''
  //                 },
  //                 contract_value: 'Contract Value',
  //                 federal_tax: {
  //                   title: 'Federal Tax Credit',
  //                   tooltip: ''
  //                 },
  //                 solar_tax: {
  //                   title: 'State Tax Credit',
  //                   tooltip: ''
  //                 },
  //                 net_price: 'Net Price',
  //                 energy_bill: 'New Energy Bill',
  //                 loan_payment: 'Loan Payment',
  //                 utility_payment: 'Utility Payment',
  //                 monthly_savings: 'Monthly Savings',
  //                 internal_rate: 'Internal Rate of Return (IRR)',
  //                 roi: 'Return on Investment (ROI)',
  //                 payment_period: 'Payback Period',
  //                 cost_kwh: 'Cost Per kWh',
  //                 ppw: 'Price Per Watt (PPW)',
  //                 added_btn: 'Added to Cart',
  //                 add_btn: 'Add to Cart',
  //                 price_per_watt: {
  //                   title: 'Price Per Watt',
  //                   tooltip: 'Cost of this solar system per "watt" of solar. PPW is a great tool to compare costs of Bids relative to system size. '
  //                 },
  //                 cost_per_kwh: {
  //                   title: 'Cost Per kWh',
  //                   tooltip: 'Average Lifetime (X year) cost per kWh of solar vs. your average lifetime cost of energy from your Utililty.'
  //                 },
  //                 ROI: {
  //                   title: 'Return on Investment (ROI)',
  //                   tooltip: 'Average annual return on your net investment.'
  //                 },
  //                 payback_period: {
  //                   title: 'Payback Period',
  //                   tooltip: 'Number of years to recoup your net investment.'
  //                 }
  //               },
  //               'bid-details': {
  //                 title : 'Bid',
  //                 previous: 'Previous Bid',
  //                 next: 'Next Bid',
  //                 detail: 'Details',
  //                 sys_detail: 'Sys. Details',
  //                 financial: 'Financials',
  //                 installer: 'Installer',
  //                 utility: 'Utility',
  
  
  //                 'bid-detail-installer': {
  //                   rating_tooltip: 'This rating is the aggregate score of numerous sites like Facebook, Google, Yelp and Solar Marketplace.',
  //                     about: 'About',
  //                     detail: 'Details',
  //                     year_established: 'Year Established',
  //                     installations: 'Installations',
  //                     workmanship: 'Solar Workmanship Warranty',
  //                     qualifications: 'Qualifications',
  //                     text1: 'Fully licensed and insured.',
  //                     text2: 'NABCEP certified.',
  //                     text3: 'Excellent reputation for workmanship and customer service.',
  //                     text4: '3+ years of experience installing solar PV.',
  //                     rate: 'This rating is the aggregate score of numerous sites like Facebook, Google, Yelp and Solar Marketplace.',
  //                     demonstarte: 'Demonstrated bankability to honor long term warranties',
  //                     in: 'Installer Notes',
  //                     p: 'Previous',
  //                     n: 'Next',
  //                   },
  //                 'bid-financial': {
  //                   breakdown: {
  //                     title: 'Breakdown',
  //                     gross_price: 'Gross Price',
  //                     loanOption: ' The current selected loan option includes this Loan Discount off your Gross Price.',
  //                     prceed_cp: 'By electing to proceed with this cash purchase, you will be eligible for this discount.',
  //                     lifetime: 'Average lifetime (25 years) cost per kWh of solar vs. your average lifetime cost of energy from your Utility.',
  
  //                     loan_discount: {
  //                       title: 'Loan Discount',
  //                       tooltip_cash: 'By electing to proceed with this cash purchase you will be eligable for this discount.',
  //                       tooltip_loan: 'The current selected loan option includes this Loan Discount off your gross price.'
  //                     },
  //                     utility_rebates: {
  //                       title: 'Utility Rebates',
  //                       tooltip: ''
  //                     },
  //                     contract_value: 'Contract Value',
  //                     federal_tax: {
  //                       title: 'Federal Tax Credit',
  //                       tooltip: ''
  //                     },
  //                     solar_tax: {
  //                       title: 'State Tax Credit',
  //                       tooltip: ''
  //                     },
  //                     net_price: 'Net Price',
  //                     bill_reduction: {
  //                       title: 'Bill Reduction',
  //                       tooltip: 'Percentage of your current Energy Bill offset by going solar.'
  //                     },
  //                     price_per_watt: {
  //                       title: 'Price Per Watt',
  //                       tooltip: 'Cost of this solar system per "watt" of solar. PPW is a great tool to compare costs of Bids relative to system size. '
  //                     },
  //                     cost_per_kwh: {
  //                       title: 'Cost Per kWh',
  //                       tooltip: 'Average Lifetime (X year) cost per kWh of solar vs. your average lifetime cost of energy from your Utililty.',
  //                       cep_percent: 'Percentage of your current Energy Bill offset by going solar.',
  
  //                     },
  //                     annual_consumption: 'Annual Consumption',
  //                     sys_size: 'System Size'
  //                   },
  //                   payments: {
  //                     title: 'Payments',
  //                     loan_provider: 'Loan Provider',
  //                     year1_payment: 'Year 1 Payments',
  //                     year2_payment: 'Years 2-12 Payments',
  //                     Avg_loan: 'Average Loan Payments',
  //                     utility_payment: 'Utility Payment',
  //                     energy_bill: 'New Energy Bill',
  //                     high_pay: 'Please note that these payments will be higher if the tax credit loan is not paid off.',
  //                     ub_compare: 'New Utility bill after solar vs. your Utility bill before solar.',
  //                     bill_compare: 'Your total new energy bill after solar (Utility Payment + Loan Payment) vs. your Utility Payment before solar.',
  //                   },
  //                   Savings_Benefits: {
  //                     avg_saving: 'First-year average monthly savings.',
  //                     title: 'Savings & Benefits',
  //                     month1_saving: {
  //                       title: 'Year 1 Monthly Savings',
  //                       tooltip: 'First-year average monthly savings.'
  //                     },
  //                     annual_savings: {
  //                       title: 'Average Annual Savings',
  //                       tooltip: 'Average annual savings over the lifetime of your solar system.',
  //                       recoup: 'Number of years to recoup your net investment.',
  //                     },
  //                     lifetime_saving: 'Lifetime Savings',
  //                     IRR: {
  //                       title: 'IRR',
  //                       tooltip: ''
  //                     },
  //                     home_value: {
  //                       title: 'Home Value',
  //                       tooltip: 'Calculated added value to home based on National Renewable Energy Laboratory (NREL).'
  //                     },
  //                     referral_bonus: {
  //                       title: 'Referral Bonus',
  //                       tooltip: 'You\'ll recieve a check in the mail after your system is installed for this amount.'
  //                     },
  //                     payback_period: {
  //                       title: 'Payback Period',
  //                       tooltip: 'Number of years to recoup your net investment.'
  //                     },
  //                     ROI: {
  //                       title: 'Return on Investment (ROI)',
  //                       tooltip: 'Average annual return on your net investment.'
  //                     }
  //                   },
  //                   property_tax: {
  //                     title: 'NYC Property Tax Abatement',
  //                     tooltip: '',
  //                     incentive_type: 'Incentive Type',
  //                     payment_based: 'Payment Based Off Of',
  //                     term: 'Term',
  //                     rate: 'Rate',
  //                     est_total: 'Est. Total Value',
  //                     cm_value: 'Current Market Value of 1 SREC',
  //                     fy_value: 'Estimated First Year SREC Value',
  //                     lump_sum: 'Lump Sum Upfront SREC Payment',
  //                     fixed: 'Fixed SREC Value for',
  //                     yt: 'Year Term',
  //                     epot: 'Estimated Production over Term',
  //                     etsv: 'Estimated Term SREC Value',
  //                     asot: 'Average SREC Value over Terms',
  //                     teot: 'Total Estimated Production over Terms',
  //                     tesv: 'Total Estimated SREC Value',
  //                   }
  //                 },
  //                 'bid-system-details': {
  //                   overview: {
  //                     title: 'Overview',
  //                     system_size: 'System Size',
  //                     annual_consumption: 'Annual Consumption',
  //                     consumption_tooltip: '',
  //                     annual_production: 'Annual Production',
  //                     production_tooltip: 'Percentage of your current consumption offset by this system\'s production.',
  //                     cc_percent: 'Percentage of your current consumption offset by this system\'s production.',
  //                     pn: 'Project Notes'
  //                   },
  //                   panels: {
  //                     title: 'Panels',
  //                     panel_model: 'Panel Model',
  //                     efficiency: 'Efficiency',
  //                     color: 'Color',
  //                     origin: 'Origin',
  //                     performance_warranty: 'Performance Warranty',
  //                     hover_mobile: 'Tap over panel to enlarge',
  //                     hover_desktop: 'Hover over panel to enlarge'
  //                   },
  //                   inverter: {
  //                     title: 'Inverter',
  //                     inverter_model: 'Inverter',
  //                     warranty: 'Warranty',
  //                     Monitoring: 'Monitoring System'
  //                   },
  //                   optimizer: {
  //                     title: 'Optimizer',
  //                     optimizer_model: 'Optimizer Model'
  //                   }
  //                 },
  //                 'bid-utility': {
  //                   title: 'Your Monthly Utility Bills',
  //                   month: 'Month',
  //                   without_solar: 'Without Solar',
  //                   with_solar: 'With Solar',
  //                   net_savings: 'Net Savings',
  //                   total: 'Total',
  //                   tooltip: '',
  //                   payment: 'Your estimated monthly electricity payment to your utility after going solar. Negative values represent electricity credits.',
  //                   min_charge: 'Minimum Charges - $190',
  
  
  //                 },
  //                 'add-bid': 'Add Bid',
  //                 'added-bid': 'Added Bid',
  //                 'to-cart': 'To Cart'
  //               }
  //             },
  //             popup: {
  //               installer: 'Solar and Battery selections must have the same installer. If you choose to add this item, your current selections will be removed.',
  //               financing: 'All Cart selections must have the same financing option of Cash or Loan. If you choose to add this item with the current financing selection, others items in your cart wil be removed.',
  //               Add_btn: 'Add'
  //             },
  //             disclaimer: 'All values displayed on this page are based on standard industry assumptions. Savings numbers are calculated based on present day market circumstances, but may vary due to utility adjustments to rates or policy, or due to updates to the system design. Finance payments displayed are estimates subject to credit approval and based upon current provider rates that are subject to change. Your payments and rates may be higher.'
  //           },
  //           design_studio: {
  //             solar_ds: 'Solar Design Studio',
  //             add_rm: 'Add or Remove Solar Panels',
  //             ds_tune: 'Tune your bids below by adjusting the number of panels on your roof. Keep in mind that your Energy Advisor and selected Installer may review your adjustments to ensure best value.',
  //             bid: 'Bid',
  //             no_more: 'No more panels are possible on your roof.',
  //             panel_number: 'Panel Number',
  //             sys_size: 'System Size',
  //             annual_prod: 'Annual Production',
  //             bill_reduction: 'Bill Reduction',
  //             custom_proposal: 'Custom Proposals Left',
  //             name_new: 'Name Your New Solution',
  //             save_new: 'Save As New',
  //             error_msg: 'It looks like you’ve reached your custom proposal limit. Please contact your Energy Advisor for assistance.',
  //             return_bids: 'Return to Bids',
  //             sattelite: 'Satellite',
  //             shade: 'Shading',
  //             ds: 'Design Studio',
  //             new_sol: 'Creating New Solution',
  //             p: 'Previous',
  //             n: 'Next',
  //             nm_sol: 'Please name your solution before saving.',
  //           },
  //           br_disclaimer: 'All values displayed on this page are based on standard industry assumptions. Savings numbers are calculated based on present day market circumstances, but may vary due to utility adjustments to rates or policy, or due to updates to the system design. Finance payments displayed are estimates subject to credit approval and based upon current provider rates that are subject to change. Your payments and rates may be higher.'
  //         },
  //         bid_confirmation: {
  //           confirm_selection: {
  //             title: 'Confirm Your Selection',
  //             content: 'Make sure all the bid information you selected below is correct before we generate your custom agreement. ',
  //             installer: 'Installer',
  //             solar: 'Solar',
  //             financing: 'Financing',
  //             battery: 'Battery',
  //             system_size: 'System Size',
  //             solar_module: 'Solar Module',
  //             contract_value: 'Contract Value',
  //             capacity: 'Capacity',
  //             home_battery: 'Home Battery',
  //             option: 'Option',
  //             down_payment: 'Down Payment',
  //             loan_provider: 'Loan Provider',
  //             term: 'Term',
  //             interest_rate: 'Interest Rate',
  //             est_loan_payment: 'Est. Loan Payment',
  //             confirm: 'Confirm'
  //           },
  //         },
  //         'go-solar': {
  //           title: 'Congrats!',
  //           title_ext: 'You’re Ready To Go Solar!',
  //           battery_title: 'You’re Ready To Add Energy Storage!',
  //           content: 'We’re so happy that you took the solar journey with us. We can’t wait for your system to be installed!',
  //           feedback_msg: 'Thanks For Your Feedback!',
  //           view_bids: 'View Original Bids',
  //           partner : 'Electrum',
  //           refer: 'Refer-A-Friend',
  //           intro: 'Introduce a friend to',
  //           discount: 'They’ll get a discount',
  //           off: 'off their project and',
  //           referal: 'you’ll get a referral bonus reward',
  //           electrify: 'once they electrify with us.',
  //           se: 'Start Earning',
  
  //         },
  //         review_quote: {
  //           hewh: 'Your New Hybrid Electric Water Heater',
  //           size: 'Size your water heater',
  //           cancel: 'Cancel',
  //           update_later: 'If you’re not sure, you can always update later.',
  //           energy_factor: 'The higher the energy factor, the more efficient the water heater.',
  //           bp: 'Base Price',
  //           not_included: '(Installation not included)',
  //           ai: 'Available Incentives',
  //           combined_savings: 'The combined savings from all incentives currently available in your area.',
  //           ec: 'Equipment Cost',
  //           purchase_price: 'The purchase price of equipment after incentives. This does not include installation costs. By continuing, you\’ll receive a Quote which Your Est. Annual Savings includes installation costs.',
  //           yeas: 'Your Est. Annual Savings is',
  //           estimated_annual: 'Based on the estimated annual operating cost of your current water heater.',
  //           vmd: 'View More Details',
  //           wh: 'Water Heater',
  //           p: 'Previous',
  //           n: 'Next',
  //           hpewh: 'Heat Pump Electric Water Heater >',
  //           left: 'keyboard_arrow_left',
  //           right: 'keyboard_arrow_right',
  //           waia: '*With all incentives applied',
  //           back: 'Back to Results',
  //           based_comp: 'Based on comparison against the estimated annual operating cost of your current water heater.',
  //           dimensions: 'Dimensions',
  //           pd: 'Product Depth (in.)',
  //           tvs: 'Tank Valve Size (in.)',
  //           ph: 'Product Height (in.)',
  //           wcs: 'Water Connection Size (in.)',
  //           pw: 'Product Width (in.)',
  //           detail: 'Details',
  //           at: 'Application Type',
  //           rtc: 'Rated Tank Capacity (gallons)',
  //           ff: 'Finish Family',
  //           rvc: 'Required Volt Connection',
  //           fhod: 'First Hour of Delivery (gallons/hr)',
  //           return: 'Returnable',
  //           ft: 'Fuel Type',
  //           tlm: 'Tank Lining Material',
  //           io: 'Indoor/ Outdoor',
  //           tw: 'Tank Warranty',
  //           mt: 'Maximum Temperature (F)',
  //           uef: 'Uniform Energy Factor',
  //           mhpt: 'Minimum heat Pump Temperature (F)',
  //           whf: 'Water Heater Features',
  //           mint: 'Minimum Temperature (F)',
  //           whp: 'Water Heater Profile',
  //           ntc: 'Nominal Tank Capacity (gallons)',
  //           watt: 'Wattage (watts)',
  //           pweight: 'Product Weight (lb.)',
  //           wc: 'Warranty / Certifications',
  //           lw: 'Labor Warranty',
  //           nw: 'No Warrenty',
  //           pwarrenty: 'Part Warrenty',
  //           long_text: 'All values displayed on this page are based on standard industry assumptions.\
  //               Savings numbers are calculated based on present day market circumstances, but may vary due to utility \
  //           adjustments to rates or policy, or due to updates to the system design. Finance payments displayed are \
  //           estimates subject to credit approval and based upon current provider rates that are subject to change. \
  //           Your payments and rates may be higher.',
  //         },
  //         user_info: {
  //           tank: 'Tank',
  //           tankless: 'Tankless',
  //           hw: 'How to Find it',
  //           volume: 'The water heater volume can typically be found  on the energy guide found around the product',
  //           hover: 'Hover to enlarge image',
  //           tap: 'Tap to enlarge image',
  //           upload: 'Upload Water Heater Tank Pictures',
  //           op: '(optional)',
  //           wide_view: 'A wide view, and a close-up view of your gallons is ideal.',
  //           accept: 'Accepted files: JPEG, PDF, PNG',
  //           up: 'Upload',
  //           close: 'close',
  //           complete: 'Completed',
  //           no_up: 'No File Uploaded',
  //           how: 'How to Find it',
  //           find_detail: 'You can typically find this detail on your main breaker or a spec sheet on the door',
  //           upload_panel: 'Upload Panel Box Picture',
  //           max: 'Maximum 35 characters allowed.',
  //           confirm: 'Make sure to confirm your project information below before continuing',
  //           swh: 'Selected Water Heater',
  //           edit: 'Edit',
  //           cwh: 'Current Water Heater',
  //           twh: 'Tank Water Heater',
  //           tlwh: 'Tankless Water Heater',
  //           other: 'Other',
  //           el: 'Electric',
  //           ng: 'Natural Gas',
  //           nc: 'New Construction',
  //           of: 'Oil Fuel',
  //           propane: 'Propane',
  //           cwhl: 'Current Water Heater Location',
  //           b: 'Basement',
  //           g: 'Garage',
  //           utility1: 'In Utility Closet(1st floor)',
  //           utility2: 'In Utility Closet(2nd floor or higher)',
  //           lr: 'Laundr Room',
  //           os: 'Outside',
  //           hf: 'Home’s Foundation',
  //           cs: 'Crawl Space',
  //           sg: 'Slab On Grade',
  //           pt: 'Plumbing Type',
  //           cop: 'Copper',
  //           gs: 'Galvanized Steel',
  //           pan_box: 'Your Panel Box Amperage',
  //           own: 'Do You Own an Electric Vehicle?',
  //           own_solar: 'Do You Own a Solar PV System?',
  //           add: 'Address',
  //           ci: 'Contact Information',
  //           clr: 'clear',
  
  //         },
  //         inactive: {
  //           miss_u: 'We\'ve Missed you!',
  //           inactivity: 'Your project is on hold due to inactivity. Please confirm your email to resume your project and get fresh solar offers.',
  //           confirm: 'Confirm Your Email',
  //           email_req: 'Email is a required field',
  //           email_valid: 'Please enter a valid email address',
  //           rp: 'Resume Project',
  //           success: 'Success!',
  //           energy_ad: 'An Energy Advisor has been notified and will reach out to you soon to resume your project.',
  //         },
  //         'refer-a-friend': {
  //           title: 'Refer-A-Friend',
  //           content: 'Introduce a friend to Pick My Solar.',
  //           content_ext: 'They’ll get ',
  //           content_ext1: 'off their solar system and',
  //           content_ext2: 'you’ll get ',
  //           content_ext3: 'once they go solar with us.',
  //           start_earning: 'Start Earning',
  //           email_placeholder: 'Enter Email(s)',
  //           send_invites: 'Send Invites',
  //           import_contacts: 'Import contacts',
  //           referral_link: 'Share my referral link',
  //           share_on_social: 'Share on my social',
  //           copy_link: 'Copy Link',
  //           copied: 'Copied!',
  //           messenger: 'Messenger',
  //           facebook: 'Facebook',
  //           invites_sent: 'Invites Sent',
  //           potential_earnings: 'Potential Earnings',
  //           actual_earnings: 'Actual Earnings',
  //           term_condition: 'Referrals Terms and Conditions apply.',
  //           valid_email: 'Please enter a valid email',
  //           electrum: 'Introduce a friend to Electrum.',
  //           off: 'off their Home Electrification system and',
  //           get: 'you’ll get',
  //           product: 'once their product is installed.',
  //           se: 'Start Earning',
  //           cancel: 'cancel',
  //           or: 'Or',
  //         },
  //         Quotes_installer: {
  //           title: 'Quotes from Other Installers',
  //           title_ext: '(optional)',
  //           line2: 'We will analyze your other quotes for free.',
  //           line3: 'Accepted files: JPEG, PDF, PNG',
  //           line4: '(Max Size: 10Mb, Max File: 20)',
  //           uploaded_document: 'Uploaded Documents',
  //           upload: 'Upload'
  //         },
  //         documents: {
  //           heading: 'My Documents',
  //           title1: 'Usage Information',
  //           title2: 'Panel Box Pictures',
  //           title3: 'Agreements ',
  //           approved: 'Approved',
  //         },
  //         'shared-components': {
  //             ceb: 'Current Energy Bill',
  //             ignore: 'here is ignored',
  //             save: 'Saved',
  //             sep: 'Solar Energy Payment',
  //             up: 'Utility Payment',
  //             bs: 'Before Solar',
  //             as: 'After Solar',
  //             is: 'Immediate Savings',
  //             current: 'Current',
  //             eb: 'Energy Bill',
  //             ub: 'Utility Bill',
  //             lts: 'Long-Term Savings',
  //             annual: 'Annual',
  //             cumulative: 'Cumulative',
  //             contact: 'Savings data is currently not available. Please contact your Energy Advisor.',
  //             images: {
  //               usage_info: 'Usage Information',
  //               panel_box: 'Panel Box Pictures',
  //               upload_files: 'Upload Files',
  //               not_approved: 'Not Approved',
  //               pending_approval: 'Pending Approval',
  //               approved: 'Approved',
  //               content: 'Upload a PDF or image of my utility bill',
  //               content_ext: 'Accepted files: JPEG, PDF, PNG, CSV, XLS',
  //               content_ext2: '(Max Size: 10Mb, Max File: 20)',
  //               upload : 'Upload',
  //               hover_enlarge: 'Hover to Enlarge',
  //               uploaded_doc: 'Uploaded Documents',
  //               no_files: 'No Files uploaded',
  //               completed: 'Completed',
  //               connect: 'Connect to my utility',
  //               recommend: 'Recommended',
  //               login_utility: 'Log into your utility and instantly share your usage data.',
  //               or: 'Or',
  //               charge_location: 'Preferred EV Charger Location',
  //               take_pic: 'Please take a clear picture of the area where you would like the charger.',
  //               files: 'Accepted files: JPEG, PDF, PNG',
  //               upload_panelbox: 'Upload my panel box pictures',
  
  //             },
  //             video: {
  //               p: 'Previous',
  //               n: 'Next',
  //               warrenty: 'LG and NeON R ACe 25 Year Solar Panel Warranty',
  //               performance: 'LG NeON R ACe Solar Panel Enhanced Performance',
  //               factory: 'LG Huntsville Solar Factory 2019',
  //             },
  //             'no-bids': {
  //              title: 'Your Bids Will Be Ready When',
  //              line_1: 'You’ve submitted all the required information',
  //              line_2: 'Our engineers designed and evaluated your system',
  //              line_3: 'You’ve scheduled a Proposal Review Call',
  //              Quotes: 'Quotes from Other Installers',
  //              optional: '(optional)',
  //              content: 'We will analyze your other quotes for free.',
  //              content_ext: 'Accepted files: JPEG, PDF, PNG',
  //              content_ext2: '(Max Size: 10Mb, Max File: 20)',
  //               upload : 'Upload',
  //               completed: 'Completed',
  //               uploaded_doc: 'Uploaded Documents',
  //               not_approved: 'Not Approved',
  //               pending_approval: 'Pending Approval',
  //               approved: 'Approved',
  //               go_to_project: 'Go to My Project'
  //           }
  //         },
  //         profile: {
  //           title: 'My Profile',
  //           name: 'Name',
  //           email: 'Email',
  //           contact_no: 'Contact Number',
  //           password: 'Password',
  //           address: 'Address',
  //           edit: 'Edit',
  //           tooltip: 'Please ask your Energy Advisor for assistance in updating your address.',
  //           save_changes: 'Save Changes',
  //           change_name: {
  //             title: 'Change Your Name',
  //             content: 'If you want to change the name associated with your account, you may do so below. Keep in mind that your full legal name will be required to complete any agreements. ',
  //             new_name: 'New Name'
  //           },
  //           change_email: {
  //             title: 'Change Your Email',
  //             current_email: 'Current email address',
  //             new_email: 'New email address',
  //             re_enter_email: 'Re-enter new email address',
  //             password: 'Enter password'
  //           },
  //           change_contact: {
  //             title: 'Change Your Contact Number',
  //             current_contact: 'Current contact number',
  //             new_contact: 'New contact number'
  //           },
  //           change_password: {
  //             title: 'Change Your Password',
  //             current_pass: 'Enter current password',
  //             new_password: 'Enter new password',
  //             confirm_password: 'Re-enter new password'
  //           },
  //           change_address: {
  //             title: 'Change Your Address',
  //             content: 'If your address below does not properly reflect the address you’re evaluating for solar, please update your address. After your initial consultation call, your address will be locked.',
  //             current_address: 'Current address',
  //             new_address: 'New address',
  //             address_placeholder: 'Enter & select address from the dropdown'
  //           },
  //           manage_account: {
  //             title: 'Manage User Account',
  //             caution: 'CAUTION:',
  //             confirm_title: 'Pressing <span>DELETE MY ACCOUNT</span> will remove all of your personal account data including all projects and addresses you have created.',
  //             delete_btn: 'Delete My Account',
  //             delete_confirm: 'Are you sure you want to delete your <span>account</span>? This action cannot be undone.',
  //             delete_confirm_sub: '',
  //             cancel: 'Cancel',
  //             confirm_btn: 'Confirm Delete',
  //             confirmed: 'Confirmed, We will begin the process of removing your data.',
  //             sorry: 'We are sorry to see you go.',
  //             close: 'Close',
  //             profile: 'Profile',
  //             ma: 'Manage Addresses',
  //             outside_add: 'Address Outside Service Area',
  //             outside_area: 'It looks like the selected address is outside of SCE’s service area. Please try another address.',
  //             got_it: 'Got It',
  //             update: 'Update Contact Information',
  //             fn: 'First Name',
  //             max: 'Maximum 35 characters allowed.',
  //             ln: 'Last Name',
  //             email: 'Email',
  //             pn: 'Phone Number',
  //             reminder: 'Reminder',
  //             update_contact: 'You can always update your contact information later during the agreement process',
  //             update_on: 'Updated on',
  //             issue: 'Facing some issue while requesting. Please try again !!!',
  //             complete_profile: 'Complete Your Profile',
  //             skip: 'Skip to main content',
  
  //           }
  //         },
  //         faqs: {
  //           solar: [],
  //           communitySolar: [
  //             {
  //               answer: 'With community solar, solar panels are part of a large facility, located in an open space in or near your community, and connected to your utility’s grid, not on your roof or property. Electricity from the community solar facility is distributed across your utility’s electric grid, and participating customers are credited monetarily for the power produced by their portion of the capacity of that facility. Community solar enables utility customers to benefit from clean solar energy regardless of their rooftop situation, shading, or customer’s ability to install and maintain solar at their service address.',
  //               question: 'What is Community Solar?'
  //             },
  //             {
  //               answer: 'Any metered utility customer can participate! In other words, if you receive an electric bill you are eligible to participate.',
  //               question: 'Who is eligible to participate?'
  //             },
  //             {
  //               answer: 'Community Solar allows you the opportunity to go Solar without any upfront cost to you. There is no need to install any panels on your roof or property and you are guaranteed to start saving money from day 1!',
  //               question: 'Why should I participate?'
  //             },
  //             {
  //               answer: 'Community solar site locations are selected to allow the solar panels to orient towards the sun at the perfect angle, with no shade and lots of sun to maximize solar production and your savings. Community solar projects provide up to a 20% performance enhancement over traditional rooftop solar systems. In addition, we constantly monitor facility performance and can quickly dispatch contractors to resolve any maintenance issues if needed.',
  //               question: 'What are the advantages of community solar vs. rooftop solar panels?'
  //             },
  //             {
  //               answer: 'Your system size will be customized to meet your energy needs. You will be assigned a system size in kilowatts-DC based on your electric consumption history, and the details of your system size will be updated in your contract agreement.',
  //               question: ' How large is the system I’m subscribing to?'
  //             },
  //             {
  //               answer: 'You pay nothing upfront to participate in this program, plus there are no installation costs or any maintenance fees. After your community solar facility is connected to the electricity grid, you will see two changes to your electric charges:<ul><li>Bill credits on your normal utility bill. Your utility calculates credits earned for your monthly solar production, and places those credits on your utility bill.</li><li>A new bill for solar energy. Pick My Solar will assign you to a local New York solar facility, and you will see a bill from that facility for your portion of its solar power output each month. Your utility calculates the value of your solar credits and applies those to your regular monthly electricity bill. The next month, Your Solar Facility invoices you for those credits at the utility-determined discounted rate.</li></ul>',
  //               question: 'How much does it cost to participate?'
  //             },
  //             {
  //               answer: 'Each month, your utility calculates the number of kWh’s attributable to each customer in the community solar facility based on their share of the solar production. Once the kWh production for your allocation is determined, your utility will apply the bill credits to your electricity bill, based on their rate for solar power. This is known as a “bill credit;” simply put, you will receive a kWh credit on your bill. The bill credit rate is determined by your utility, and it will fluctuate based on several local regulatory factors and the hourly price of energy. The community solar developer will invoice you for a portion of those bill credits each month at a discounted rate!',
  //               question: 'How do bill credits work?'
  //             },
  //             {
  //               answer: 'Your credits will vary from month to month based on the monthly solar facility production and utility’s determined bill credit rate value. For example, in months when there is more sunshine, you will generally have a higher bill credit, and in cloudier months, you will have a lower bill credit.',
  //               question: ' Will I get the same amount of credits applied to my electricity bill each month?'
  //             },
  //             {
  //               answer: 'Yes. With community solar, you are still connected to your local utility’s electric grid. Your utility bill will still reflect normal electric charges, only with community solar, you will see your utility determined bill credits that reduce your monthly balance.',
  //               question: 'Am I still connected to my utility?'
  //             },
  //             {
  //               answer: 'In most cases, you can transfer your service to your new home if you remain within the same load zone (and sometimes a different load zone) if you Solar Facility has available capacity. You can also transfer your subscription to the new tenant if they would like to.',
  //               question: 'What happens if I move?'
  //             },
  //             {
  //               answer: 'Yes. During the term of the agreement, you must keep both your utility account and your Solar Facility’s account in good standing, making all payments when due. Each month, your utility will apply bill credits to your account based on your solar production, but there may still be other charges on your bill that you are responsible for paying.',
  //               question: 'Do I still need to pay my electric bill?'
  //             }
  //           ],
  //           hpwh: [
  //             {
  //               answer: 'A heat pump water heater is just like a typical natural gas heater only it uses a heat pump, rather than a natural gas furnace to heat the water in the tank. A heat pump water heater is 100% electric and significantly more efficient than a natural gas water heater.',
  //               question: 'What is a heat pump water heater?'
  //             },
  //             {
  //               answer: 'Heat pump water heaters are the most efficient type of residential water heater on the market. That means they use less energy than typical water heaters to achieve the same water heating result. Plus heat pump water heaters are electric, so you won’t need to worry about natural gas fumes leaking out into your home.',
  //               question: 'What are some benefits of a heat pump water heater?'
  //             },
  //             {
  //               answer: 'No, availability of hot water is determined by the size of the unit, not the method of heating. We will work with you to make sure your new water heater is optimally sized for your home’s hot water needs. If you are comparison shopping on your own, look at the product specs for “First Hour of Delivery (gallons/hr)”.',
  //               question: 'Will a heat pump water heater reduce my hot water availability?'
  //             },
  //             {
  //               answer: 'A heat pump water heater uses a compressor to take heat from the surrounding air and transfers it inside the water tank. It works similarly to a refrigerator, but in reverse. Also referred to as “hybrid electric” because it can heat water either via the heat pump, or, when the surrounding air is too cold, it can heat the same way a conventional electric water heater does. This means your water heating is as efficient as possible, and also ensures you have hot water in all environments.',
  //               question: 'How does a heat pump water heater work?'
  //             },
  //             {
  //               answer: 'The Southern California Edison Heat Pump Water Heater Marketplace is here to help you evaluate heat pump water heater options, find a qualified installer in your area, and take advantage of all available incentives and tax credits to reduce your out-of-pocket expense.',
  //               question: 'What does the heat pump water heater marketplace do?'
  //             },
  //             {
  //               answer: 'Yes, currently there is a 10% federal investment tax credit for heat pump water heaters, capped at a maximum amount of $300. Southern California Edison also recently released a $1,000 discount on heat pump water heaters as well. You can see all available incentives in your offers on the SCE Heat Pump Water Heater Marketplace.',
  //               question: 'Are there any heat pump water heater incentives available?'
  //             }
  //           ],
  //         },
  //         'out-of-area': {
  //           title: 'Your Registration is Complete!',
  //           line1: 'We appreciate your interest in Pick My Solar',
  //           line3: 'It looks like we do not operate in the region of the selected address. But don\'t worry, we\'ll let you know once our service becomes available in your area!',
  //         },
  //         installation: {
  //           yiq: 'Your Installation Quote',
  //           your: 'Your',
  //           hewh: 'Hybrid Electric Water Heater',
  //           quote_base: 'quote is based on your provided home energy profile.',
  //           qd: 'Quote Details',
  //           long_text: ' All values displayed on this page are based on standard industry assumptions. \
  //           Savings numbers are calculated based on present day market circumstances, \
  //           but may vary due to utility adjustments to rates or policy, or due to updates \
  //           to the system design. Finance payments displayed are estimates subject to credit \
  //           approval and based upon current provider rates that are subject to change. \
  //           Your payments and rates may be higher.',
  //           financials: 'Financials',
  //           spec: 'Specs',
  //           install: 'Installer',
  //           quote_cart: {
  //             hewh: 'Hybrid Electric Water Heater Quote',
  //             cost: 'Installed Cost with ',
  //             of: 'of',
  //             incentive: 'incentives applied',
  //             or: 'Or',
  //             select: 'Select a financing option with ',
  //             installer: 'your installer',
  //             epd: 'Edit project details',
  //             que: 'Questions?',
  //             help: 'We’re here to help. Speak with a friendly and dedicated Electrum Energy Advisor.',
  //             sc: 'Schedule Call',
  //             nc: 'Next Call',
  //             rc: 'Reschedule Call',
  //             ns: 'Next Step',
  //             schedule: 'Schedule',
  //             summary: 'Summary',
  //             rsv: 'Request Site Visit',
  //             ra: 'Request Assistance',
  //             rt: 'Return',
  //           },
  //           financial: {
  //             cost: 'Cost',
  //             equip: 'Equipment',
  //             purchase_price: 'The purchase price of equipment after incentives. This does not include installation costs.',
  //             install: 'Installation',
  //             cost_installation: 'The cost of the installation service, see below for more details.',
  //             gp: 'Gross Price',
  //             nc: 'Net Cost',
  //             finance: 'Financing',
  //             ao: 'Available Options',
  //             mp: 'Monthly Payment',
  //             terms: 'Terms',
  //             apr: 'APR',
  //             prvide: 'Provider',
  //             include: 'Included',
  //             install_Cost: 'with Installation Cost',
  //             basic_req: 'All basic requirements for a typical installation of a heat pump water heater (equipment, labor, permits)',
  //             not_include: 'Not included with Installation Cost',
  //             typical_install: 'Items not included with a typical installation include, but are not limited to',
  //             final_pricing: 'Your installer will be able to provide you final pricing at your site visit for any additional costs. You will have no obligation to move forward at that time.'
  //           },
  //           installer: {
  //             aggregate_rating: 'This rating is the aggregate score of numerous sites like Facebook, Google, and Yelp.',
  //             abt: 'About',
  //             detail: 'Details',
  //             ye: 'Year Established',
  //             hc: 'Happy Customers',
  //             ww: 'Workmanship Warranty',
  //             al: 'Active Licenses',
  //             install: 'Installations',
  //             p: 'Previous',
  //             n: 'Next',
  //           },
  //           overview: {
  //             highlight: 'Highlights',
  //             es: 'EnergyStar',
  //             energy_factor: 'The higher the energy factor, the more efficient the water heater.',
  //             er: 'ef Rating',
  //             sb: 'Savings & Benefits',
  //             ze: 'Zero Emissions',
  //             emmited: 'Emitted into your home.',
  //             clean_air: 'Clean air for you and your family',
  //             tp: 'Trees Planted',
  //             carbon_offset: 'Equivalent Carbon offset to your',
  //             fossil_fule: 'switch off fossil fuels',
  //             annual_saving: 'Estimated annual savings by',
  //             more_efficient: 'switching to more efficient',
  //             tech: 'technology',
  //             finance: 'Financing',
  //             install_cost: 'Installed cost with',
  //             ia: 'incentive applied',
  //             or: 'Or',
  //             available_finance: 'with available financing options',
  //             sm: 'See more',
  //             installer: 'Installer',
  //             aggregate_rating: 'This rating is the aggregate score of numerous sites like Facebook, Google, and Yelp.',
  //           },
  //           specs: {
  //             po: 'Product Overview',
  //             feature: 'Features',
  //             spec: 'Specifications',
  //             dimension: 'Dimensions',
  //             pd: 'Product Depth (in.)',
  //             tvs: 'Tank Valve Size (in.)',
  //             ph: 'Product Height (in.)',
  //             wcs: 'Water Connection Size (in.)',
  //             pw: 'Product Width (in.)',
  //             deatil: 'Details',
  //             at: 'Application Type',
  //             rtc: 'Rated Tank Capacity (gallons)',
  //             ff: 'Finish Family',
  //             rvc: 'Required Volt Connection',
  //             fhd: 'First Hour of Delivery (gallons/hr)',
  //             return: 'Returnable',
  //             ft: 'Fuel Type',
  //             tlm: 'Tank Lining Material',
  //             io: 'Indoor/ Outdoor',
  //             tw: 'Tank Warranty',
  //             mt: 'Maximum Temperature (F)',
  //             uef: 'Uniform Energy Factor',
  //             mhpt: 'Minimum heat Pump Temperature (F)',
  //             mhf: 'Water Heater Features',
  //             whp: 'Water Heater Profile',
  //             ntc: 'Nominal Tank Capacity (gallons)',
  //             watt: 'Wattage (watts)',
  //             pweight: 'Product Weight (lb.)',
  //             wc: 'Warranty / Certifications',
  //             lw: 'Labor Warranty',
  //             nw: 'No Warrenty',
  //             pwarrenty: 'Part Warrenty',
  //             mr: 'More Resources',
  //             eg: 'Energy Guide',
  //             pb: 'Product Brochure',
  //             uc: 'Use & Care Manual',
  //             warrenty: 'Warranty',
  //           },
  //         },
  //         installation_process: {
  //           ip: 'Installation Progress',
  //           did: 'Did',
  //           complete: 'complete a site visit?',
  //           n: 'No',
  //           y: 'Yes',
  //           enter_contract: 'Did you enter into a contract with',
  //           installed: 'Has your new hot water heater been installed?',
  //           need_assist: 'If you need assistance from a Electrum Energy Advisor, please schedule a call or email us here support@electrum.co',
  //           scale: 'On a scale of zero to ten, how likely are you to recommend our service to a friend or colleague?',
  //           sr: 'Submit Rating',
  //           vq: 'View Quote',
  //           installer_call: 'Your installer will call you to confirm the time of your scheduled site visit.',
  //           site_visit: 'At the site visit, your installer will determine final pricing and provide you options to move forward with.',
  //           intaller_contract: 'You’ll enter into a contract with your installer.',
  //           installer_permit: 'Your installer will pull necessary permits, schedule install, and complete your hybrid electric water heater installation.',
  //           congrats: 'Congrats On Your Installation!',
  //           we_happy: 'We’re happy your Hybrid Electric Water Heater was successfully installed. Enjoy your savings!',
  //         },
  //         review_quotes: {
  //           quote_ready: 'Your Quote Is Ready!',
  //           vq: 'View Quote',
  //           quote_expired: 'Your Quote Has Expired!',
  //           reactivate: 'Re-Activate Quote',
  //           edit: ' < Edit project details',
  //         },
  //         site_visit: {
  //           ema: 'Emergency Assistance Requested!',
  //           call: 'have received your information and will call you as soon as possible.',
  //           vq: 'View Quote',
  //           next: 'What Happens Next?',
  //           installer_call: 'Your installer will call you ASAP ro schedule a site visit.',
  //           visit_site: 'At the site visit, your installer will determine final pricing and provide you options to move forward with.',
  //           enter_contract: 'You’ll enter into a contract with your installer. They may perform emergency remedies at this time',
  //           installer_permit: 'Your installer will pull necessary permits, schedule install, and complete your hybrid electric water heater installation.',
  //           all_set: 'You’re All Set!',
  //           confirm_call: 'will be calling you shortly to confirm your scheduled site visit on the',
  //           of: 'of',
  //           rsv: 'Reschedule Site Visit',
  //           free: 'Request a FREE Site Visit From Your Installer',
  //           neccessary: 'A site visit is necessary to confirm that the water heater you’ve selected can be installed in place of your old water heater.',
  //           installer_confirm: 'Your installer will confirm the time with you.',
  //           date: '1. Pick a date',
  //           select: 'Select Date',
  //           time: '2. Pick a time of day',
  //           mr: 'Morning',
  //           af: 'Afternoon',
  //           eve: 'Evening',
  //           agree_contract: 'I agree to have my contact and project information shared with my selected installer for the purpose of them reaching out to me for a heat pump water heater installation.',
  //           sr: 'Send Request',
  //           rq: '< Return to Quote',
  //           oc: 'Our Commitment',
  //           ensure: 'Electrum ensures our local, authorized service providers undergo a rigorous screening process',
  //           bg_check: 'All partners are background checked.',
  //           inspections: 'Proper permitting and inspections are obtained where and whenever required.',
  //           quality_work: ' We only work with the highest quality, and highest rated installers, providing you an excellent experience.',
  //         },
  //       community_solar: {
  //         proposal: {
  //           solar_prop: 'Your Community Solar Proposal',
  //           sd: 'System Details',
  //           ny: 'Brooklyn, New York',
  //           sal: 'Solar Array Location',
  //           ss: 'System Size',
  //           ac: 'Annual Consumption',
  //           etp: 'Equivalent Trees Planted',
  //           reduction: 'Reduction of car miles driven',
  //           co2: 'Tons of CO2 emissions avoided',
  //           cec: 'Clean Energy Collective (CEC) A pioneer of delivering clean power-generation through medium scale facilities that are collectively owned by participating utility customers, CEC makes clean energy ownership a smart financial decision bu minimizing the financial decision by minimizing the financial barrier to entry through community solar.',
  //           yr: 'Year Est.',
  //           mw: 'MW Deployed',
  //           cs: 'Cumulative Saving',
  //           as: 'Annual Saving',
  
  
  //         }
  //       }
  //       },
  //       'dashboard-layout': {
  //         'energy-advisor-sidebar': {
  //           title: 'Your Energy Advisor',
  //           return: '< Return to form',
  //           advisor_call: 'An Energy Advisor will call you to go over the details of your project.',
  //           num: '888-515-0326',
  //           nc: 'Next Call',
  //           at: 'at',
  //           sc: 'Scheduled Call',
  //           reschedule: 'Reschedule',
  //           tips: 'Tips & Info',
  //           ss: 'Savings Summary*',
  //           ar: 'Available Rebates',
  //           eb: 'New vs Old Energy Bill',
  //           condition: '*These values are estimates based on your address and monthly energy bill.',
  //           rm: 'Read more',
  //           na: 'Need Assistance?',
  //           help: 'We’re here to help. Speak with a friendly and dedicated Electrum Energy Advisor.',
  //           yea: 'Your Energy Advisor',
  //           rc: 'Reschedule Call',
  
  //           'manager-info': {
  //             line1: 'I\'m originally from',
  //             line2: 'I\'m looking forward to finding you the best energy solution.'
  //           },
  //           'tips-info': {},
  //           assessmentSolar: 'Your Live Solar',
  //           assessmentBattery: 'Your Energy Storage',
  //           loadShifting: 'Est. Annual Savings from Load Shifting',
  //           lifetimeSavings: 'Lifetime Savings'
  
  //         },
  //         'sidebar-left': {
  //           project: 'Project',
  //           referral: 'Referrals',
  //           bids: 'bids',
  //           docs: 'Docs',
  //           faq: 'FAQs',
  //           tnc: 'Terms, Conditions, and Privacy',
  //           home: 'Home',
  //           profile: 'Profile',
  //           so: 'Sign Out',
  //           md: 'My Dashboard',
  //           rf: 'Refer Friends',
  //           dash: 'Dashboard',
  
  //         }
  //       }
  
  //     },
  //     account: {
  //       signup: {
  //         title: 'Continue With Our Free Service',
  //         titleSolar: 'Continue With Our Free Service',
  //         titleBattery: 'Continue With Our Free Service',
  //         signup_form: {
  //           wlcm: 'Welcome Back',
  //           log_in: 'Log In',
  //           heading: 'Get Started',
  //           content: 'Sign up to start your solar journey with your own dedicated Energy Advisor.',
  //           name_placeholder: 'Full Name',
  //           fname_placeholder: 'First Name',
  //           lname_placeholder: 'Last Name',
  //           ph_num: 'Phone Number',
  //           name_error: 'First Name is required',
  //           email_required_error: 'Email is required',
  //           email_validation_error: 'Please enter a valid email address.',
  //           email_exists_error: 'Your email is already registered with Pick My Solar or an affiliate powered by Pick My Solar. Please try using a different email, or directly log into the affiliate website.',
  //           email_placeholder: 'Email Address',
  //           password_placeholder: 'Create Password',
  //           password_required: 'Password is required',
  //           password_validation: 'Password must be at least 6 characters',
  //           confirm_placeholder: 'Confirm Password',
  //           confirm_required: 'Confirm Password is required',
  //           confirm_validation: 'Passwords must match',
  //           email_exist: 'Your email is already registered with Pick My Solar or an affiliate powered by Pick My Solar. Please try using a different email, or directly log into the affiliate website.',
  //           signup: 'Sign Up',
  //           requried_field: 'Please fill in all required fields.',
  //           unknown_mail: 'Unknown email address, please try another email address associated with this account. If you need an account,',
  //           get_star: 'get started.',
  //           security_code: 'Send Security Code',
  //           verify: 'Verify Security Code',
  //           entr_code: 'Enter Security Code sent to your email or mobile number',
  //           entr_code2: 'Enter Security Code',
  //           valid_code: 'Valid Code is required.',
  //           otp_text: 'Incorrect security code. Please check and try again.',
  //           resend: 'Resend Security Code in',
  //           verify2: 'Verify & Proceed',
  //           waiting: 'Still waiting for your code?',
  //           resend2: 'Resend Code',
  //           resent: ' We’ve resent a new code to your phone.',
  //           reset: 'Reset your password',
  //           new_pwd: 'Enter your new password for your Electrum account',
  //           pwd_length: 'Password must be between 8 to 15 characters long',
  //           pwd_digit: 'Password must contain at least one digit(0-9)',
  //           pwd_case1: 'Password should contain at least one lowercase letter(a-z)',
  //           pwd_case2: 'Password should contain at least one uppercase letter(A-Z)',
  //           pwd_char: 'Password should contain at least one',
  //           char: 'special character',
  //           no_match: 'Password does not match',
  //           reset_pwd: 'Reset Password',
  //           try_again: 'Some error occured. Please try again !!!',
  //           success: 'Success!',
  //           pwd_change: 'Your password has successfully changed.',
  //           sign_in: 'Sign In',
  //           pwd_reset: 'Password reset is successfull. Please Login.',
  //           enter_pwd: 'Enter your new password for your account',
  //           char_limit: 'First name should be less than 35 characters.',
  //           invalid_phone: 'Phone number must be valid.',
  //           max_char: 'Maximum 100 characters are allowed for email.',
  //           pwd_req: 'Password requirements',
  //           least_char: 'At least 8 characters',
  //           char_case: 'Upper and lower case letters',
  //           char_must: 'Contains a number and a symbol',
  //           fgt_pwd: 'Forgot Password?',
  //           dashboard: 'Enter Dashboard',
  //           get_start: 'Get Started',
  //           opt_txt1: 'To enhance security you’ll need to reset your password to continue to your project.',
  //           opt_txt2: 'We have emailed you a security code.',
  //           otp_txt3: 'Enter the code below to continue and choose your new password.',
  //           new: 'New to the platform?',
  //           entr_email: 'Enter the email associated with your account and we’ll email you a security code to verify your identity.',
  //           email_id: 'Email ID',
  //           already_member: {
  //             already_there: 'A User with this email address already exists. Proceed to Login.',
  //             line1: 'Already a member?',
  //             line1_ext: 'Log in here'
  //           },
  //           term_conditions: {
  //             line1: 'By submitting, you agree to Electrum\'s',
  //             line_ext: 'terms, conditions, and privacy policy.'
  //           }
  //         },
  //         benefits: {
  //           img: 'https://assets.solar.com/partner_assets/signup-img.jpg',
  //           box1: {
  //             line1: 'Meet Your Energy Advisor',
  //             content: 'A dedicated online, expert advisor will be with you every step of the way, assuring you get the best system.'
  //           },
  //           box2: {
  //             line1: 'Remote System Design. On Us',
  //             content: 'After we finalize the details of your project, our design experts will accurately design and size a system on your roof.'
  //           },
  //           box3: {
  //             line1: 'Go Ahead. Take Your Pick.',
  //             content: 'Once your system is designed, we’ll have our network of top quality and vetted installers compete for your project. Go ahead. Take your pick and start saving.'
  //           }
  //         }
  //       },
  //       ev_signup: {
  //         title: 'Continue With Our Free Service',
  //         titleSolar: 'Continue With Our Free Service',
  //         titleBattery: 'Continue With Our Free Service',
  //         signup_form: {
  //           wlcm: 'Welcome Back',
  //           log_in: 'Log In',
  //           heading: 'Get Started',
  //           content: ' Sign up to start your home electrification journey',
  //           name_placeholder: 'Full Name',
  //           fname_placeholder: 'First Name',
  //           lname_placeholder: 'Last Name',
  //           ph_num: 'Phone Number',
  //           name_error: 'First Name is required',
  //           email_required_error: 'Email is required',
  //           email_validation_error: 'Please enter a valid email address.',
  //           email_exists_error: 'Your email is already registered with Pick My Solar or an affiliate powered by Pick My Solar. Please try using a different email, or directly log into the affiliate website.',
  //           email_placeholder: 'Email Address',
  //           password_placeholder: 'Create Password',
  //           password_required: 'Password is required',
  //           password_validation: 'Password must be at least 6 characters',
  //           confirm_placeholder: 'Confirm Password',
  //           confirm_required: 'Confirm Password is required',
  //           confirm_validation: 'Passwords must match',
  //           email_exist: 'Your email is already registered with Pick My Solar or an affiliate powered by Pick My Solar. Please try using a different email, or directly log into the affiliate website.',
  //           signup: 'Sign Up',
  //           requried_field: 'Please fill in all required fields.',
  //           unknown_mail: 'Unknown email address, please try another email address associated with this account. If you need an account,',
  //           get_star: 'get started.',
  //           security_code: 'Send Security Code',
  //           verify: 'Verify Security Code',
  //           entr_code: 'Enter Security Code sent to your email or mobile number',
  //           entr_code2: 'Enter Security Code',
  //           valid_code: 'Valid Code is required.',
  //           otp: ' Wrong OTP entered.',
  //           resend: 'Resend Security Code in',
  //           verify2: 'Verify & Proceed',
  //           waiting: 'Still waiting for your code?',
  //           resend2: 'Resend Code',
  //           resent: ' We’ve resent a new code to your phone.',
  //           reset: 'Reset your password',
  //           new_pwd: 'Enter your new password for your Electrum account',
  //           pwd_length: 'Password must be between 8 to 15 characters long',
  //           pwd_digit: 'Password must contain at least one digit(0-9)',
  //           pwd_case1: 'Password should contain at least one lowercase letter(a-z)',
  //           pwd_case2: 'Password should contain at least one uppercase letter(A-Z)',
  //           pwd_char: 'Password should contain at least one',
  //           char: 'special character',
  //           no_match: 'Password does not match',
  //           reset_pwd: 'Reset Password',
  //           try_again: 'Some error occured. Please try again !!!',
  //           success: 'Success!',
  //           pwd_change: 'Your password has successfully changed.',
  //           sign_in: 'Sign In',
  //           pwd_reset: 'Password reset is successfull. Please Login.',
  //           enter_pwd: 'Enter your new password for your account',
  //           char_limit: 'First name should be less than 35 characters.',
  //           invalid_phone: 'Phone number must be valid.',
  //           max_char: 'Maximum 100 characters are allowed for email.',
  //           pwd_req: 'Password requirements',
  //           least_char: 'At least 8 characters',
  //           char_case: 'Upper and lower case letters',
  //           char_must: 'Contains a number and a symbol',
  //           fgt_pwd: 'Forgot Password?',
  //           dashboard: 'Enter Dashboard',
  //           get_start: 'Get Started',
  //           opt_txt1: 'To enhance security you’ll need to reset your password to continue to your project.',
  //           opt_txt2: 'We have emailed you a security code.',
  //           otp_txt3: 'Enter the code below to continue and choose your new password.',
  //           new: 'New to the platform?',
  //           entr_email: 'Enter the email associated with your account and we’ll email you a security code to verify your identity.',
  //           email_id: 'Email ID',
  //           already_member: {
  //             already_there: 'A User with this email address already exists. Proceed to Login.',
  //             line1: 'Already a member?',
  //             line1_ext: 'Log in here'
  //           },
  //           term_conditions: {
  //             line1: 'By submitting, you agree to Electrum\'s',
  //             line_ext: 'terms, conditions, and privacy policy.'
  //           }
  //         },
  //         benefits: {
  //           img: 'https://assets.solar.com/partner_assets/signup-img.jpg',
  //           box1: {
  //             line1: 'EV Charging Assessment',
  //             content: 'Answer a few questions about your project to get the best estimate.'
  //           },
  //           box2: {
  //             line1: 'Instant Project Estimate',
  //             content: 'Know the expected cost of getting your home ready to charge your EV.'
  //           },
  //           box3: {
  //             line1: 'Meet Your Installer',
  //             content: 'Connect with a vetted and certified local installer to complete your project.'
  //           }
  //         }
  //       },
  //       battery_signup: {
  //         title: 'Continue With Our Free Service',
  //         titleSolar: 'Continue With Our Free Service',
  //         titleBattery: 'Continue With Our Free Service',
  //         signup_form: {
  //           wlcm: 'Welcome Back',
  //           log_in: 'Log In',
  //           heading: 'Get Started',
  //           content: 'Sign up to start your home electrification journey',
  //           name_placeholder: 'Full Name',
  //           fname_placeholder: 'First Name',
  //           lname_placeholder: 'Last Name',
  //           ph_num: 'Phone Number',
  //           name_error: 'First Name is required',
  //           email_required_error: 'Email is required',
  //           email_validation_error: 'Please enter a valid email address.',
  //           email_exists_error: 'Your email is already registered with Pick My Solar or an affiliate powered by Pick My Solar. Please try using a different email, or directly log into the affiliate website.',
  //           email_placeholder: 'Email Address',
  //           password_placeholder: 'Create Password',
  //           password_required: 'Password is required',
  //           password_validation: 'Password must be at least 6 characters',
  //           confirm_placeholder: 'Confirm Password',
  //           confirm_required: 'Confirm Password is required',
  //           confirm_validation: 'Passwords must match',
  //           email_exist: 'Your email is already registered with Pick My Solar or an affiliate powered by Pick My Solar. Please try using a different email, or directly log into the affiliate website.',
  //           signup: 'Sign Up',
  //           requried_field: 'Please fill in all required fields.',
  //           unknown_mail: 'Unknown email address, please try another email address associated with this account. If you need an account,',
  //           get_star: 'get started.',
  //           security_code: 'Send Security Code',
  //           verify: 'Verify Security Code',
  //           entr_code: 'Enter Security Code sent to your email or mobile number',
  //           entr_code2: 'Enter Security Code',
  //           valid_code: 'Valid Code is required.',
  //           otp: 'Incorrect security code. Please check and try again.',
  //           resend: 'Resend Security Code in',
  //           verify2: 'Verify & Proceed',
  //           waiting: 'Still waiting for your code?',
  //           resend2: 'Resend Code',
  //           resent: ' We’ve resent a new code to your phone.',
  //           reset: 'Reset your password',
  //           new_pwd: 'Enter your new password for your Electrum account',
  //           pwd_length: 'Password must be between 8 to 15 characters long',
  //           pwd_digit: 'Password must contain at least one digit(0-9)',
  //           pwd_case1: 'Password should contain at least one lowercase letter(a-z)',
  //           pwd_case2: 'Password should contain at least one uppercase letter(A-Z)',
  //           pwd_char: 'Password should contain at least one',
  //           char: 'special character',
  //           no_match: 'Password does not match',
  //           reset_pwd: 'Reset Password',
  //           try_again: 'Some error occured. Please try again !!!',
  //           success: 'Success!',
  //           pwd_change: 'Your password has successfully changed.',
  //           sign_in: 'Sign In',
  //           pwd_reset: 'Password reset is successfull. Please Login.',
  //           enter_pwd: 'Enter your new password for your account',
  //           char_limit: 'First name should be less than 35 characters.',
  //           invalid_phone: 'Phone number must be valid.',
  //           max_char: 'Maximum 100 characters are allowed for email.',
  //           pwd_req: 'Password requirements',
  //           least_char: 'At least 8 characters',
  //           char_case: 'Upper and lower case letters',
  //           char_must: 'Contains a number and a symbol',
  //           fgt_pwd: 'Forgot Password?',
  //           dashboard: 'Enter Dashboard',
  //           get_start: 'Get Started',
  //           opt_txt1: 'To enhance security you’ll need to reset your password to continue to your project.',
  //           opt_txt2: 'We have emailed you a security code.',
  //           otp_txt3: 'Enter the code below to continue and choose your new password.',
  //           new: 'New to the platform?',
  //           entr_email: 'Enter the email associated with your account and we’ll email you a security code to verify your identity.',
  //           email_id: 'Email ID',
  //           already_member: {
  //             already_there: 'A User with this email address already exists. Proceed to Login.',
  //             line1: 'Already a member?',
  //             line1_ext: 'Log in here'
  //           },
  //           term_conditions: {
  //             line1: 'By submitting, you agree to Electrum\'s',
  //             line_ext: 'terms, conditions, and privacy policy.'
  //           }
  //         },
  //         benefits: {
  //           imgBatt: 'https://assets.solar.com/partner_assets/battery-signup-inj.png',
  //           box1: {
  //             line1: 'Meet Your Energy Advisor',
  //             content: 'A dedicated online, expert advisor will be with you every step of the way, assuring you get the best system.'
  //           },
  //           box2: {
  //             line1: 'Remote System Design. On Us',
  //             content: 'After we finalize the details of your project, our design experts will accurately design and size a system on your roof.'
  //           },
  //           box3: {
  //             line1: 'Compare Offers',
  //             content: 'Once your system is designed, we\'ll pair you with a LG PRO Installer and help you evaluate their offers.'
  //           }
  //         }
  //       },
  //       reset_password: {
  //         title: 'Reset Password',
  //         content: 'Enter the email associated with your account and we’ll email you a link to reset your password.',
  //         'reset-link': 'Send Reset Link',
  //         link_sent: 'Link Sent',
  //         content1: 'Please access the link in the email address provided to complete the password reset process.',
  //         content2: 'Don’t see it in your inbox? Check your spam folder or give your Energy Advisor a call. ',
  //         password_placeholder: 'Create a new password',
  //         confirm_placeholder: 'Confirm new password',
  //         success: 'Success!',
  //         success_msg: 'Your password has successfully changed.',
  //         login: 'Login'
  //       },
  //       sign_in: {
  //         title: 'Welcome Back',
  //         line2: 'Sign In',
  //         email_placeholder: 'Email Address',
  //         password_placeholder: 'Password',
  //         forgot_password: 'Forgot Password?',
  //         enter_dashboard: 'Enter Dashboard',
  //         new_account: 'New to the platform?',
  //         new_account_ext: 'Sign up here'
  //       }
  //     },
  //     service_area: {
  //       title: 'You’re Outside Our Service Area',
  //       content: 'It looks like we do not operate in the region of the selected address. But don\'t worry, we\'ll let you know once our service becomes available in your area!'
  //     },
  //     footer: {
  //       terms_condition: 'Terms, Conditions, and Privacy Policy',
  //       terms: 'Terms and Conditions',
  //       privacy: 'Privacy Policy',
  //       support : 'Support',
  //       powered_by: 'Powered By',
  //       logo: 'https://assets.solar.com/partner_assets/electrum/electrum-logo.svg',
  //       type: 'el'
  //     }
  //   }
  // };  

  ngOnInit() {
    // let arr = [1,[2,3],[4,[5,6]]];
    // this.flatten(arr);
    // console.log(this.flattenedArray);
  }

  keys(json: any) {
    return Object.keys(json);
  }

  // flatten(object: any) {
  //   for (let each of object) {
  //     if(typeof each == 'object') {
  //       this.flatten(each);
  //     } else {
  //       this.flattenedArray.push(each);
  //     }
  //   }
  //   return this.flattenedArray;
  // }

}
