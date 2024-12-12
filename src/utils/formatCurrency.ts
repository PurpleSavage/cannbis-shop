export function formatCurrency(country:string,currency:string,price:number){
    const USDollar = new Intl.NumberFormat(country, {
        style: 'currency',
        currency: currency,
    });
    return USDollar.format(price)
}