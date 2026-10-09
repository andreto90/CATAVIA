import { CountryData } from '../data/countriesData.ts';
import { getLocalizedCountryData } from '../data/countryTranslations.ts';
import { TFunction } from 'i18next';

export { getLocalizedCountryData };

export function getLocalizedCountry(country: CountryData, t: TFunction, lang: string) {
  const locCountry = getLocalizedCountryData(country, lang);
  return {
    name: locCountry.name,
    kicker: locCountry.editorialKicker,
    subtitle: locCountry.conceptSubtitle,
    desc: locCountry.narrativeLead
  };
}

