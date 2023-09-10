<script setup lang="ts">
import NavbarDataJson from '~/contents/en/navbarData.json';
import TopDataJSON from '~/contents/en/topData.json';
import ServicesDataJson from '~/contents/en/servicesData.json';
import PortfolioDataJson from '~/contents/en/portfolioData.json';
import TimelineDataJson from '~/contents/en/timelineData.json';
import TeamDataJson from '~/contents/en/teamData.json';
import ClientsDataJson from '~/contents/en/clientsData.json';
import ContactDataJson from '~/contents/en/contactData.json';
import FooterDataJson from '~/contents/en/footerData.json';
</script>

<template>
  <main>
    <OrganismsNavbarSection :="NavbarDataJson" />
    <OrganismsTopSection :="TopDataJSON" />
    <OrganismsServicesSection :="ServicesDataJson" />
    <LazyOrganismsPortfolioSection :="PortfolioDataJson" />
    <LazyOrganismsTimelineSection :="TimelineDataJson" />
    <LazyOrganismsTeamSection :="TeamDataJson" />
    <LazyOrganismsClientsSection :="ClientsDataJson" />
    <LazyOrganismsContactSection :="ContactDataJson" />
    <LazyOrganismsFooterSection :="FooterDataJson" />
  </main>
</template>
