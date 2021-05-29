export interface ServiceOrder {
    cancellationDate?: string,
    cancellationReason?: string,
    category: string,
    completionDate: string,
    description: string,
    expectedCompletionDate: string,
    externalId: string,
    externalReference?: ExternalReference[],
    href: string,
    id: string,
    note?: Note[],
    notificationContact?: string,
    orderDate: string,
    orderRelationship?: ServiceOrderRelationship[],
    priority: string,
    relatedParty?: RelatedParty[],
    requestedCompletionDate: string,
    requestedStartDate: string,
    serviceOrderItem?: ServiceOrderItem[],
    startDate?: string,
    type?: string,
    state: ServiceOrderStateType
}

export interface ExternalReference {

}

export interface Note {
    author: string,
    date: string,
    id?: string,
    text: string
}

export interface ServiceOrderRelationship {
    href: string,
    id: string,
    relationshipType: string,
    referredType: string
}

export interface RelatedParty {
    referredType: string,
    name: string,
    href: string,
    id: string,
    baseType?: string,
    schemaLocation?: string,
    type?: string,
    role: string
}

export interface ServiceOrderItem {
    baseType?: string,
    schemaLocation?: string,
    type: string,
    action: OrderItemActionType,
    appointment?: AppointmentRef,
    id: string,
    quantity?: number,
    service: ServiceRefOrValue,
    serviceOrderItem?: ServiceOrderItem[],
    serviceOrderItemRelationship?: ServiceOrderItemRelationship[],
    state: ServiceOrderItemStateType,
    item?: string
}

export interface AppointmentRef {
    referredType: string,
    description: string,
    href: string,
    id: string
}

export interface ServiceRefOrValue {
    referredType?: string,
    name?: string,
    href?: string,
    id?: string,
    baseType?: string,
    schemaLocation?: string,
    type?: string,
    category?: string,
    description?: string,
    endDate?: string,
    hasStarted?: boolean,
    isBundle?: boolean,
    isServiceEnabled?: boolean,
    isStateful?: boolean,
    serviceDate?: string,
    serviceType?: string,
    startDate?: string,
    startMode?: string,
    feature?: Feature[],
    note?: Note[],
    place?: RelatedPlaceRefOrValue[],
    relatedEntity?: RelatedEntityRefOrValue[],
    relatedParty?: RelatedParty[],
    serviceCharacteristic?: Characteristic[],
    serviceOrderItem?: RelatedServiceOrderItem[],
    serviceRelationship?: ServiceRelationship[],
    serviceSpecification?: ServiceSpecificationRef,
    state?: ServiceStateType,
    supportingResource?: ResourceRef[],
    supportingService?: ServiceRefOrValue[]
}

export interface ServiceRelationship {
    relationshipType: string,
    service: ServiceRefOrValue,
    serviceRelationshipCharacteristic?: Characteristic[]
}

export interface ServiceSpecificationRef {
    referredType?: string,
    name: string,
    href: string,
    id: string,
    baseType?: string,
    schemaLocation?: string,
    type?: string,
    version: string,
    invariantUUID?: string,
    toscaModelURL?: string
}

export interface ServiceStateType {

}

export interface ResourceRef {
    referredType: string,
    name?: string,
    href: string,
    id: string,
    baseType?: string,
    schemaLocation?: string,
    type?: string
}

export interface ServiceOrderItemRelationship {
    baseType: string,
    schemaLocation: string,
    type: string,
    orderItem: ServiceOrderItemRef,
    relationshipType: string
}

export interface ServiceOrderItemRef {
    baseType: string,
    schemaLocation: string,
    type: string,
    referredType: string,
    itemId: string,
    serviceOrderHref: string,
    serviceOrderId: string
}

export interface ServiceOrderItemStateType {

}

export interface ServiceOrderStateType {

}

export interface Characteristic {
    baseType?: string,
    schemaLocation?: string,
    type?: string,
    characteristicRelationship?: CharacteristicRelationship[],
    id: string,
    name: string,
    value: any,
    valueType: string
}

export interface CharacteristicRelationship {
    id: string,
    relationshipType: string
}

export interface ExternalReference {
    externalReferenceType: string,
    name: string
}

export interface Feature {
    constraint?: ConstraintRef[],
    featureCharacteristic: Characteristic[],
    featureRelationship?: FeatureRelationship[],
    id: string,
    isBundle?: boolean,
    isEnabled: boolean,
    type: string,
    name: string
}

export interface ConstraintRef {
    referredType: string,
    href: string,
    id: string,
    name: string,
    version: string
}

export interface FeatureRelationship {
    id: string,
    name: string,
    relationshipType: string,
    validFor: number
}

export interface RelatedEntityRefOrValue {
    referredType: string,
    name: string,
    href: string,
    id: string,
    baseType: string,
    schemaLocation: string,
    type: string,
    role: string
}

export interface RelatedPlaceRefOrValue {
    referredType: string,
    name: string,
    href: string,
    id: string,
    baseType: string,
    schemaLocation: string,
    type: string,
    role: string
}

export interface RelatedServiceOrderItem {
    referredType: string,
    itemAction: OrderItemActionType,
    itemId: string,
    role: string,
    serviceOrderHref: string,
    serviceOrderId: string
}

export interface OrderItemActionType {

}