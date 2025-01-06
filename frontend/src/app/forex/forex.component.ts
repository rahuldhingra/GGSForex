import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http'; // Import HttpClientModule and HttpClient here
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-forex',
  templateUrl: './forex.component.html',
  styleUrls: ['./forex.component.scss'],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule, // Directly include HttpClientModule here
  ],
})
export class ForexComponent implements OnInit {
  amountInTargetCurrency: number = 0;
  conversionRate: number | null = null;
  selectedLocation: string = '';
  forexQuantity: number = 0;
  amountInINR: number = 0;  // Declare amountInINR property
  conversionRateText: string = '';
  maximumCurrencyText: string = '';

  selectedProducts: string[] = [];
  products: string[] = [
    'Cash',
    'Travel Card'
  ];

  bookNow(form: NgForm) {
    this.router.navigate(['/travel-details']);
  }

  locations: string[] = [
    'Karnal'
  ];

  selectedCurrency: string = 'USD'; 
  currencies: { code: string, currencyName: string }[] = [
    { code: 'USD', currencyName: 'United States Dollar' },
    { code: 'EUR', currencyName: 'Euro' },
    { code: 'GBP', currencyName: 'British Pound' },
    { code: 'AUD', currencyName: 'Australian Dollar' },
    { code: 'CAD', currencyName: 'Canadian Dollar' },
    { code: 'CNY', currencyName: 'Chinese Yuan' },
    { code: 'JPY', currencyName: 'Japanese Yen' },
    { code: 'MXN', currencyName: 'Mexican Peso' },
    { code: 'TRY', currencyName: 'Turkish Lira' },
    { code: 'THB', currencyName: 'Thai Baht' },
    { code: 'RUB', currencyName: 'Russian Ruble' },
    { code: 'AED', currencyName: 'United Arab Emirates Dirham' },
    { code: 'CHF', currencyName: 'Swiss Franc' },
    { code: 'KRW', currencyName: 'South Korean Won' },
    { code: 'SGD', currencyName: 'Singapore Dollar' },
    { code: 'SAR', currencyName: 'Saudi Riyal' },
    { code: 'SEK', currencyName: 'Swedish Krona' },
    { code: 'NOK', currencyName: 'Norwegian Krone' },
    { code: 'PLN', currencyName: 'Polish Zloty' },
    { code: 'HUF', currencyName: 'Hungarian Forint' },
    { code: 'EGP', currencyName: 'Egyptian Pound' },
    { code: 'BRL', currencyName: 'Brazilian Real' },
    { code: 'ZAR', currencyName: 'South African Rand' },
    { code: 'IDR', currencyName: 'Indonesian Rupiah' },
    { code: 'MYR', currencyName: 'Malaysian Ringgit' },
    { code: 'ILS', currencyName: 'Israeli New Shekel' },
    { code: 'CZK', currencyName: 'Czech Koruna' },
    { code: 'DKK', currencyName: 'Danish Krone' },
    { code: 'RON', currencyName: 'Romanian Leu' },
    { code: 'ARS', currencyName: 'Argentine Peso' },
    { code: 'CLP', currencyName: 'Chilean Peso' },
    { code: 'PEN', currencyName: 'Peruvian Sol' },
    { code: 'PHP', currencyName: 'Philippine Peso' },
    { code: 'VND', currencyName: 'Vietnamese Dong' },
    { code: 'QAR', currencyName: 'Qatari Riyal' },
    { code: 'OMR', currencyName: 'Omani Rial' },
    { code: 'KWD', currencyName: 'Kuwaiti Dinar' },
    { code: 'KES', currencyName: 'Kenyan Shilling' },
    { code: 'NGN', currencyName: 'Nigerian Naira' },
    { code: 'BDT', currencyName: 'Bangladeshi Taka' },
    { code: 'NPR', currencyName: 'Nepalese Rupee' },
    { code: 'LKR', currencyName: 'Sri Lankan Rupee' },
    { code: 'PKR', currencyName: 'Pakistani Rupee' },
    { code: 'XCD', currencyName: 'East Caribbean Dollar' },
    { code: 'JMD', currencyName: 'Jamaican Dollar' },
    { code: 'TTD', currencyName: 'Trinidad and Tobago Dollar' },
    { code: 'BBD', currencyName: 'Barbadian Dollar' },
    { code: 'FJD', currencyName: 'Fijian Dollar' },
    { code: 'SCR', currencyName: 'Seychellois Rupee' },
    { code: 'MUR', currencyName: 'Mauritian Rupee' },
    { code: 'MAD', currencyName: 'Moroccan Dirham' },
    { code: 'KZT', currencyName: 'Kazakhstani Tenge' },
    { code: 'UZS', currencyName: 'Uzbekistani Som' },
    { code: 'GEL', currencyName: 'Georgian Lari' },
    { code: 'BHD', currencyName: 'Bahraini Dinar' },
    { code: 'MMK', currencyName: 'Myanmar Kyat' },
    { code: 'BGN', currencyName: 'Bulgarian Lev' },
    { code: 'HRK', currencyName: 'Croatian Kuna' },
    { code: 'ISK', currencyName: 'Icelandic Krona' },
    { code: 'UAH', currencyName: 'Ukrainian Hryvnia' },
    { code: 'LTL', currencyName: 'Lithuanian Litas' },
    { code: 'LVL', currencyName: 'Latvian Lats' },
    { code: 'MDL', currencyName: 'Moldovan Leu' },
    { code: 'BND', currencyName: 'Brunei Dollar' },
    { code: 'HKD', currencyName: 'Hong Kong Dollar' },
    { code: 'NZD', currencyName: 'New Zealand Dollar' },
    { code: 'TWD', currencyName: 'New Taiwan Dollar' },
    { code: 'MOP', currencyName: 'Macanese Pataca' },
    { code: 'BAM', currencyName: 'Bosnia-Herzegovina Convertible Mark' },
    { code: 'RSD', currencyName: 'Serbian Dinar' },
    { code: 'MKD', currencyName: 'Macedonian Denar' },
    { code: 'CUP', currencyName: 'Cuban Peso' },
    { code: 'DOP', currencyName: 'Dominican Peso' },
    { code: 'GTQ', currencyName: 'Guatemalan Quetzal' },
    { code: 'CRC', currencyName: 'Costa Rican Colón' },
    { code: 'PYG', currencyName: 'Paraguayan Guarani' },
    { code: 'UYU', currencyName: 'Uruguayan Peso' },
    { code: 'HNL', currencyName: 'Honduran Lempira' },
    { code: 'BOB', currencyName: 'Bolivian Boliviano' },
    { code: 'NAD', currencyName: 'Namibian Dollar' },
    { code: 'TZS', currencyName: 'Tanzanian Shilling' },
    { code: 'ETB', currencyName: 'Ethiopian Birr' },
    { code: 'ZMW', currencyName: 'Zambian Kwacha' },
    { code: 'MWK', currencyName: 'Malawian Kwacha' },
    { code: 'XOF', currencyName: 'West African CFA Franc' },
    { code: 'XAF', currencyName: 'Central African CFA Franc' },
    { code: 'PGK', currencyName: 'Papua New Guinean Kina' },
];

