export const createOrderTemplate = ({
    orderNo,
    sellerOrg,
    currency,
    country,
    headerCharges,
    orderLines
}) => {
    const headerChargeXml = headerCharges.map((charge) => `
<HeaderCharge
ChargeAmount="${charge.chargeAmount}"
ChargeCategory="CHARGE"
ChargeName="${charge.chargeName}"/>
    `).join("");
    
    const orderLineXml = orderLines.map((line, index) => `
 
<OrderLine DeliveryMethod="SHP"
FulfillmentType="HD"
LevelOfService=""
OrderedQty="${line.orderedQty}"
PrimeLineNo="${index + 1}"
PromisedApptEndDate=""
PromisedApptStartDate=""
ReservationID=""
ShipNode=""
SubLineNo="1">
 
<Item
ItemDesc="${line.itemId}"
ItemID="${line.itemId}"
ItemShortDesc="${line.itemId}"
UnitOfMeasure="EA"/>
 
<LineCharges>
 
<LineCharge
ChargeCategory="DISCOUNT"
ChargeName=""
ChargePerLine="0">
 
<Extn
ExtnPromoApportionedLineDiscount="0.0000"/>
 
</LineCharge>
 
</LineCharges>
 
<LinePriceInfo
IsPriceLocked="Y"
UnitPrice="${line.unitPrice}"/>
 
<Extn
ExtnApportionedLineDiscount="0.0000"
ExtnApportionedLinePrice="${Number(line.unitPrice) * Number(line.orderedQty)}"
ExtnCancelledOnStockShortage="N"
ExtnConfirmationNumber=""
ExtnRuleId=""
PriceType="Null"
TaxAmount="0"
VatCode="KSSV00"
VatRate="0"/>
 
</OrderLine>
 
`).join("");
 
return `
 
<Order
CustomerPhoneNo="+0987654321"
DocumentType="0001"
EnterpriseCode="${sellerOrg}"
EntryType="Magento"
OrderDate="2026-05-07 12:25:37"
OrderNo="${orderNo}"
OrderType="home_delivery"
SellerOrganizationCode="${sellerOrg}"
SourcingClassification="ECOM">
 
<HeaderCharges>
 
${headerChargeXml}
 
</HeaderCharges>
 
<PaymentMethods>
 
<PaymentMethod
CreditCardNo="xxxxxxxxxxxx4242"
FirstName="Harsha"
LastName="Test"
PaymentReference1="aesdfgdhfjikfdsasdfgjhk"
PaymentReference2="checkout_com_upapi"
PaymentReference3="VISA CARD"
PaymentReference6="654321"
PaymentReference7="xxxxxxxxxxxx4242"
PaymentType="CREDITCARD">
 
<Extn
IsPaymentSettled="Y"/>
 
<PaymentDetailsList>
 
<PaymentDetails
ChargeType="CHARGE"
ProcessedAmount="150"/>
 
</PaymentDetailsList>
 
</PaymentMethod>
 
</PaymentMethods>
 
<PriceInfo
Currency="${currency}"/>
 
<PersonInfoShipTo
AddressID="0"
AddressLine1="AddressLine1"
AddressLine2="AddressLine2"
AddressLine4=""
AddressLine5=""
AddressLine6=""
City="City"
Country="${country}"
EMailID="harsha@test.com"
FirstName="Harsha"
LastName="Test"
MobilePhone="+96895743659"
ZipCode="121">
 
<Extn
ExtnAddress=""
ExtnAddressLine7=""
ExtnAddressLine8=""/>
 
</PersonInfoShipTo>
 
<PersonInfoBillTo
AddressID="0"
AddressLine1="AddressLine1"
AddressLine2="AddressLine2"
AddressLine4=""
AddressLine5=""
AddressLine6=""
City="City"
Country="${country}"
EMailID="harsha@test.com"
FirstName="Harsha"
LastName="Test"
MobilePhone="+96895743659"
ZipCode="121">
 
<Extn
ExtnAddress=""
ExtnAddressLine7=""
ExtnAddressLine8=""/>
 
</PersonInfoBillTo>
 
<OrderLines>
 
${orderLineXml}
</OrderLines>
 
<Extn
    ExtnIsAccruedPoints="N"
    ExtnPartialCancellationAllowed="Y"
    LanguageCode="EN"/>
 
</Order>
 
`;
 
};