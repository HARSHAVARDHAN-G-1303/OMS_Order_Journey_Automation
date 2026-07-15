export const buildPackShipmentXML = ({
 
    shipmentNo,
    shipmentLines,
    containers
 
}) => {
 
    const shipmentLinesXML = shipmentLines.map((line, index) => `
 
<ShipmentLine
    ItemID="${line.itemId}"
    Quantity="${line.quantity}"
    ShipmentLineNo="${index + 1}"
    ShortageQty="${line.shortageQty}"
    UnitOfMeasure="EA">
 
    <Extn
        ExtnShortageReason="${line.shortageReason}"/>
 
</ShipmentLine>
 
`).join("");
 
    const containersXML = containers.map((container) => {
 
        const selectedLine =
            shipmentLines[Number(container.shipmentLineNo) - 1];
 
        return `
 
<Container
    ContainerGrossWeight="${container.grossWeight}"
    ContainerGrossWeightUOM="KG"
    ContainerNo="${container.containerNo}"
    ContainerScm="${container.containerNo}"
    ContainerType="Case">
 
    <ContainerDetails>
 
        <ContainerDetail
            ItemID="${selectedLine.itemId}"
            Quantity="${container.quantity}">
 
            <ShipmentLine
                ShipmentLineNo="${container.shipmentLineNo}"/>
 
        </ContainerDetail>
 
    </ContainerDetails>
 
</Container>
 
`;
 
    }).join("");
 
    return `
 
<Shipment
    ShipmentNo="${shipmentNo}"
    TotalWeight=""
    xmlns:fn="http://www.w3.org/2005/xpath-functions"
    xmlns:soap-env="http://schemas.xmlsoap.org/soap/envelope/">
 
    <Extn
        InvoicePrinterName="printertest17"
        LabelPrinterName="printertest22"
        TotalContainer="${containers.length}"/>
 
    <ShipmentLines>
 
        ${shipmentLinesXML}
 
    </ShipmentLines>
 
    <Containers>
 
        ${containersXML}
 
    </Containers>
 
</Shipment>
 
`;
 
};
 