  countryCurrencyMap: { [key: string]: { code: string, currencyName: string } } = {
    'USA': { code: 'USD', currencyName: 'United States Dollar' },
    'Canada': { code: 'CAD', currencyName: 'Canadian Dollar' },
    'Australia': { code: 'AUD', currencyName: 'Australian Dollar' },
    'Japan': { code: 'JPY', currencyName: 'Japanese Yen' },
    'Germany': { code: 'EUR', currencyName: 'Euro' },
    'UK': { code: 'GBP', currencyName: 'British Pound Sterling' },
    'France': { code: 'EUR', currencyName: 'Euro' },
    'South Korea': { code: 'KRW', currencyName: 'South Korean Won' },
    'China': { code: 'CNY', currencyName: 'Chinese Yuan' },
    'Brazil': { code: 'BRL', currencyName: 'Brazilian Real' },
    'Mexico': { code: 'MXN', currencyName: 'Mexican Peso' },
    'Russia': { code: 'RUB', currencyName: 'Russian Ruble' },
    'South Africa': { code: 'ZAR', currencyName: 'South African Rand' },
    'Saudi Arabia': { code: 'SAR', currencyName: 'Saudi Riyal' },
    'Italy': { code: 'EUR', currencyName: 'Euro' },
    'Spain': { code: 'EUR', currencyName: 'Euro' },
    'Turkey': { code: 'TRY', currencyName: 'Turkish Lira' },
    'Sweden': { code: 'SEK', currencyName: 'Swedish Krona' },
    'Norway': { code: 'NOK', currencyName: 'Norwegian Krone' },
    'Denmark': { code: 'DKK', currencyName: 'Danish Krone' },
    'Finland': { code: 'EUR', currencyName: 'Euro' },
    'Switzerland': { code: 'CHF', currencyName: 'Swiss Franc' },
    'Netherlands': { code: 'EUR', currencyName: 'Euro' },
    'Belgium': { code: 'EUR', currencyName: 'Euro' },
    'Austria': { code: 'EUR', currencyName: 'Euro' },
    'Poland': { code: 'PLN', currencyName: 'Polish Zloty' },
    'Hungary': { code: 'HUF', currencyName: 'Hungarian Forint' },
    'Greece': { code: 'EUR', currencyName: 'Euro' },
    'Portugal': { code: 'EUR', currencyName: 'Euro' },
    'Romania': { code: 'RON', currencyName: 'Romanian Leu' },
    'Bulgaria': { code: 'BGN', currencyName: 'Bulgarian Lev' },
    'Slovakia': { code: 'SKK', currencyName: 'Slovak Koruna' },
    'Croatia': { code: 'HRK', currencyName: 'Croatian Kuna' },
    'Serbia': { code: 'RSD', currencyName: 'Serbian Dinar' },
    'Ukraine': { code: 'UAH', currencyName: 'Ukrainian Hryvnia' },
    'Kazakhstan': { code: 'KZT', currencyName: 'Kazakhstani Tenge' },
    'Uzbekistan': { code: 'UZS', currencyName: 'Uzbekistani Som' },
    'Azerbaijan': { code: 'AZN', currencyName: 'Azerbaijani Manat' },
    'Turkmenistan': { code: 'TMT', currencyName: 'Turkmenistan Manat' },
    'Armenia': { code: 'AMD', currencyName: 'Armenian Dram' },
    'Georgia': { code: 'GEL', currencyName: 'Georgian Lari' },
    'Moldova': { code: 'MDL', currencyName: 'Moldovan Leu' },
    'Tajikistan': { code: 'TJS', currencyName: 'Tajikistani Somoni' },
    'Kyrgyzstan': { code: 'KGS', currencyName: 'Kyrgyzstani Som' },
    'Kuwait': { code: 'KWD', currencyName: 'Kuwaiti Dinar' },
    'Qatar': { code: 'QAR', currencyName: 'Qatari Riyal' },
    'Bahrain': { code: 'BHD', currencyName: 'Bahraini Dinar' },
    'Oman': { code: 'OMR', currencyName: 'Omani Rial' },
    'UAE': { code: 'AED', currencyName: 'United Arab Emirates Dirham' },
    'Egypt': { code: 'EGP', currencyName: 'Egyptian Pound' },
    'Morocco': { code: 'MAD', currencyName: 'Moroccan Dirham' },
    'Tunisia': { code: 'TND', currencyName: 'Tunisian Dinar' },
    'Algeria': { code: 'DZD', currencyName: 'Algerian Dinar' },
    'Libya': { code: 'LYD', currencyName: 'Libyan Dinar' },
    'Jordan': { code: 'JOD', currencyName: 'Jordanian Dinar' },
    'Iraq': { code: 'IQD', currencyName: 'Iraqi Dinar' },
    'Syria': { code: 'SYP', currencyName: 'Syrian Pound' },
    'Lebanon': { code: 'LBP', currencyName: 'Lebanese Pound' },
    'Palestine': { code: 'ILS', currencyName: 'Israeli New Shekel' },
    'Israel': { code: 'ILS', currencyName: 'Israeli New Shekel' },
    'Iran': { code: 'IRR', currencyName: 'Iranian Rial' },
    'Afghanistan': { code: 'AFN', currencyName: 'Afghan Afghani' },
    'Pakistan': { code: 'PKR', currencyName: 'Pakistani Rupee' },
    'Sri Lanka': { code: 'LKR', currencyName: 'Sri Lankan Rupee' },
    'Bangladesh': { code: 'BDT', currencyName: 'Bangladeshi Taka' },
    'Myanmar': { code: 'MMK', currencyName: 'Burmese Kyat' },
    'Thailand': { code: 'THB', currencyName: 'Thai Baht' },
    'Vietnam': { code: 'VND', currencyName: 'Vietnamese Dong' },
    'Indonesia': { code: 'IDR', currencyName: 'Indonesian Rupiah' },
    'Philippines': { code: 'PHP', currencyName: 'Philippine Peso' },
    'Malaysia': { code: 'MYR', currencyName: 'Malaysian Ringgit' },
    'Singapore': { code: 'SGD', currencyName: 'Singapore Dollar' },
    'Brunei': { code: 'BND', currencyName: 'Brunei Dollar' },
    'New Zealand': { code: 'NZD', currencyName: 'New Zealand Dollar' },
    'Fiji': { code: 'FJD', currencyName: 'Fijian Dollar' },
    'Papua New Guinea': { code: 'PGK', currencyName: 'Papua New Guinean Kina' },
    'Solomon Islands': { code: 'SBD', currencyName: 'Solomon Islands Dollar' },
    'Vanuatu': { code: 'VUV', currencyName: 'Vanuatu Vatu' },
    'Samoa': { code: 'WST', currencyName: 'Samoan Tala' },
    'Tonga': { code: 'TOP', currencyName: 'Tongan Paʻanga' },
    'Kiribati': { code: 'AUD', currencyName: 'Australian Dollar' },
    'Tuvalu': { code: 'AUD', currencyName: 'Australian Dollar' },
    'Nauru': { code: 'AUD', currencyName: 'Australian Dollar' },
    'Palau': { code: 'USD', currencyName: 'United States Dollar' },
    'Micronesia': { code: 'USD', currencyName: 'United States Dollar' },
    'Honduras': { code: 'HNL', currencyName: 'Honduran Lempira' },
    'Nicaragua': { code: 'NIO', currencyName: 'Nicaraguan Córdoba' },
    'Costa Rica': { code: 'CRC', currencyName: 'Costa Rican Colón' },
    'Panama': { code: 'PAB', currencyName: 'Panamanian Balboa' },
    'El Salvador': { code: 'SVC', currencyName: 'Salvadoran Colón' },
    'Guatemala': { code: 'GTQ', currencyName: 'Guatemalan Quetzal' },
    'Belize': { code: 'BZD', currencyName: 'Belize Dollar' },
    'Guyana': { code: 'GYD', currencyName: 'Guyanese Dollar' },
    'Suriname': { code: 'SRD', currencyName: 'Surinamese Dollar' },
    'French Guiana': { code: 'EUR', currencyName: 'Euro' }
  };

