export function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
    if (parentModule) {
        throw new Error(`${moduleName} já foi carregado. Importe o CoreModule somente no AppModule.`);
    }
}
