
export class DataShaper {
  shape(rawData: any[], view?: string): any[] {

    switch (view) {

      case 'customer':
        return rawData.map(item => ({
          id: item.id,
          label: `${item.name} - Breshna Naim`,
          value: item.value
        }));

      case 'warehouse':
        return rawData.map(item => ({
          id: item.id,
          name: `${item.name} - Breshna Naim`,
          internalCode: item.internalCode,
          location: item.warehouseLocation
        }));

      default:
        return rawData;
    }
  }
}