  constructor(private router: Router, private http: HttpClient,private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.selectedLocation = this.locations[0];
    this.updateCurrencyForLocation(this.selectedLocation); 
  } 

  updateAmount(event: any) {
    // If the event is from the input field, get the quantity, otherwise use the current forexQuantity
    let quantity = event?.target?.value || this.forexQuantity;
    this.amountInINR = 0;
    this.conversionRateText = '';
    this.maximumCurrencyText = ''; // Reset the text initially
  
    // Ensure that there's a selected currency and quantity is greater than 0
    if (this.selectedCurrency && quantity > 0) {
      // Get conversion rate based on the selected currency
      this.getConversionRate(this.selectedCurrency).subscribe((response) => {
        const rateToINR: number = response.rates['INR']; // Conversion rate to INR
        const rateToUSD: number = response.rates['USD']; // Conversion rate to USD
  
        // Calculate the adjusted conversion rate (1.5% profit) and round to 2 decimal places
        let adjustedRateToINR = rateToINR * (1 + 1.5 / 100);
        adjustedRateToINR = Math.round(adjustedRateToINR * 1000) / 1000;
  
        // Set the conversion rate text (e.g., "1 EUR = 87.00 INR")
        this.conversionRateText = `1 ${this.selectedCurrency} = ${adjustedRateToINR} INR`;
  
        // Check if the quantity exceeds the maximum limit in terms of 3000 USD equivalent
        const maxLimitInUSD = 3000;
        const equivalentQuantityInUSD = quantity * rateToUSD; // Convert entered value to USD
        console.log(equivalentQuantityInUSD);
        if (equivalentQuantityInUSD > maxLimitInUSD) {
          // If the entered quantity exceeds the 3000 USD equivalent, show the warning message
          this.maximumCurrencyText = `Maximum limit is 3000 USD or equivalent.`;
          this.amountInINR = 0; // Do not calculate INR or other currency amounts if limit is exceeded
        } else {
          // Calculate amount in INR or other currencies, including the 1.5% profit
          this.amountInINR = quantity * rateToINR * (1 + 1.5 / 100);
          this.amountInINR = Math.round(this.amountInINR * 100) / 100; // Round to 2 decimal places
        }
  
        // Manually trigger change detection to ensure the view is updated immediately
        this.cdr.detectChanges();
      });
    }
  }  

  getConversionRate(currencyCode: string) {
    return this.http.get<{ rates: { [key: string]: number } }>(`https://api.exchangerate-api.com/v4/latest/${currencyCode}`);
  }

  onLocationChange() {
    this.updateCurrencyForLocation(this.selectedLocation);
  }

  updateCurrencyForLocation(location: string) {
    const currencyInfo = this.countryCurrencyMap[location];
    if (currencyInfo) {
      this.selectedCurrency = currencyInfo.code;
    }
  }

  selectProduct(product: string) {
    if (!this.selectedProducts.includes(product)) {
      this.selectedProducts.push(product);  
    }
  }

  removeProduct(product: string) {
    const index = this.selectedProducts.indexOf(product);
    if (index > -1) {
      this.selectedProducts.splice(index, 1);  
    }
  }
}
