(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('mathjs'), require('ol/ol.css'), require('ol/Collection'), require('ol/interaction/Draw'), require('ol/Feature'), require('ol/control/FullScreen'), require('ol/layer/Image'), require('ol/Map'), require('ol/interaction/Modify'), require('ol/interaction/MouseWheelZoom'), require('ol/control/OverviewMap'), require('ol/proj/Projection'), require('ol/control/ScaleLine'), require('ol/interaction/Select'), require('ol/interaction/Snap'), require('ol/interaction/Translate'), require('ol/source/ImageStatic'), require('ol/layer/Tile'), require('ol/source/TileImage'), require('ol/tilegrid/TileGrid'), require('ol/source/Vector'), require('ol/layer/Vector'), require('ol/View'), require('ol/interaction/DragPan'), require('ol/geom/Polygon'), require('ol/geom/Point'), require('ol/geom/LineString'), require('ol/geom/Circle'), require('ol/source/VectorEventType'), require('ol/extent'), require('dicomweb-client'), require('ol/Overlay'), require('ol/style/Style'), require('ol/style/Stroke'), require('ol/Observable'), require('ol/style/Icon'), require('ol/style/Fill'), require('ol/style/Circle'), require('ol/geom'), require('ol/sphere'), require('ol/style/Text')) :
  typeof define === 'function' && define.amd ? define(['exports', 'mathjs', 'ol/ol.css', 'ol/Collection', 'ol/interaction/Draw', 'ol/Feature', 'ol/control/FullScreen', 'ol/layer/Image', 'ol/Map', 'ol/interaction/Modify', 'ol/interaction/MouseWheelZoom', 'ol/control/OverviewMap', 'ol/proj/Projection', 'ol/control/ScaleLine', 'ol/interaction/Select', 'ol/interaction/Snap', 'ol/interaction/Translate', 'ol/source/ImageStatic', 'ol/layer/Tile', 'ol/source/TileImage', 'ol/tilegrid/TileGrid', 'ol/source/Vector', 'ol/layer/Vector', 'ol/View', 'ol/interaction/DragPan', 'ol/geom/Polygon', 'ol/geom/Point', 'ol/geom/LineString', 'ol/geom/Circle', 'ol/source/VectorEventType', 'ol/extent', 'dicomweb-client', 'ol/Overlay', 'ol/style/Style', 'ol/style/Stroke', 'ol/Observable', 'ol/style/Icon', 'ol/style/Fill', 'ol/style/Circle', 'ol/geom', 'ol/sphere', 'ol/style/Text'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.DICOMMicroscopyViewer = {}, global.mathjs, null, global.Collection, global.Draw, global.Feature, global.FullScreen, global.ImageLayer, global.Map, global.Modify, global.MouseWheelZoom, global.OverviewMap, global.Projection, global.ScaleLine, global.Select, global.Snap, global.Translate, global.Static, global.TileLayer, global.TileImage, global.TileGrid, global.VectorSource, global.VectorLayer, global.View, global.DragPan, global.PolygonGeometry, global.Point$1, global.LineString, global.CircleGeometry, global.VectorEventType, global.extent, global.DICOMwebClient, global.Overlay, global.Style, global.Stroke, global.Observable, global.Icon, global.Fill, global.Circle, null, global.sphere, global.Text));
}(this, (function (exports, mathjs, ol_css, Collection, Draw, Feature, FullScreen, ImageLayer, Map, Modify, MouseWheelZoom, OverviewMap, Projection, ScaleLine, Select, Snap, Translate, Static, TileLayer, TileImage, TileGrid, VectorSource, VectorLayer, View, DragPan, PolygonGeometry, Point$1, LineString, CircleGeometry, VectorEventType, extent, DICOMwebClient, Overlay, Style, Stroke, Observable, Icon, Fill, Circle, geom, sphere, Text) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var Collection__default = /*#__PURE__*/_interopDefaultLegacy(Collection);
  var Draw__default = /*#__PURE__*/_interopDefaultLegacy(Draw);
  var Feature__default = /*#__PURE__*/_interopDefaultLegacy(Feature);
  var FullScreen__default = /*#__PURE__*/_interopDefaultLegacy(FullScreen);
  var ImageLayer__default = /*#__PURE__*/_interopDefaultLegacy(ImageLayer);
  var Map__default = /*#__PURE__*/_interopDefaultLegacy(Map);
  var Modify__default = /*#__PURE__*/_interopDefaultLegacy(Modify);
  var MouseWheelZoom__default = /*#__PURE__*/_interopDefaultLegacy(MouseWheelZoom);
  var OverviewMap__default = /*#__PURE__*/_interopDefaultLegacy(OverviewMap);
  var Projection__default = /*#__PURE__*/_interopDefaultLegacy(Projection);
  var ScaleLine__default = /*#__PURE__*/_interopDefaultLegacy(ScaleLine);
  var Select__default = /*#__PURE__*/_interopDefaultLegacy(Select);
  var Snap__default = /*#__PURE__*/_interopDefaultLegacy(Snap);
  var Translate__default = /*#__PURE__*/_interopDefaultLegacy(Translate);
  var Static__default = /*#__PURE__*/_interopDefaultLegacy(Static);
  var TileLayer__default = /*#__PURE__*/_interopDefaultLegacy(TileLayer);
  var TileImage__default = /*#__PURE__*/_interopDefaultLegacy(TileImage);
  var TileGrid__default = /*#__PURE__*/_interopDefaultLegacy(TileGrid);
  var VectorSource__default = /*#__PURE__*/_interopDefaultLegacy(VectorSource);
  var VectorLayer__default = /*#__PURE__*/_interopDefaultLegacy(VectorLayer);
  var View__default = /*#__PURE__*/_interopDefaultLegacy(View);
  var DragPan__default = /*#__PURE__*/_interopDefaultLegacy(DragPan);
  var PolygonGeometry__default = /*#__PURE__*/_interopDefaultLegacy(PolygonGeometry);
  var Point__default = /*#__PURE__*/_interopDefaultLegacy(Point$1);
  var LineString__default = /*#__PURE__*/_interopDefaultLegacy(LineString);
  var CircleGeometry__default = /*#__PURE__*/_interopDefaultLegacy(CircleGeometry);
  var VectorEventType__default = /*#__PURE__*/_interopDefaultLegacy(VectorEventType);
  var Overlay__default = /*#__PURE__*/_interopDefaultLegacy(Overlay);
  var Style__default = /*#__PURE__*/_interopDefaultLegacy(Style);
  var Stroke__default = /*#__PURE__*/_interopDefaultLegacy(Stroke);
  var Icon__default = /*#__PURE__*/_interopDefaultLegacy(Icon);
  var Fill__default = /*#__PURE__*/_interopDefaultLegacy(Fill);
  var Circle__default = /*#__PURE__*/_interopDefaultLegacy(Circle);
  var Text__default = /*#__PURE__*/_interopDefaultLegacy(Text);

  const PROJECT_NAME = 'dicommicroscopyviewer';
  /**
   *  Enumerates custom events for dicom-microscopy-viewer. Events are captured,
   *  normalized, and re-triggered with a `dicommicroscopyviewer` prefix.
   *  This allows handling of events consistently across different browsers.
   *
   *  @enum {String}
   *  @memberof dicom-microscopy-viewer
   *  @readonly
   */

  const EVENTS = {
    ROI_ADDED: `${PROJECT_NAME}_roi_added`,
    ROI_REMOVED: `${PROJECT_NAME}_roi_removed`,
    ROI_DRAWN: `${PROJECT_NAME}_roi_drawn`,
    ROI_SELECTED: `${PROJECT_NAME}_roi_selected`,
    ROI_MODIFIED: `${PROJECT_NAME}_roi_modified`,
    MOVE_STARTED: `${PROJECT_NAME}_move_started`,
    MOVE_ENDED: `${PROJECT_NAME}_move_ended`
  };

  /** Maps DICOM Attribute Tag to Keyword.
   *
   * @constant {Object}
   * @private
   */
  const tagToKeyword = {
    '00000000': 'CommandGroupLength',
    '00000001': 'CommandLengthToEnd',
    '00000002': 'AffectedSOPClassUID',
    '00000003': 'RequestedSOPClassUID',
    '00000010': 'CommandRecognitionCode',
    '00000100': 'CommandField',
    '00000110': 'MessageID',
    '00000120': 'MessageIDBeingRespondedTo',
    '00000200': 'Initiator',
    '00000300': 'Receiver',
    '00000400': 'FindLocation',
    '00000600': 'MoveDestination',
    '00000700': 'Priority',
    '00000800': 'CommandDataSetType',
    '00000850': 'NumberOfMatches',
    '00000860': 'ResponseSequenceNumber',
    '00000900': 'Status',
    '00000901': 'OffendingElement',
    '00000902': 'ErrorComment',
    '00000903': 'ErrorID',
    '00001000': 'AffectedSOPInstanceUID',
    '00001001': 'RequestedSOPInstanceUID',
    '00001002': 'EventTypeID',
    '00001005': 'AttributeIdentifierList',
    '00001008': 'ActionTypeID',
    '00001020': 'NumberOfRemainingSuboperations',
    '00001021': 'NumberOfCompletedSuboperations',
    '00001022': 'NumberOfFailedSuboperations',
    '00001023': 'NumberOfWarningSuboperations',
    '00001030': 'MoveOriginatorApplicationEntityTitle',
    '00001031': 'MoveOriginatorMessageID',
    '00004000': 'DialogReceiver',
    '00004010': 'TerminalType',
    '00005010': 'MessageSetID',
    '00005020': 'EndMessageID',
    '00005110': 'DisplayFormat',
    '00005120': 'PagePositionID',
    '00005130': 'TextFormatID',
    '00005140': 'NormalReverse',
    '00005150': 'AddGrayScale',
    '00005160': 'Borders',
    '00005170': 'Copies',
    '00005180': 'CommandMagnificationType',
    '00005190': 'Erase',
    '000051A0': 'Print',
    '000051B0': 'Overlays',
    '00020000': 'FileMetaInformationGroupLength',
    '00020001': 'FileMetaInformationVersion',
    '00020002': 'MediaStorageSOPClassUID',
    '00020003': 'MediaStorageSOPInstanceUID',
    '00020010': 'TransferSyntaxUID',
    '00020012': 'ImplementationClassUID',
    '00020013': 'ImplementationVersionName',
    '00020016': 'SourceApplicationEntityTitle',
    '00020017': 'SendingApplicationEntityTitle',
    '00020018': 'ReceivingApplicationEntityTitle',
    '00020100': 'PrivateInformationCreatorUID',
    '00020102': 'PrivateInformation',
    '00041130': 'FileSetID',
    '00041141': 'FileSetDescriptorFileID',
    '00041142': 'SpecificCharacterSetOfFileSetDescriptorFile',
    '00041200': 'OffsetOfTheFirstDirectoryRecordOfTheRootDirectoryEntity',
    '00041202': 'OffsetOfTheLastDirectoryRecordOfTheRootDirectoryEntity',
    '00041212': 'FileSetConsistencyFlag',
    '00041220': 'DirectoryRecordSequence',
    '00041400': 'OffsetOfTheNextDirectoryRecord',
    '00041410': 'RecordInUseFlag',
    '00041420': 'OffsetOfReferencedLowerLevelDirectoryEntity',
    '00041430': 'DirectoryRecordType',
    '00041432': 'PrivateRecordUID',
    '00041500': 'ReferencedFileID',
    '00041504': 'MRDRDirectoryRecordOffset',
    '00041510': 'ReferencedSOPClassUIDInFile',
    '00041511': 'ReferencedSOPInstanceUIDInFile',
    '00041512': 'ReferencedTransferSyntaxUIDInFile',
    '0004151A': 'ReferencedRelatedGeneralSOPClassUIDInFile',
    '00041600': 'NumberOfReferences',
    '00080001': 'LengthToEnd',
    '00080005': 'SpecificCharacterSet',
    '00080006': 'LanguageCodeSequence',
    '00080008': 'ImageType',
    '00080010': 'RecognitionCode',
    '00080012': 'InstanceCreationDate',
    '00080013': 'InstanceCreationTime',
    '00080014': 'InstanceCreatorUID',
    '00080015': 'InstanceCoercionDateTime',
    '00080016': 'SOPClassUID',
    '00080018': 'SOPInstanceUID',
    '0008001A': 'RelatedGeneralSOPClassUID',
    '0008001B': 'OriginalSpecializedSOPClassUID',
    '00080020': 'StudyDate',
    '00080021': 'SeriesDate',
    '00080022': 'AcquisitionDate',
    '00080023': 'ContentDate',
    '00080024': 'OverlayDate',
    '00080025': 'CurveDate',
    '0008002A': 'AcquisitionDateTime',
    '00080030': 'StudyTime',
    '00080031': 'SeriesTime',
    '00080032': 'AcquisitionTime',
    '00080033': 'ContentTime',
    '00080034': 'OverlayTime',
    '00080035': 'CurveTime',
    '00080040': 'DataSetType',
    '00080041': 'DataSetSubtype',
    '00080042': 'NuclearMedicineSeriesType',
    '00080050': 'AccessionNumber',
    '00080051': 'IssuerOfAccessionNumberSequence',
    '00080052': 'QueryRetrieveLevel',
    '00080053': 'QueryRetrieveView',
    '00080054': 'RetrieveAETitle',
    '00080055': 'StationAETitle',
    '00080056': 'InstanceAvailability',
    '00080058': 'FailedSOPInstanceUIDList',
    '00080060': 'Modality',
    '00080061': 'ModalitiesInStudy',
    '00080062': 'SOPClassesInStudy',
    '00080063': 'AnatomicRegionsInStudyCodeSequence',
    '00080064': 'ConversionType',
    '00080068': 'PresentationIntentType',
    '00080070': 'Manufacturer',
    '00080080': 'InstitutionName',
    '00080081': 'InstitutionAddress',
    '00080082': 'InstitutionCodeSequence',
    '00080090': 'ReferringPhysicianName',
    '00080092': 'ReferringPhysicianAddress',
    '00080094': 'ReferringPhysicianTelephoneNumbers',
    '00080096': 'ReferringPhysicianIdentificationSequence',
    '0008009C': 'ConsultingPhysicianName',
    '0008009D': 'ConsultingPhysicianIdentificationSequence',
    '00080100': 'CodeValue',
    '00080101': 'ExtendedCodeValue',
    '00080102': 'CodingSchemeDesignator',
    '00080103': 'CodingSchemeVersion',
    '00080104': 'CodeMeaning',
    '00080105': 'MappingResource',
    '00080106': 'ContextGroupVersion',
    '00080107': 'ContextGroupLocalVersion',
    '00080108': 'ExtendedCodeMeaning',
    '00080109': 'CodingSchemeResourcesSequence',
    '0008010A': 'CodingSchemeURLType',
    '0008010B': 'ContextGroupExtensionFlag',
    '0008010C': 'CodingSchemeUID',
    '0008010D': 'ContextGroupExtensionCreatorUID',
    '0008010E': 'CodingSchemeURL',
    '0008010F': 'ContextIdentifier',
    '00080110': 'CodingSchemeIdentificationSequence',
    '00080112': 'CodingSchemeRegistry',
    '00080114': 'CodingSchemeExternalID',
    '00080115': 'CodingSchemeName',
    '00080116': 'CodingSchemeResponsibleOrganization',
    '00080117': 'ContextUID',
    '00080118': 'MappingResourceUID',
    '00080119': 'LongCodeValue',
    '00080120': 'URNCodeValue',
    '00080121': 'EquivalentCodeSequence',
    '00080122': 'MappingResourceName',
    '00080123': 'ContextGroupIdentificationSequence',
    '00080124': 'MappingResourceIdentificationSequence',
    '00080201': 'TimezoneOffsetFromUTC',
    '00080220': 'ResponsibleGroupCodeSequence',
    '00080221': 'EquipmentModality',
    '00080222': 'ManufacturerRelatedModelGroup',
    '00080300': 'PrivateDataElementCharacteristicsSequence',
    '00080301': 'PrivateGroupReference',
    '00080302': 'PrivateCreatorReference',
    '00080303': 'BlockIdentifyingInformationStatus',
    '00080304': 'NonidentifyingPrivateElements',
    '00080305': 'DeidentificationActionSequence',
    '00080306': 'IdentifyingPrivateElements',
    '00080307': 'DeidentificationAction',
    '00080308': 'PrivateDataElement',
    '00080309': 'PrivateDataElementValueMultiplicity',
    '0008030A': 'PrivateDataElementValueRepresentation',
    '0008030B': 'PrivateDataElementNumberOfItems',
    '0008030C': 'PrivateDataElementName',
    '0008030D': 'PrivateDataElementKeyword',
    '0008030E': 'PrivateDataElementDescription',
    '0008030F': 'PrivateDataElementEncoding',
    '00080310': 'PrivateDataElementDefinitionSequence',
    '00081000': 'NetworkID',
    '00081010': 'StationName',
    '00081030': 'StudyDescription',
    '00081032': 'ProcedureCodeSequence',
    '0008103E': 'SeriesDescription',
    '0008103F': 'SeriesDescriptionCodeSequence',
    '00081040': 'InstitutionalDepartmentName',
    '00081048': 'PhysiciansOfRecord',
    '00081049': 'PhysiciansOfRecordIdentificationSequence',
    '00081050': 'PerformingPhysicianName',
    '00081052': 'PerformingPhysicianIdentificationSequence',
    '00081060': 'NameOfPhysiciansReadingStudy',
    '00081062': 'PhysiciansReadingStudyIdentificationSequence',
    '00081070': 'OperatorsName',
    '00081072': 'OperatorIdentificationSequence',
    '00081080': 'AdmittingDiagnosesDescription',
    '00081084': 'AdmittingDiagnosesCodeSequence',
    '00081090': 'ManufacturerModelName',
    '00081100': 'ReferencedResultsSequence',
    '00081110': 'ReferencedStudySequence',
    '00081111': 'ReferencedPerformedProcedureStepSequence',
    '00081115': 'ReferencedSeriesSequence',
    '00081120': 'ReferencedPatientSequence',
    '00081125': 'ReferencedVisitSequence',
    '00081130': 'ReferencedOverlaySequence',
    '00081134': 'ReferencedStereometricInstanceSequence',
    '0008113A': 'ReferencedWaveformSequence',
    '00081140': 'ReferencedImageSequence',
    '00081145': 'ReferencedCurveSequence',
    '0008114A': 'ReferencedInstanceSequence',
    '0008114B': 'ReferencedRealWorldValueMappingInstanceSequence',
    '00081150': 'ReferencedSOPClassUID',
    '00081155': 'ReferencedSOPInstanceUID',
    '00081156': 'DefinitionSourceSequence',
    '0008115A': 'SOPClassesSupported',
    '00081160': 'ReferencedFrameNumber',
    '00081161': 'SimpleFrameList',
    '00081162': 'CalculatedFrameList',
    '00081163': 'TimeRange',
    '00081164': 'FrameExtractionSequence',
    '00081167': 'MultiFrameSourceSOPInstanceUID',
    '00081190': 'RetrieveURL',
    '00081195': 'TransactionUID',
    '00081196': 'WarningReason',
    '00081197': 'FailureReason',
    '00081198': 'FailedSOPSequence',
    '00081199': 'ReferencedSOPSequence',
    '0008119A': 'OtherFailuresSequence',
    '00081200': 'StudiesContainingOtherReferencedInstancesSequence',
    '00081250': 'RelatedSeriesSequence',
    '00082110': 'LossyImageCompressionRetired',
    '00082111': 'DerivationDescription',
    '00082112': 'SourceImageSequence',
    '00082120': 'StageName',
    '00082122': 'StageNumber',
    '00082124': 'NumberOfStages',
    '00082127': 'ViewName',
    '00082128': 'ViewNumber',
    '00082129': 'NumberOfEventTimers',
    '0008212A': 'NumberOfViewsInStage',
    '00082130': 'EventElapsedTimes',
    '00082132': 'EventTimerNames',
    '00082133': 'EventTimerSequence',
    '00082134': 'EventTimeOffset',
    '00082135': 'EventCodeSequence',
    '00082142': 'StartTrim',
    '00082143': 'StopTrim',
    '00082144': 'RecommendedDisplayFrameRate',
    '00082200': 'TransducerPosition',
    '00082204': 'TransducerOrientation',
    '00082208': 'AnatomicStructure',
    '00082218': 'AnatomicRegionSequence',
    '00082220': 'AnatomicRegionModifierSequence',
    '00082228': 'PrimaryAnatomicStructureSequence',
    '00082229': 'AnatomicStructureSpaceOrRegionSequence',
    '00082230': 'PrimaryAnatomicStructureModifierSequence',
    '00082240': 'TransducerPositionSequence',
    '00082242': 'TransducerPositionModifierSequence',
    '00082244': 'TransducerOrientationSequence',
    '00082246': 'TransducerOrientationModifierSequence',
    '00082251': 'AnatomicStructureSpaceOrRegionCodeSequenceTrial',
    '00082253': 'AnatomicPortalOfEntranceCodeSequenceTrial',
    '00082255': 'AnatomicApproachDirectionCodeSequenceTrial',
    '00082256': 'AnatomicPerspectiveDescriptionTrial',
    '00082257': 'AnatomicPerspectiveCodeSequenceTrial',
    '00082258': 'AnatomicLocationOfExaminingInstrumentDescriptionTrial',
    '00082259': 'AnatomicLocationOfExaminingInstrumentCodeSequenceTrial',
    '0008225A': 'AnatomicStructureSpaceOrRegionModifierCodeSequenceTrial',
    '0008225C': 'OnAxisBackgroundAnatomicStructureCodeSequenceTrial',
    '00083001': 'AlternateRepresentationSequence',
    '00083010': 'IrradiationEventUID',
    '00083011': 'SourceIrradiationEventSequence',
    '00083012': 'RadiopharmaceuticalAdministrationEventUID',
    '00084000': 'IdentifyingComments',
    '00089007': 'FrameType',
    '00089092': 'ReferencedImageEvidenceSequence',
    '00089121': 'ReferencedRawDataSequence',
    '00089123': 'CreatorVersionUID',
    '00089124': 'DerivationImageSequence',
    '00089154': 'SourceImageEvidenceSequence',
    '00089205': 'PixelPresentation',
    '00089206': 'VolumetricProperties',
    '00089207': 'VolumeBasedCalculationTechnique',
    '00089208': 'ComplexImageComponent',
    '00089209': 'AcquisitionContrast',
    '00089215': 'DerivationCodeSequence',
    '00089237': 'ReferencedPresentationStateSequence',
    '00089410': 'ReferencedOtherPlaneSequence',
    '00089458': 'FrameDisplaySequence',
    '00089459': 'RecommendedDisplayFrameRateInFloat',
    '00089460': 'SkipFrameRangeFlag',
    '00100010': 'PatientName',
    '00100020': 'PatientID',
    '00100021': 'IssuerOfPatientID',
    '00100022': 'TypeOfPatientID',
    '00100024': 'IssuerOfPatientIDQualifiersSequence',
    '00100026': 'SourcePatientGroupIdentificationSequence',
    '00100027': 'GroupOfPatientsIdentificationSequence',
    '00100028': 'SubjectRelativePositionInImage',
    '00100030': 'PatientBirthDate',
    '00100032': 'PatientBirthTime',
    '00100033': 'PatientBirthDateInAlternativeCalendar',
    '00100034': 'PatientDeathDateInAlternativeCalendar',
    '00100035': 'PatientAlternativeCalendar',
    '00100040': 'PatientSex',
    '00100050': 'PatientInsurancePlanCodeSequence',
    '00100101': 'PatientPrimaryLanguageCodeSequence',
    '00100102': 'PatientPrimaryLanguageModifierCodeSequence',
    '00100200': 'QualityControlSubject',
    '00100201': 'QualityControlSubjectTypeCodeSequence',
    '00100212': 'StrainDescription',
    '00100213': 'StrainNomenclature',
    '00100214': 'StrainStockNumber',
    '00100215': 'StrainSourceRegistryCodeSequence',
    '00100216': 'StrainStockSequence',
    '00100217': 'StrainSource',
    '00100218': 'StrainAdditionalInformation',
    '00100219': 'StrainCodeSequence',
    '00100221': 'GeneticModificationsSequence',
    '00100222': 'GeneticModificationsDescription',
    '00100223': 'GeneticModificationsNomenclature',
    '00100229': 'GeneticModificationsCodeSequence',
    '00101000': 'OtherPatientIDs',
    '00101001': 'OtherPatientNames',
    '00101002': 'OtherPatientIDsSequence',
    '00101005': 'PatientBirthName',
    '00101010': 'PatientAge',
    '00101020': 'PatientSize',
    '00101021': 'PatientSizeCodeSequence',
    '00101022': 'PatientBodyMassIndex',
    '00101023': 'MeasuredAPDimension',
    '00101024': 'MeasuredLateralDimension',
    '00101030': 'PatientWeight',
    '00101040': 'PatientAddress',
    '00101050': 'InsurancePlanIdentification',
    '00101060': 'PatientMotherBirthName',
    '00101080': 'MilitaryRank',
    '00101081': 'BranchOfService',
    '00101090': 'MedicalRecordLocator',
    '00101100': 'ReferencedPatientPhotoSequence',
    '00102000': 'MedicalAlerts',
    '00102110': 'Allergies',
    '00102150': 'CountryOfResidence',
    '00102152': 'RegionOfResidence',
    '00102154': 'PatientTelephoneNumbers',
    '00102155': 'PatientTelecomInformation',
    '00102160': 'EthnicGroup',
    '00102180': 'Occupation',
    '001021A0': 'SmokingStatus',
    '001021B0': 'AdditionalPatientHistory',
    '001021C0': 'PregnancyStatus',
    '001021D0': 'LastMenstrualDate',
    '001021F0': 'PatientReligiousPreference',
    '00102201': 'PatientSpeciesDescription',
    '00102202': 'PatientSpeciesCodeSequence',
    '00102203': 'PatientSexNeutered',
    '00102210': 'AnatomicalOrientationType',
    '00102292': 'PatientBreedDescription',
    '00102293': 'PatientBreedCodeSequence',
    '00102294': 'BreedRegistrationSequence',
    '00102295': 'BreedRegistrationNumber',
    '00102296': 'BreedRegistryCodeSequence',
    '00102297': 'ResponsiblePerson',
    '00102298': 'ResponsiblePersonRole',
    '00102299': 'ResponsibleOrganization',
    '00104000': 'PatientComments',
    '00109431': 'ExaminedBodyThickness',
    '00120010': 'ClinicalTrialSponsorName',
    '00120020': 'ClinicalTrialProtocolID',
    '00120021': 'ClinicalTrialProtocolName',
    '00120030': 'ClinicalTrialSiteID',
    '00120031': 'ClinicalTrialSiteName',
    '00120040': 'ClinicalTrialSubjectID',
    '00120042': 'ClinicalTrialSubjectReadingID',
    '00120050': 'ClinicalTrialTimePointID',
    '00120051': 'ClinicalTrialTimePointDescription',
    '00120052': 'LongitudinalTemporalOffsetFromEvent',
    '00120053': 'LongitudinalTemporalEventType',
    '00120060': 'ClinicalTrialCoordinatingCenterName',
    '00120062': 'PatientIdentityRemoved',
    '00120063': 'DeidentificationMethod',
    '00120064': 'DeidentificationMethodCodeSequence',
    '00120071': 'ClinicalTrialSeriesID',
    '00120072': 'ClinicalTrialSeriesDescription',
    '00120081': 'ClinicalTrialProtocolEthicsCommitteeName',
    '00120082': 'ClinicalTrialProtocolEthicsCommitteeApprovalNumber',
    '00120083': 'ConsentForClinicalTrialUseSequence',
    '00120084': 'DistributionType',
    '00120085': 'ConsentForDistributionFlag',
    '00120086': 'EthicsCommitteeApprovalEffectivenessStartDate',
    '00120087': 'EthicsCommitteeApprovalEffectivenessEndDate',
    '00140023': 'CADFileFormat',
    '00140024': 'ComponentReferenceSystem',
    '00140025': 'ComponentManufacturingProcedure',
    '00140028': 'ComponentManufacturer',
    '00140030': 'MaterialThickness',
    '00140032': 'MaterialPipeDiameter',
    '00140034': 'MaterialIsolationDiameter',
    '00140042': 'MaterialGrade',
    '00140044': 'MaterialPropertiesDescription',
    '00140045': 'MaterialPropertiesFileFormatRetired',
    '00140046': 'MaterialNotes',
    '00140050': 'ComponentShape',
    '00140052': 'CurvatureType',
    '00140054': 'OuterDiameter',
    '00140056': 'InnerDiameter',
    '00140100': 'ComponentWelderIDs',
    '00140101': 'SecondaryApprovalStatus',
    '00140102': 'SecondaryReviewDate',
    '00140103': 'SecondaryReviewTime',
    '00140104': 'SecondaryReviewerName',
    '00140105': 'RepairID',
    '00140106': 'MultipleComponentApprovalSequence',
    '00140107': 'OtherApprovalStatus',
    '00140108': 'OtherSecondaryApprovalStatus',
    '00141010': 'ActualEnvironmentalConditions',
    '00141020': 'ExpiryDate',
    '00141040': 'EnvironmentalConditions',
    '00142002': 'EvaluatorSequence',
    '00142004': 'EvaluatorNumber',
    '00142006': 'EvaluatorName',
    '00142008': 'EvaluationAttempt',
    '00142012': 'IndicationSequence',
    '00142014': 'IndicationNumber',
    '00142016': 'IndicationLabel',
    '00142018': 'IndicationDescription',
    '0014201A': 'IndicationType',
    '0014201C': 'IndicationDisposition',
    '0014201E': 'IndicationROISequence',
    '00142030': 'IndicationPhysicalPropertySequence',
    '00142032': 'PropertyLabel',
    '00142202': 'CoordinateSystemNumberOfAxes',
    '00142204': 'CoordinateSystemAxesSequence',
    '00142206': 'CoordinateSystemAxisDescription',
    '00142208': 'CoordinateSystemDataSetMapping',
    '0014220A': 'CoordinateSystemAxisNumber',
    '0014220C': 'CoordinateSystemAxisType',
    '0014220E': 'CoordinateSystemAxisUnits',
    '00142210': 'CoordinateSystemAxisValues',
    '00142220': 'CoordinateSystemTransformSequence',
    '00142222': 'TransformDescription',
    '00142224': 'TransformNumberOfAxes',
    '00142226': 'TransformOrderOfAxes',
    '00142228': 'TransformedAxisUnits',
    '0014222A': 'CoordinateSystemTransformRotationAndScaleMatrix',
    '0014222C': 'CoordinateSystemTransformTranslationMatrix',
    '00143011': 'InternalDetectorFrameTime',
    '00143012': 'NumberOfFramesIntegrated',
    '00143020': 'DetectorTemperatureSequence',
    '00143022': 'SensorName',
    '00143024': 'HorizontalOffsetOfSensor',
    '00143026': 'VerticalOffsetOfSensor',
    '00143028': 'SensorTemperature',
    '00143040': 'DarkCurrentSequence',
    '00143050': 'DarkCurrentCounts',
    '00143060': 'GainCorrectionReferenceSequence',
    '00143070': 'AirCounts',
    '00143071': 'KVUsedInGainCalibration',
    '00143072': 'MAUsedInGainCalibration',
    '00143073': 'NumberOfFramesUsedForIntegration',
    '00143074': 'FilterMaterialUsedInGainCalibration',
    '00143075': 'FilterThicknessUsedInGainCalibration',
    '00143076': 'DateOfGainCalibration',
    '00143077': 'TimeOfGainCalibration',
    '00143080': 'BadPixelImage',
    '00143099': 'CalibrationNotes',
    '00144002': 'PulserEquipmentSequence',
    '00144004': 'PulserType',
    '00144006': 'PulserNotes',
    '00144008': 'ReceiverEquipmentSequence',
    '0014400A': 'AmplifierType',
    '0014400C': 'ReceiverNotes',
    '0014400E': 'PreAmplifierEquipmentSequence',
    '0014400F': 'PreAmplifierNotes',
    '00144010': 'TransmitTransducerSequence',
    '00144011': 'ReceiveTransducerSequence',
    '00144012': 'NumberOfElements',
    '00144013': 'ElementShape',
    '00144014': 'ElementDimensionA',
    '00144015': 'ElementDimensionB',
    '00144016': 'ElementPitchA',
    '00144017': 'MeasuredBeamDimensionA',
    '00144018': 'MeasuredBeamDimensionB',
    '00144019': 'LocationOfMeasuredBeamDiameter',
    '0014401A': 'NominalFrequency',
    '0014401B': 'MeasuredCenterFrequency',
    '0014401C': 'MeasuredBandwidth',
    '0014401D': 'ElementPitchB',
    '00144020': 'PulserSettingsSequence',
    '00144022': 'PulseWidth',
    '00144024': 'ExcitationFrequency',
    '00144026': 'ModulationType',
    '00144028': 'Damping',
    '00144030': 'ReceiverSettingsSequence',
    '00144031': 'AcquiredSoundpathLength',
    '00144032': 'AcquisitionCompressionType',
    '00144033': 'AcquisitionSampleSize',
    '00144034': 'RectifierSmoothing',
    '00144035': 'DACSequence',
    '00144036': 'DACType',
    '00144038': 'DACGainPoints',
    '0014403A': 'DACTimePoints',
    '0014403C': 'DACAmplitude',
    '00144040': 'PreAmplifierSettingsSequence',
    '00144050': 'TransmitTransducerSettingsSequence',
    '00144051': 'ReceiveTransducerSettingsSequence',
    '00144052': 'IncidentAngle',
    '00144054': 'CouplingTechnique',
    '00144056': 'CouplingMedium',
    '00144057': 'CouplingVelocity',
    '00144058': 'ProbeCenterLocationX',
    '00144059': 'ProbeCenterLocationZ',
    '0014405A': 'SoundPathLength',
    '0014405C': 'DelayLawIdentifier',
    '00144060': 'GateSettingsSequence',
    '00144062': 'GateThreshold',
    '00144064': 'VelocityOfSound',
    '00144070': 'CalibrationSettingsSequence',
    '00144072': 'CalibrationProcedure',
    '00144074': 'ProcedureVersion',
    '00144076': 'ProcedureCreationDate',
    '00144078': 'ProcedureExpirationDate',
    '0014407A': 'ProcedureLastModifiedDate',
    '0014407C': 'CalibrationTime',
    '0014407E': 'CalibrationDate',
    '00144080': 'ProbeDriveEquipmentSequence',
    '00144081': 'DriveType',
    '00144082': 'ProbeDriveNotes',
    '00144083': 'DriveProbeSequence',
    '00144084': 'ProbeInductance',
    '00144085': 'ProbeResistance',
    '00144086': 'ReceiveProbeSequence',
    '00144087': 'ProbeDriveSettingsSequence',
    '00144088': 'BridgeResistors',
    '00144089': 'ProbeOrientationAngle',
    '0014408B': 'UserSelectedGainY',
    '0014408C': 'UserSelectedPhase',
    '0014408D': 'UserSelectedOffsetX',
    '0014408E': 'UserSelectedOffsetY',
    '00144091': 'ChannelSettingsSequence',
    '00144092': 'ChannelThreshold',
    '0014409A': 'ScannerSettingsSequence',
    '0014409B': 'ScanProcedure',
    '0014409C': 'TranslationRateX',
    '0014409D': 'TranslationRateY',
    '0014409F': 'ChannelOverlap',
    '001440A0': 'ImageQualityIndicatorType',
    '001440A1': 'ImageQualityIndicatorMaterial',
    '001440A2': 'ImageQualityIndicatorSize',
    '00145002': 'LINACEnergy',
    '00145004': 'LINACOutput',
    '00145100': 'ActiveAperture',
    '00145101': 'TotalAperture',
    '00145102': 'ApertureElevation',
    '00145103': 'MainLobeAngle',
    '00145104': 'MainRoofAngle',
    '00145105': 'ConnectorType',
    '00145106': 'WedgeModelNumber',
    '00145107': 'WedgeAngleFloat',
    '00145108': 'WedgeRoofAngle',
    '00145109': ('WedgeElement1Position'),
    '0014510A': 'WedgeMaterialVelocity',
    '0014510B': 'WedgeMaterial',
    '0014510C': 'WedgeOffsetZ',
    '0014510D': 'WedgeOriginOffsetX',
    '0014510E': 'WedgeTimeDelay',
    '0014510F': 'WedgeName',
    '00145110': 'WedgeManufacturerName',
    '00145111': 'WedgeDescription',
    '00145112': 'NominalBeamAngle',
    '00145113': 'WedgeOffsetX',
    '00145114': 'WedgeOffsetY',
    '00145115': 'WedgeTotalLength',
    '00145116': 'WedgeInContactLength',
    '00145117': 'WedgeFrontGap',
    '00145118': 'WedgeTotalHeight',
    '00145119': 'WedgeFrontHeight',
    '0014511A': 'WedgeRearHeight',
    '0014511B': 'WedgeTotalWidth',
    '0014511C': 'WedgeInContactWidth',
    '0014511D': 'WedgeChamferHeight',
    '0014511E': 'WedgeCurve',
    '0014511F': 'RadiusAlongWedge',
    '00180010': 'ContrastBolusAgent',
    '00180012': 'ContrastBolusAgentSequence',
    '00180013': ('ContrastBolusT1Relaxivity'),
    '00180014': 'ContrastBolusAdministrationRouteSequence',
    '00180015': 'BodyPartExamined',
    '00180020': 'ScanningSequence',
    '00180021': 'SequenceVariant',
    '00180022': 'ScanOptions',
    '00180023': 'MRAcquisitionType',
    '00180024': 'SequenceName',
    '00180025': 'AngioFlag',
    '00180026': 'InterventionDrugInformationSequence',
    '00180027': 'InterventionDrugStopTime',
    '00180028': 'InterventionDrugDose',
    '00180029': 'InterventionDrugCodeSequence',
    '0018002A': 'AdditionalDrugSequence',
    '00180030': 'Radionuclide',
    '00180031': 'Radiopharmaceutical',
    '00180032': 'EnergyWindowCenterline',
    '00180033': 'EnergyWindowTotalWidth',
    '00180034': 'InterventionDrugName',
    '00180035': 'InterventionDrugStartTime',
    '00180036': 'InterventionSequence',
    '00180037': 'TherapyType',
    '00180038': 'InterventionStatus',
    '00180039': 'TherapyDescription',
    '0018003A': 'InterventionDescription',
    '00180040': 'CineRate',
    '00180042': 'InitialCineRunState',
    '00180050': 'SliceThickness',
    '00180060': 'KVP',
    '00180061': '',
    '00180070': 'CountsAccumulated',
    '00180071': 'AcquisitionTerminationCondition',
    '00180072': 'EffectiveDuration',
    '00180073': 'AcquisitionStartCondition',
    '00180074': 'AcquisitionStartConditionData',
    '00180075': 'AcquisitionTerminationConditionData',
    '00180080': 'RepetitionTime',
    '00180081': 'EchoTime',
    '00180082': 'InversionTime',
    '00180083': 'NumberOfAverages',
    '00180084': 'ImagingFrequency',
    '00180085': 'ImagedNucleus',
    '00180086': 'EchoNumbers',
    '00180087': 'MagneticFieldStrength',
    '00180088': 'SpacingBetweenSlices',
    '00180089': 'NumberOfPhaseEncodingSteps',
    '00180090': 'DataCollectionDiameter',
    '00180091': 'EchoTrainLength',
    '00180093': 'PercentSampling',
    '00180094': 'PercentPhaseFieldOfView',
    '00180095': 'PixelBandwidth',
    '00181000': 'DeviceSerialNumber',
    '00181002': 'DeviceUID',
    '00181003': 'DeviceID',
    '00181004': 'PlateID',
    '00181005': 'GeneratorID',
    '00181006': 'GridID',
    '00181007': 'CassetteID',
    '00181008': 'GantryID',
    '00181009': 'UniqueDeviceIdentifier',
    '0018100A': 'UDISequence',
    '00181010': 'SecondaryCaptureDeviceID',
    '00181011': 'HardcopyCreationDeviceID',
    '00181012': 'DateOfSecondaryCapture',
    '00181014': 'TimeOfSecondaryCapture',
    '00181016': 'SecondaryCaptureDeviceManufacturer',
    '00181017': 'HardcopyDeviceManufacturer',
    '00181018': 'SecondaryCaptureDeviceManufacturerModelName',
    '00181019': 'SecondaryCaptureDeviceSoftwareVersions',
    '0018101A': 'HardcopyDeviceSoftwareVersion',
    '0018101B': 'HardcopyDeviceManufacturerModelName',
    '00181020': 'SoftwareVersions',
    '00181022': 'VideoImageFormatAcquired',
    '00181023': 'DigitalImageFormatAcquired',
    '00181030': 'ProtocolName',
    '00181040': 'ContrastBolusRoute',
    '00181041': 'ContrastBolusVolume',
    '00181042': 'ContrastBolusStartTime',
    '00181043': 'ContrastBolusStopTime',
    '00181044': 'ContrastBolusTotalDose',
    '00181045': 'SyringeCounts',
    '00181046': 'ContrastFlowRate',
    '00181047': 'ContrastFlowDuration',
    '00181048': 'ContrastBolusIngredient',
    '00181049': 'ContrastBolusIngredientConcentration',
    '00181050': 'SpatialResolution',
    '00181060': 'TriggerTime',
    '00181061': 'TriggerSourceOrType',
    '00181062': 'NominalInterval',
    '00181063': 'FrameTime',
    '00181064': 'CardiacFramingType',
    '00181065': 'FrameTimeVector',
    '00181066': 'FrameDelay',
    '00181067': 'ImageTriggerDelay',
    '00181068': 'MultiplexGroupTimeOffset',
    '00181069': 'TriggerTimeOffset',
    '0018106A': 'SynchronizationTrigger',
    '0018106C': 'SynchronizationChannel',
    '0018106E': 'TriggerSamplePosition',
    '00181070': 'RadiopharmaceuticalRoute',
    '00181071': 'RadiopharmaceuticalVolume',
    '00181072': 'RadiopharmaceuticalStartTime',
    '00181073': 'RadiopharmaceuticalStopTime',
    '00181074': 'RadionuclideTotalDose',
    '00181075': 'RadionuclideHalfLife',
    '00181076': 'RadionuclidePositronFraction',
    '00181077': 'RadiopharmaceuticalSpecificActivity',
    '00181078': 'RadiopharmaceuticalStartDateTime',
    '00181079': 'RadiopharmaceuticalStopDateTime',
    '00181080': 'BeatRejectionFlag',
    '00181081': 'LowRRValue',
    '00181082': 'HighRRValue',
    '00181083': 'IntervalsAcquired',
    '00181084': 'IntervalsRejected',
    '00181085': 'PVCRejection',
    '00181086': 'SkipBeats',
    '00181088': 'HeartRate',
    '00181090': 'CardiacNumberOfImages',
    '00181094': 'TriggerWindow',
    '00181100': 'ReconstructionDiameter',
    '00181110': 'DistanceSourceToDetector',
    '00181111': 'DistanceSourceToPatient',
    '00181114': 'EstimatedRadiographicMagnificationFactor',
    '00181120': 'GantryDetectorTilt',
    '00181121': 'GantryDetectorSlew',
    '00181130': 'TableHeight',
    '00181131': 'TableTraverse',
    '00181134': 'TableMotion',
    '00181135': 'TableVerticalIncrement',
    '00181136': 'TableLateralIncrement',
    '00181137': 'TableLongitudinalIncrement',
    '00181138': 'TableAngle',
    '0018113A': 'TableType',
    '00181140': 'RotationDirection',
    '00181141': 'AngularPosition',
    '00181142': 'RadialPosition',
    '00181143': 'ScanArc',
    '00181144': 'AngularStep',
    '00181145': 'CenterOfRotationOffset',
    '00181146': 'RotationOffset',
    '00181147': 'FieldOfViewShape',
    '00181149': 'FieldOfViewDimensions',
    '00181150': 'ExposureTime',
    '00181151': 'XRayTubeCurrent',
    '00181152': 'Exposure',
    '00181153': 'ExposureInuAs',
    '00181154': 'AveragePulseWidth',
    '00181155': 'RadiationSetting',
    '00181156': 'RectificationType',
    '0018115A': 'RadiationMode',
    '0018115E': 'ImageAndFluoroscopyAreaDoseProduct',
    '00181160': 'FilterType',
    '00181161': 'TypeOfFilters',
    '00181162': 'IntensifierSize',
    '00181164': 'ImagerPixelSpacing',
    '00181166': 'Grid',
    '00181170': 'GeneratorPower',
    '00181180': 'CollimatorGridName',
    '00181181': 'CollimatorType',
    '00181182': 'FocalDistance',
    '00181183': 'XFocusCenter',
    '00181184': 'YFocusCenter',
    '00181190': 'FocalSpots',
    '00181191': 'AnodeTargetMaterial',
    '001811A0': 'BodyPartThickness',
    '001811A2': 'CompressionForce',
    '001811A3': 'CompressionPressure',
    '001811A4': 'PaddleDescription',
    '001811A5': 'CompressionContactArea',
    '00181200': 'DateOfLastCalibration',
    '00181201': 'TimeOfLastCalibration',
    '00181202': 'DateTimeOfLastCalibration',
    '00181210': 'ConvolutionKernel',
    '00181240': 'UpperLowerPixelValues',
    '00181242': 'ActualFrameDuration',
    '00181243': 'CountRate',
    '00181244': 'PreferredPlaybackSequencing',
    '00181250': 'ReceiveCoilName',
    '00181251': 'TransmitCoilName',
    '00181260': 'PlateType',
    '00181261': 'PhosphorType',
    '00181271': 'WaterEquivalentDiameter',
    '00181272': 'WaterEquivalentDiameterCalculationMethodCodeSequence',
    '00181300': 'ScanVelocity',
    '00181301': 'WholeBodyTechnique',
    '00181302': 'ScanLength',
    '00181310': 'AcquisitionMatrix',
    '00181312': 'InPlanePhaseEncodingDirection',
    '00181314': 'FlipAngle',
    '00181315': 'VariableFlipAngleFlag',
    '00181316': 'SAR',
    '00181318': 'dBdt',
    '00181320': ('B1rms'),
    '00181400': 'AcquisitionDeviceProcessingDescription',
    '00181401': 'AcquisitionDeviceProcessingCode',
    '00181402': 'CassetteOrientation',
    '00181403': 'CassetteSize',
    '00181404': 'ExposuresOnPlate',
    '00181405': 'RelativeXRayExposure',
    '00181411': 'ExposureIndex',
    '00181412': 'TargetExposureIndex',
    '00181413': 'DeviationIndex',
    '00181450': 'ColumnAngulation',
    '00181460': 'TomoLayerHeight',
    '00181470': 'TomoAngle',
    '00181480': 'TomoTime',
    '00181490': 'TomoType',
    '00181491': 'TomoClass',
    '00181495': 'NumberOfTomosynthesisSourceImages',
    '00181500': 'PositionerMotion',
    '00181508': 'PositionerType',
    '00181510': 'PositionerPrimaryAngle',
    '00181511': 'PositionerSecondaryAngle',
    '00181520': 'PositionerPrimaryAngleIncrement',
    '00181521': 'PositionerSecondaryAngleIncrement',
    '00181530': 'DetectorPrimaryAngle',
    '00181531': 'DetectorSecondaryAngle',
    '00181600': 'ShutterShape',
    '00181602': 'ShutterLeftVerticalEdge',
    '00181604': 'ShutterRightVerticalEdge',
    '00181606': 'ShutterUpperHorizontalEdge',
    '00181608': 'ShutterLowerHorizontalEdge',
    '00181610': 'CenterOfCircularShutter',
    '00181612': 'RadiusOfCircularShutter',
    '00181620': 'VerticesOfThePolygonalShutter',
    '00181622': 'ShutterPresentationValue',
    '00181623': 'ShutterOverlayGroup',
    '00181624': 'ShutterPresentationColorCIELabValue',
    '00181700': 'CollimatorShape',
    '00181702': 'CollimatorLeftVerticalEdge',
    '00181704': 'CollimatorRightVerticalEdge',
    '00181706': 'CollimatorUpperHorizontalEdge',
    '00181708': 'CollimatorLowerHorizontalEdge',
    '00181710': 'CenterOfCircularCollimator',
    '00181712': 'RadiusOfCircularCollimator',
    '00181720': 'VerticesOfThePolygonalCollimator',
    '00181800': 'AcquisitionTimeSynchronized',
    '00181801': 'TimeSource',
    '00181802': 'TimeDistributionProtocol',
    '00181803': 'NTPSourceAddress',
    '00182001': 'PageNumberVector',
    '00182002': 'FrameLabelVector',
    '00182003': 'FramePrimaryAngleVector',
    '00182004': 'FrameSecondaryAngleVector',
    '00182005': 'SliceLocationVector',
    '00182006': 'DisplayWindowLabelVector',
    '00182010': 'NominalScannedPixelSpacing',
    '00182020': 'DigitizingDeviceTransportDirection',
    '00182030': 'RotationOfScannedFilm',
    '00182041': 'BiopsyTargetSequence',
    '00182042': 'TargetUID',
    '00182043': 'LocalizingCursorPosition',
    '00182044': 'CalculatedTargetPosition',
    '00182045': 'TargetLabel',
    '00182046': 'DisplayedZValue',
    '00183100': 'IVUSAcquisition',
    '00183101': 'IVUSPullbackRate',
    '00183102': 'IVUSGatedRate',
    '00183103': 'IVUSPullbackStartFrameNumber',
    '00183104': 'IVUSPullbackStopFrameNumber',
    '00183105': 'LesionNumber',
    '00184000': 'AcquisitionComments',
    '00185000': 'OutputPower',
    '00185010': 'TransducerData',
    '00185012': 'FocusDepth',
    '00185020': 'ProcessingFunction',
    '00185021': 'PostprocessingFunction',
    '00185022': 'MechanicalIndex',
    '00185024': 'BoneThermalIndex',
    '00185026': 'CranialThermalIndex',
    '00185027': 'SoftTissueThermalIndex',
    '00185028': 'SoftTissueFocusThermalIndex',
    '00185029': 'SoftTissueSurfaceThermalIndex',
    '00185030': 'DynamicRange',
    '00185040': 'TotalGain',
    '00185050': 'DepthOfScanField',
    '00185100': 'PatientPosition',
    '00185101': 'ViewPosition',
    '00185104': 'ProjectionEponymousNameCodeSequence',
    '00185210': 'ImageTransformationMatrix',
    '00185212': 'ImageTranslationVector',
    '00186000': 'Sensitivity',
    '00186011': 'SequenceOfUltrasoundRegions',
    '00186012': 'RegionSpatialFormat',
    '00186014': 'RegionDataType',
    '00186016': 'RegionFlags',
    '00186018': ('RegionLocationMinX0'),
    '0018601A': ('RegionLocationMinY0'),
    '0018601C': ('RegionLocationMaxX1'),
    '0018601E': ('RegionLocationMaxY1'),
    '00186020': ('ReferencePixelX0'),
    '00186022': ('ReferencePixelY0'),
    '00186024': 'PhysicalUnitsXDirection',
    '00186026': 'PhysicalUnitsYDirection',
    '00186028': 'ReferencePixelPhysicalValueX',
    '0018602A': 'ReferencePixelPhysicalValueY',
    '0018602C': 'PhysicalDeltaX',
    '0018602E': 'PhysicalDeltaY',
    '00186030': 'TransducerFrequency',
    '00186031': 'TransducerType',
    '00186032': 'PulseRepetitionFrequency',
    '00186034': 'DopplerCorrectionAngle',
    '00186036': 'SteeringAngle',
    '00186038': 'DopplerSampleVolumeXPositionRetired',
    '00186039': 'DopplerSampleVolumeXPosition',
    '0018603A': 'DopplerSampleVolumeYPositionRetired',
    '0018603B': 'DopplerSampleVolumeYPosition',
    '0018603C': ('TMLinePositionX0Retired'),
    '0018603D': ('TMLinePositionX0'),
    '0018603E': ('TMLinePositionY0Retired'),
    '0018603F': ('TMLinePositionY0'),
    '00186040': ('TMLinePositionX1Retired'),
    '00186041': ('TMLinePositionX1'),
    '00186042': ('TMLinePositionY1Retired'),
    '00186043': ('TMLinePositionY1'),
    '00186044': 'PixelComponentOrganization',
    '00186046': 'PixelComponentMask',
    '00186048': 'PixelComponentRangeStart',
    '0018604A': 'PixelComponentRangeStop',
    '0018604C': 'PixelComponentPhysicalUnits',
    '0018604E': 'PixelComponentDataType',
    '00186050': 'NumberOfTableBreakPoints',
    '00186052': 'TableOfXBreakPoints',
    '00186054': 'TableOfYBreakPoints',
    '00186056': 'NumberOfTableEntries',
    '00186058': 'TableOfPixelValues',
    '0018605A': 'TableOfParameterValues',
    '00186060': 'RWaveTimeVector',
    '00187000': 'DetectorConditionsNominalFlag',
    '00187001': 'DetectorTemperature',
    '00187004': 'DetectorType',
    '00187005': 'DetectorConfiguration',
    '00187006': 'DetectorDescription',
    '00187008': 'DetectorMode',
    '0018700A': 'DetectorID',
    '0018700C': 'DateOfLastDetectorCalibration',
    '0018700E': 'TimeOfLastDetectorCalibration',
    '00187010': 'ExposuresOnDetectorSinceLastCalibration',
    '00187011': 'ExposuresOnDetectorSinceManufactured',
    '00187012': 'DetectorTimeSinceLastExposure',
    '00187014': 'DetectorActiveTime',
    '00187016': 'DetectorActivationOffsetFromExposure',
    '0018701A': 'DetectorBinning',
    '00187020': 'DetectorElementPhysicalSize',
    '00187022': 'DetectorElementSpacing',
    '00187024': 'DetectorActiveShape',
    '00187026': 'DetectorActiveDimensions',
    '00187028': 'DetectorActiveOrigin',
    '0018702A': 'DetectorManufacturerName',
    '0018702B': 'DetectorManufacturerModelName',
    '00187030': 'FieldOfViewOrigin',
    '00187032': 'FieldOfViewRotation',
    '00187034': 'FieldOfViewHorizontalFlip',
    '00187036': 'PixelDataAreaOriginRelativeToFOV',
    '00187038': 'PixelDataAreaRotationAngleRelativeToFOV',
    '00187040': 'GridAbsorbingMaterial',
    '00187041': 'GridSpacingMaterial',
    '00187042': 'GridThickness',
    '00187044': 'GridPitch',
    '00187046': 'GridAspectRatio',
    '00187048': 'GridPeriod',
    '0018704C': 'GridFocalDistance',
    '00187050': 'FilterMaterial',
    '00187052': 'FilterThicknessMinimum',
    '00187054': 'FilterThicknessMaximum',
    '00187056': 'FilterBeamPathLengthMinimum',
    '00187058': 'FilterBeamPathLengthMaximum',
    '00187060': 'ExposureControlMode',
    '00187062': 'ExposureControlModeDescription',
    '00187064': 'ExposureStatus',
    '00187065': 'PhototimerSetting',
    '00188150': 'ExposureTimeInuS',
    '00188151': 'XRayTubeCurrentInuA',
    '00189004': 'ContentQualification',
    '00189005': 'PulseSequenceName',
    '00189006': 'MRImagingModifierSequence',
    '00189008': 'EchoPulseSequence',
    '00189009': 'InversionRecovery',
    '00189010': 'FlowCompensation',
    '00189011': 'MultipleSpinEcho',
    '00189012': 'MultiPlanarExcitation',
    '00189014': 'PhaseContrast',
    '00189015': 'TimeOfFlightContrast',
    '00189016': 'Spoiling',
    '00189017': 'SteadyStatePulseSequence',
    '00189018': 'EchoPlanarPulseSequence',
    '00189019': 'TagAngleFirstAxis',
    '00189020': 'MagnetizationTransfer',
    '00189021': ('T2Preparation'),
    '00189022': 'BloodSignalNulling',
    '00189024': 'SaturationRecovery',
    '00189025': 'SpectrallySelectedSuppression',
    '00189026': 'SpectrallySelectedExcitation',
    '00189027': 'SpatialPresaturation',
    '00189028': 'Tagging',
    '00189029': 'OversamplingPhase',
    '00189030': 'TagSpacingFirstDimension',
    '00189032': 'GeometryOfKSpaceTraversal',
    '00189033': 'SegmentedKSpaceTraversal',
    '00189034': 'RectilinearPhaseEncodeReordering',
    '00189035': 'TagThickness',
    '00189036': 'PartialFourierDirection',
    '00189037': 'CardiacSynchronizationTechnique',
    '00189041': 'ReceiveCoilManufacturerName',
    '00189042': 'MRReceiveCoilSequence',
    '00189043': 'ReceiveCoilType',
    '00189044': 'QuadratureReceiveCoil',
    '00189045': 'MultiCoilDefinitionSequence',
    '00189046': 'MultiCoilConfiguration',
    '00189047': 'MultiCoilElementName',
    '00189048': 'MultiCoilElementUsed',
    '00189049': 'MRTransmitCoilSequence',
    '00189050': 'TransmitCoilManufacturerName',
    '00189051': 'TransmitCoilType',
    '00189052': 'SpectralWidth',
    '00189053': 'ChemicalShiftReference',
    '00189054': 'VolumeLocalizationTechnique',
    '00189058': 'MRAcquisitionFrequencyEncodingSteps',
    '00189059': 'Decoupling',
    '00189060': 'DecoupledNucleus',
    '00189061': 'DecouplingFrequency',
    '00189062': 'DecouplingMethod',
    '00189063': 'DecouplingChemicalShiftReference',
    '00189064': 'KSpaceFiltering',
    '00189065': 'TimeDomainFiltering',
    '00189066': 'NumberOfZeroFills',
    '00189067': 'BaselineCorrection',
    '00189069': 'ParallelReductionFactorInPlane',
    '00189070': 'CardiacRRIntervalSpecified',
    '00189073': 'AcquisitionDuration',
    '00189074': 'FrameAcquisitionDateTime',
    '00189075': 'DiffusionDirectionality',
    '00189076': 'DiffusionGradientDirectionSequence',
    '00189077': 'ParallelAcquisition',
    '00189078': 'ParallelAcquisitionTechnique',
    '00189079': 'InversionTimes',
    '00189080': 'MetaboliteMapDescription',
    '00189081': 'PartialFourier',
    '00189082': 'EffectiveEchoTime',
    '00189083': 'MetaboliteMapCodeSequence',
    '00189084': 'ChemicalShiftSequence',
    '00189085': 'CardiacSignalSource',
    '00189087': 'DiffusionBValue',
    '00189089': 'DiffusionGradientOrientation',
    '00189090': 'VelocityEncodingDirection',
    '00189091': 'VelocityEncodingMinimumValue',
    '00189092': 'VelocityEncodingAcquisitionSequence',
    '00189093': 'NumberOfKSpaceTrajectories',
    '00189094': 'CoverageOfKSpace',
    '00189095': 'SpectroscopyAcquisitionPhaseRows',
    '00189096': 'ParallelReductionFactorInPlaneRetired',
    '00189098': 'TransmitterFrequency',
    '00189100': 'ResonantNucleus',
    '00189101': 'FrequencyCorrection',
    '00189103': 'MRSpectroscopyFOVGeometrySequence',
    '00189104': 'SlabThickness',
    '00189105': 'SlabOrientation',
    '00189106': 'MidSlabPosition',
    '00189107': 'MRSpatialSaturationSequence',
    '00189112': 'MRTimingAndRelatedParametersSequence',
    '00189114': 'MREchoSequence',
    '00189115': 'MRModifierSequence',
    '00189117': 'MRDiffusionSequence',
    '00189118': 'CardiacSynchronizationSequence',
    '00189119': 'MRAveragesSequence',
    '00189125': 'MRFOVGeometrySequence',
    '00189126': 'VolumeLocalizationSequence',
    '00189127': 'SpectroscopyAcquisitionDataColumns',
    '00189147': 'DiffusionAnisotropyType',
    '00189151': 'FrameReferenceDateTime',
    '00189152': 'MRMetaboliteMapSequence',
    '00189155': 'ParallelReductionFactorOutOfPlane',
    '00189159': 'SpectroscopyAcquisitionOutOfPlanePhaseSteps',
    '00189166': 'BulkMotionStatus',
    '00189168': 'ParallelReductionFactorSecondInPlane',
    '00189169': 'CardiacBeatRejectionTechnique',
    '00189170': 'RespiratoryMotionCompensationTechnique',
    '00189171': 'RespiratorySignalSource',
    '00189172': 'BulkMotionCompensationTechnique',
    '00189173': 'BulkMotionSignalSource',
    '00189174': 'ApplicableSafetyStandardAgency',
    '00189175': 'ApplicableSafetyStandardDescription',
    '00189176': 'OperatingModeSequence',
    '00189177': 'OperatingModeType',
    '00189178': 'OperatingMode',
    '00189179': 'SpecificAbsorptionRateDefinition',
    '00189180': 'GradientOutputType',
    '00189181': 'SpecificAbsorptionRateValue',
    '00189182': 'GradientOutput',
    '00189183': 'FlowCompensationDirection',
    '00189184': 'TaggingDelay',
    '00189185': 'RespiratoryMotionCompensationTechniqueDescription',
    '00189186': 'RespiratorySignalSourceID',
    '00189195': 'ChemicalShiftMinimumIntegrationLimitInHz',
    '00189196': 'ChemicalShiftMaximumIntegrationLimitInHz',
    '00189197': 'MRVelocityEncodingSequence',
    '00189198': 'FirstOrderPhaseCorrection',
    '00189199': 'WaterReferencedPhaseCorrection',
    '00189200': 'MRSpectroscopyAcquisitionType',
    '00189214': 'RespiratoryCyclePosition',
    '00189217': 'VelocityEncodingMaximumValue',
    '00189218': 'TagSpacingSecondDimension',
    '00189219': 'TagAngleSecondAxis',
    '00189220': 'FrameAcquisitionDuration',
    '00189226': 'MRImageFrameTypeSequence',
    '00189227': 'MRSpectroscopyFrameTypeSequence',
    '00189231': 'MRAcquisitionPhaseEncodingStepsInPlane',
    '00189232': 'MRAcquisitionPhaseEncodingStepsOutOfPlane',
    '00189234': 'SpectroscopyAcquisitionPhaseColumns',
    '00189236': 'CardiacCyclePosition',
    '00189239': 'SpecificAbsorptionRateSequence',
    '00189240': 'RFEchoTrainLength',
    '00189241': 'GradientEchoTrainLength',
    '00189250': 'ArterialSpinLabelingContrast',
    '00189251': 'MRArterialSpinLabelingSequence',
    '00189252': 'ASLTechniqueDescription',
    '00189253': 'ASLSlabNumber',
    '00189254': 'ASLSlabThickness',
    '00189255': 'ASLSlabOrientation',
    '00189256': 'ASLMidSlabPosition',
    '00189257': 'ASLContext',
    '00189258': 'ASLPulseTrainDuration',
    '00189259': 'ASLCrusherFlag',
    '0018925A': 'ASLCrusherFlowLimit',
    '0018925B': 'ASLCrusherDescription',
    '0018925C': 'ASLBolusCutoffFlag',
    '0018925D': 'ASLBolusCutoffTimingSequence',
    '0018925E': 'ASLBolusCutoffTechnique',
    '0018925F': 'ASLBolusCutoffDelayTime',
    '00189260': 'ASLSlabSequence',
    '00189295': 'ChemicalShiftMinimumIntegrationLimitInppm',
    '00189296': 'ChemicalShiftMaximumIntegrationLimitInppm',
    '00189297': 'WaterReferenceAcquisition',
    '00189298': 'EchoPeakPosition',
    '00189301': 'CTAcquisitionTypeSequence',
    '00189302': 'AcquisitionType',
    '00189303': 'TubeAngle',
    '00189304': 'CTAcquisitionDetailsSequence',
    '00189305': 'RevolutionTime',
    '00189306': 'SingleCollimationWidth',
    '00189307': 'TotalCollimationWidth',
    '00189308': 'CTTableDynamicsSequence',
    '00189309': 'TableSpeed',
    '00189310': 'TableFeedPerRotation',
    '00189311': 'SpiralPitchFactor',
    '00189312': 'CTGeometrySequence',
    '00189313': 'DataCollectionCenterPatient',
    '00189314': 'CTReconstructionSequence',
    '00189315': 'ReconstructionAlgorithm',
    '00189316': 'ConvolutionKernelGroup',
    '00189317': 'ReconstructionFieldOfView',
    '00189318': 'ReconstructionTargetCenterPatient',
    '00189319': 'ReconstructionAngle',
    '00189320': 'ImageFilter',
    '00189321': 'CTExposureSequence',
    '00189322': 'ReconstructionPixelSpacing',
    '00189323': 'ExposureModulationType',
    '00189324': 'EstimatedDoseSaving',
    '00189325': 'CTXRayDetailsSequence',
    '00189326': 'CTPositionSequence',
    '00189327': 'TablePosition',
    '00189328': 'ExposureTimeInms',
    '00189329': 'CTImageFrameTypeSequence',
    '00189330': 'XRayTubeCurrentInmA',
    '00189332': 'ExposureInmAs',
    '00189333': 'ConstantVolumeFlag',
    '00189334': 'FluoroscopyFlag',
    '00189335': 'DistanceSourceToDataCollectionCenter',
    '00189337': 'ContrastBolusAgentNumber',
    '00189338': 'ContrastBolusIngredientCodeSequence',
    '00189340': 'ContrastAdministrationProfileSequence',
    '00189341': 'ContrastBolusUsageSequence',
    '00189342': 'ContrastBolusAgentAdministered',
    '00189343': 'ContrastBolusAgentDetected',
    '00189344': 'ContrastBolusAgentPhase',
    '00189345': 'CTDIvol',
    '00189346': 'CTDIPhantomTypeCodeSequence',
    '00189351': 'CalciumScoringMassFactorPatient',
    '00189352': 'CalciumScoringMassFactorDevice',
    '00189353': 'EnergyWeightingFactor',
    '00189360': 'CTAdditionalXRaySourceSequence',
    '00189401': 'ProjectionPixelCalibrationSequence',
    '00189402': 'DistanceSourceToIsocenter',
    '00189403': 'DistanceObjectToTableTop',
    '00189404': 'ObjectPixelSpacingInCenterOfBeam',
    '00189405': 'PositionerPositionSequence',
    '00189406': 'TablePositionSequence',
    '00189407': 'CollimatorShapeSequence',
    '00189410': 'PlanesInAcquisition',
    '00189412': 'XAXRFFrameCharacteristicsSequence',
    '00189417': 'FrameAcquisitionSequence',
    '00189420': 'XRayReceptorType',
    '00189423': 'AcquisitionProtocolName',
    '00189424': 'AcquisitionProtocolDescription',
    '00189425': 'ContrastBolusIngredientOpaque',
    '00189426': 'DistanceReceptorPlaneToDetectorHousing',
    '00189427': 'IntensifierActiveShape',
    '00189428': 'IntensifierActiveDimensions',
    '00189429': 'PhysicalDetectorSize',
    '00189430': 'PositionOfIsocenterProjection',
    '00189432': 'FieldOfViewSequence',
    '00189433': 'FieldOfViewDescription',
    '00189434': 'ExposureControlSensingRegionsSequence',
    '00189435': 'ExposureControlSensingRegionShape',
    '00189436': 'ExposureControlSensingRegionLeftVerticalEdge',
    '00189437': 'ExposureControlSensingRegionRightVerticalEdge',
    '00189438': 'ExposureControlSensingRegionUpperHorizontalEdge',
    '00189439': 'ExposureControlSensingRegionLowerHorizontalEdge',
    '00189440': 'CenterOfCircularExposureControlSensingRegion',
    '00189441': 'RadiusOfCircularExposureControlSensingRegion',
    '00189442': 'VerticesOfThePolygonalExposureControlSensingRegion',
    '00189445': '',
    '00189447': 'ColumnAngulationPatient',
    '00189449': 'BeamAngle',
    '00189451': 'FrameDetectorParametersSequence',
    '00189452': 'CalculatedAnatomyThickness',
    '00189455': 'CalibrationSequence',
    '00189456': 'ObjectThicknessSequence',
    '00189457': 'PlaneIdentification',
    '00189461': 'FieldOfViewDimensionsInFloat',
    '00189462': 'IsocenterReferenceSystemSequence',
    '00189463': 'PositionerIsocenterPrimaryAngle',
    '00189464': 'PositionerIsocenterSecondaryAngle',
    '00189465': 'PositionerIsocenterDetectorRotationAngle',
    '00189466': 'TableXPositionToIsocenter',
    '00189467': 'TableYPositionToIsocenter',
    '00189468': 'TableZPositionToIsocenter',
    '00189469': 'TableHorizontalRotationAngle',
    '00189470': 'TableHeadTiltAngle',
    '00189471': 'TableCradleTiltAngle',
    '00189472': 'FrameDisplayShutterSequence',
    '00189473': 'AcquiredImageAreaDoseProduct',
    '00189474': 'CArmPositionerTabletopRelationship',
    '00189476': 'XRayGeometrySequence',
    '00189477': 'IrradiationEventIdentificationSequence',
    '00189504': ('XRay3DFrameTypeSequence'),
    '00189506': 'ContributingSourcesSequence',
    '00189507': ('XRay3DAcquisitionSequence'),
    '00189508': 'PrimaryPositionerScanArc',
    '00189509': 'SecondaryPositionerScanArc',
    '00189510': 'PrimaryPositionerScanStartAngle',
    '00189511': 'SecondaryPositionerScanStartAngle',
    '00189514': 'PrimaryPositionerIncrement',
    '00189515': 'SecondaryPositionerIncrement',
    '00189516': 'StartAcquisitionDateTime',
    '00189517': 'EndAcquisitionDateTime',
    '00189518': 'PrimaryPositionerIncrementSign',
    '00189519': 'SecondaryPositionerIncrementSign',
    '00189524': 'ApplicationName',
    '00189525': 'ApplicationVersion',
    '00189526': 'ApplicationManufacturer',
    '00189527': 'AlgorithmType',
    '00189528': 'AlgorithmDescription',
    '00189530': ('XRay3DReconstructionSequence'),
    '00189531': 'ReconstructionDescription',
    '00189538': 'PerProjectionAcquisitionSequence',
    '00189541': 'DetectorPositionSequence',
    '00189542': 'XRayAcquisitionDoseSequence',
    '00189543': 'XRaySourceIsocenterPrimaryAngle',
    '00189544': 'XRaySourceIsocenterSecondaryAngle',
    '00189545': 'BreastSupportIsocenterPrimaryAngle',
    '00189546': 'BreastSupportIsocenterSecondaryAngle',
    '00189547': 'BreastSupportXPositionToIsocenter',
    '00189548': 'BreastSupportYPositionToIsocenter',
    '00189549': 'BreastSupportZPositionToIsocenter',
    '00189550': 'DetectorIsocenterPrimaryAngle',
    '00189551': 'DetectorIsocenterSecondaryAngle',
    '00189552': 'DetectorXPositionToIsocenter',
    '00189553': 'DetectorYPositionToIsocenter',
    '00189554': 'DetectorZPositionToIsocenter',
    '00189555': 'XRayGridSequence',
    '00189556': 'XRayFilterSequence',
    '00189557': 'DetectorActiveAreaTLHCPosition',
    '00189558': 'DetectorActiveAreaOrientation',
    '00189559': 'PositionerPrimaryAngleDirection',
    '00189601': 'DiffusionBMatrixSequence',
    '00189602': 'DiffusionBValueXX',
    '00189603': 'DiffusionBValueXY',
    '00189604': 'DiffusionBValueXZ',
    '00189605': 'DiffusionBValueYY',
    '00189606': 'DiffusionBValueYZ',
    '00189607': 'DiffusionBValueZZ',
    '00189621': 'FunctionalMRSequence',
    '00189622': 'FunctionalSettlingPhaseFramesPresent',
    '00189623': 'FunctionalSyncPulse',
    '00189624': 'SettlingPhaseFrame',
    '00189701': 'DecayCorrectionDateTime',
    '00189715': 'StartDensityThreshold',
    '00189716': 'StartRelativeDensityDifferenceThreshold',
    '00189717': 'StartCardiacTriggerCountThreshold',
    '00189718': 'StartRespiratoryTriggerCountThreshold',
    '00189719': 'TerminationCountsThreshold',
    '00189720': 'TerminationDensityThreshold',
    '00189721': 'TerminationRelativeDensityThreshold',
    '00189722': 'TerminationTimeThreshold',
    '00189723': 'TerminationCardiacTriggerCountThreshold',
    '00189724': 'TerminationRespiratoryTriggerCountThreshold',
    '00189725': 'DetectorGeometry',
    '00189726': 'TransverseDetectorSeparation',
    '00189727': 'AxialDetectorDimension',
    '00189729': 'RadiopharmaceuticalAgentNumber',
    '00189732': 'PETFrameAcquisitionSequence',
    '00189733': 'PETDetectorMotionDetailsSequence',
    '00189734': 'PETTableDynamicsSequence',
    '00189735': 'PETPositionSequence',
    '00189736': 'PETFrameCorrectionFactorsSequence',
    '00189737': 'RadiopharmaceuticalUsageSequence',
    '00189738': 'AttenuationCorrectionSource',
    '00189739': 'NumberOfIterations',
    '00189740': 'NumberOfSubsets',
    '00189749': 'PETReconstructionSequence',
    '00189751': 'PETFrameTypeSequence',
    '00189755': 'TimeOfFlightInformationUsed',
    '00189756': 'ReconstructionType',
    '00189758': 'DecayCorrected',
    '00189759': 'AttenuationCorrected',
    '00189760': 'ScatterCorrected',
    '00189761': 'DeadTimeCorrected',
    '00189762': 'GantryMotionCorrected',
    '00189763': 'PatientMotionCorrected',
    '00189764': 'CountLossNormalizationCorrected',
    '00189765': 'RandomsCorrected',
    '00189766': 'NonUniformRadialSamplingCorrected',
    '00189767': 'SensitivityCalibrated',
    '00189768': 'DetectorNormalizationCorrection',
    '00189769': 'IterativeReconstructionMethod',
    '00189770': 'AttenuationCorrectionTemporalRelationship',
    '00189771': 'PatientPhysiologicalStateSequence',
    '00189772': 'PatientPhysiologicalStateCodeSequence',
    '00189801': 'DepthsOfFocus',
    '00189803': 'ExcludedIntervalsSequence',
    '00189804': 'ExclusionStartDateTime',
    '00189805': 'ExclusionDuration',
    '00189806': 'USImageDescriptionSequence',
    '00189807': 'ImageDataTypeSequence',
    '00189808': 'DataType',
    '00189809': 'TransducerScanPatternCodeSequence',
    '0018980B': 'AliasedDataType',
    '0018980C': 'PositionMeasuringDeviceUsed',
    '0018980D': 'TransducerGeometryCodeSequence',
    '0018980E': 'TransducerBeamSteeringCodeSequence',
    '0018980F': 'TransducerApplicationCodeSequence',
    '00189810': 'ZeroVelocityPixelValue',
    '00189900': 'ReferenceLocationLabel',
    '00189901': 'ReferenceLocationDescription',
    '00189902': 'ReferenceBasisCodeSequence',
    '00189903': 'ReferenceGeometryCodeSequence',
    '00189904': 'OffsetDistance',
    '00189905': 'OffsetDirection',
    '00189906': 'PotentialScheduledProtocolCodeSequence',
    '00189907': 'PotentialRequestedProcedureCodeSequence',
    '00189908': 'PotentialReasonsForProcedure',
    '00189909': 'PotentialReasonsForProcedureCodeSequence',
    '0018990A': 'PotentialDiagnosticTasks',
    '0018990B': 'ContraindicationsCodeSequence',
    '0018990C': 'ReferencedDefinedProtocolSequence',
    '0018990D': 'ReferencedPerformedProtocolSequence',
    '0018990E': 'PredecessorProtocolSequence',
    '0018990F': 'ProtocolPlanningInformation',
    '00189910': 'ProtocolDesignRationale',
    '00189911': 'PatientSpecificationSequence',
    '00189912': 'ModelSpecificationSequence',
    '00189913': 'ParametersSpecificationSequence',
    '00189914': 'InstructionSequence',
    '00189915': 'InstructionIndex',
    '00189916': 'InstructionText',
    '00189917': 'InstructionDescription',
    '00189918': 'InstructionPerformedFlag',
    '00189919': 'InstructionPerformedDateTime',
    '0018991A': 'InstructionPerformanceComment',
    '0018991B': 'PatientPositioningInstructionSequence',
    '0018991C': 'PositioningMethodCodeSequence',
    '0018991D': 'PositioningLandmarkSequence',
    '0018991E': 'TargetFrameOfReferenceUID',
    '0018991F': 'AcquisitionProtocolElementSpecificationSequence',
    '00189920': 'AcquisitionProtocolElementSequence',
    '00189921': 'ProtocolElementNumber',
    '00189922': 'ProtocolElementName',
    '00189923': 'ProtocolElementCharacteristicsSummary',
    '00189924': 'ProtocolElementPurpose',
    '00189930': 'AcquisitionMotion',
    '00189931': 'AcquisitionStartLocationSequence',
    '00189932': 'AcquisitionEndLocationSequence',
    '00189933': 'ReconstructionProtocolElementSpecificationSequence',
    '00189934': 'ReconstructionProtocolElementSequence',
    '00189935': 'StorageProtocolElementSpecificationSequence',
    '00189936': 'StorageProtocolElementSequence',
    '00189937': 'RequestedSeriesDescription',
    '00189938': 'SourceAcquisitionProtocolElementNumber',
    '00189939': 'SourceAcquisitionBeamNumber',
    '0018993A': 'SourceReconstructionProtocolElementNumber',
    '0018993B': 'ReconstructionStartLocationSequence',
    '0018993C': 'ReconstructionEndLocationSequence',
    '0018993D': 'ReconstructionAlgorithmSequence',
    '0018993E': 'ReconstructionTargetCenterLocationSequence',
    '00189941': 'ImageFilterDescription',
    '00189942': 'CTDIvolNotificationTrigger',
    '00189943': 'DLPNotificationTrigger',
    '00189944': 'AutoKVPSelectionType',
    '00189945': 'AutoKVPUpperBound',
    '00189946': 'AutoKVPLowerBound',
    '00189947': 'ProtocolDefinedPatientPosition',
    '0018A001': 'ContributingEquipmentSequence',
    '0018A002': 'ContributionDateTime',
    '0018A003': 'ContributionDescription',
    '0020000D': 'StudyInstanceUID',
    '0020000E': 'SeriesInstanceUID',
    '00200010': 'StudyID',
    '00200011': 'SeriesNumber',
    '00200012': 'AcquisitionNumber',
    '00200013': 'InstanceNumber',
    '00200014': 'IsotopeNumber',
    '00200015': 'PhaseNumber',
    '00200016': 'IntervalNumber',
    '00200017': 'TimeSlotNumber',
    '00200018': 'AngleNumber',
    '00200019': 'ItemNumber',
    '00200020': 'PatientOrientation',
    '00200022': 'OverlayNumber',
    '00200024': 'CurveNumber',
    '00200026': 'LUTNumber',
    '00200030': 'ImagePosition',
    '00200032': 'ImagePositionPatient',
    '00200035': 'ImageOrientation',
    '00200037': 'ImageOrientationPatient',
    '00200050': 'Location',
    '00200052': 'FrameOfReferenceUID',
    '00200060': 'Laterality',
    '00200062': 'ImageLaterality',
    '00200070': 'ImageGeometryType',
    '00200080': 'MaskingImage',
    '002000AA': 'ReportNumber',
    '00200100': 'TemporalPositionIdentifier',
    '00200105': 'NumberOfTemporalPositions',
    '00200110': 'TemporalResolution',
    '00200200': 'SynchronizationFrameOfReferenceUID',
    '00200242': 'SOPInstanceUIDOfConcatenationSource',
    '00201000': 'SeriesInStudy',
    '00201001': 'AcquisitionsInSeries',
    '00201002': 'ImagesInAcquisition',
    '00201003': 'ImagesInSeries',
    '00201004': 'AcquisitionsInStudy',
    '00201005': 'ImagesInStudy',
    '00201020': 'Reference',
    '0020103F': 'TargetPositionReferenceIndicator',
    '00201040': 'PositionReferenceIndicator',
    '00201041': 'SliceLocation',
    '00201070': 'OtherStudyNumbers',
    '00201200': 'NumberOfPatientRelatedStudies',
    '00201202': 'NumberOfPatientRelatedSeries',
    '00201204': 'NumberOfPatientRelatedInstances',
    '00201206': 'NumberOfStudyRelatedSeries',
    '00201208': 'NumberOfStudyRelatedInstances',
    '00201209': 'NumberOfSeriesRelatedInstances',
    '00203401': 'ModifyingDeviceID',
    '00203402': 'ModifiedImageID',
    '00203403': 'ModifiedImageDate',
    '00203404': 'ModifyingDeviceManufacturer',
    '00203405': 'ModifiedImageTime',
    '00203406': 'ModifiedImageDescription',
    '00204000': 'ImageComments',
    '00205000': 'OriginalImageIdentification',
    '00205002': 'OriginalImageIdentificationNomenclature',
    '00209056': 'StackID',
    '00209057': 'InStackPositionNumber',
    '00209071': 'FrameAnatomySequence',
    '00209072': 'FrameLaterality',
    '00209111': 'FrameContentSequence',
    '00209113': 'PlanePositionSequence',
    '00209116': 'PlaneOrientationSequence',
    '00209128': 'TemporalPositionIndex',
    '00209153': 'NominalCardiacTriggerDelayTime',
    '00209154': 'NominalCardiacTriggerTimePriorToRPeak',
    '00209155': 'ActualCardiacTriggerTimePriorToRPeak',
    '00209156': 'FrameAcquisitionNumber',
    '00209157': 'DimensionIndexValues',
    '00209158': 'FrameComments',
    '00209161': 'ConcatenationUID',
    '00209162': 'InConcatenationNumber',
    '00209163': 'InConcatenationTotalNumber',
    '00209164': 'DimensionOrganizationUID',
    '00209165': 'DimensionIndexPointer',
    '00209167': 'FunctionalGroupPointer',
    '00209170': 'UnassignedSharedConvertedAttributesSequence',
    '00209171': 'UnassignedPerFrameConvertedAttributesSequence',
    '00209172': 'ConversionSourceAttributesSequence',
    '00209213': 'DimensionIndexPrivateCreator',
    '00209221': 'DimensionOrganizationSequence',
    '00209222': 'DimensionIndexSequence',
    '00209228': 'ConcatenationFrameOffsetNumber',
    '00209238': 'FunctionalGroupPrivateCreator',
    '00209241': 'NominalPercentageOfCardiacPhase',
    '00209245': 'NominalPercentageOfRespiratoryPhase',
    '00209246': 'StartingRespiratoryAmplitude',
    '00209247': 'StartingRespiratoryPhase',
    '00209248': 'EndingRespiratoryAmplitude',
    '00209249': 'EndingRespiratoryPhase',
    '00209250': 'RespiratoryTriggerType',
    '00209251': 'RRIntervalTimeNominal',
    '00209252': 'ActualCardiacTriggerDelayTime',
    '00209253': 'RespiratorySynchronizationSequence',
    '00209254': 'RespiratoryIntervalTime',
    '00209255': 'NominalRespiratoryTriggerDelayTime',
    '00209256': 'RespiratoryTriggerDelayThreshold',
    '00209257': 'ActualRespiratoryTriggerDelayTime',
    '00209301': 'ImagePositionVolume',
    '00209302': 'ImageOrientationVolume',
    '00209307': 'UltrasoundAcquisitionGeometry',
    '00209308': 'ApexPosition',
    '00209309': 'VolumeToTransducerMappingMatrix',
    '0020930A': 'VolumeToTableMappingMatrix',
    '0020930B': 'VolumeToTransducerRelationship',
    '0020930C': 'PatientFrameOfReferenceSource',
    '0020930D': 'TemporalPositionTimeOffset',
    '0020930E': 'PlanePositionVolumeSequence',
    '0020930F': 'PlaneOrientationVolumeSequence',
    '00209310': 'TemporalPositionSequence',
    '00209311': 'DimensionOrganizationType',
    '00209312': 'VolumeFrameOfReferenceUID',
    '00209313': 'TableFrameOfReferenceUID',
    '00209421': 'DimensionDescriptionLabel',
    '00209450': 'PatientOrientationInFrameSequence',
    '00209453': 'FrameLabel',
    '00209518': 'AcquisitionIndex',
    '00209529': 'ContributingSOPInstancesReferenceSequence',
    '00209536': 'ReconstructionIndex',
    '00220001': 'LightPathFilterPassThroughWavelength',
    '00220002': 'LightPathFilterPassBand',
    '00220003': 'ImagePathFilterPassThroughWavelength',
    '00220004': 'ImagePathFilterPassBand',
    '00220005': 'PatientEyeMovementCommanded',
    '00220006': 'PatientEyeMovementCommandCodeSequence',
    '00220007': 'SphericalLensPower',
    '00220008': 'CylinderLensPower',
    '00220009': 'CylinderAxis',
    '0022000A': 'EmmetropicMagnification',
    '0022000B': 'IntraOcularPressure',
    '0022000C': 'HorizontalFieldOfView',
    '0022000D': 'PupilDilated',
    '0022000E': 'DegreeOfDilation',
    '00220010': 'StereoBaselineAngle',
    '00220011': 'StereoBaselineDisplacement',
    '00220012': 'StereoHorizontalPixelOffset',
    '00220013': 'StereoVerticalPixelOffset',
    '00220014': 'StereoRotation',
    '00220015': 'AcquisitionDeviceTypeCodeSequence',
    '00220016': 'IlluminationTypeCodeSequence',
    '00220017': 'LightPathFilterTypeStackCodeSequence',
    '00220018': 'ImagePathFilterTypeStackCodeSequence',
    '00220019': 'LensesCodeSequence',
    '0022001A': 'ChannelDescriptionCodeSequence',
    '0022001B': 'RefractiveStateSequence',
    '0022001C': 'MydriaticAgentCodeSequence',
    '0022001D': 'RelativeImagePositionCodeSequence',
    '0022001E': 'CameraAngleOfView',
    '00220020': 'StereoPairsSequence',
    '00220021': 'LeftImageSequence',
    '00220022': 'RightImageSequence',
    '00220028': 'StereoPairsPresent',
    '00220030': 'AxialLengthOfTheEye',
    '00220031': 'OphthalmicFrameLocationSequence',
    '00220032': 'ReferenceCoordinates',
    '00220035': 'DepthSpatialResolution',
    '00220036': 'MaximumDepthDistortion',
    '00220037': 'AlongScanSpatialResolution',
    '00220038': 'MaximumAlongScanDistortion',
    '00220039': 'OphthalmicImageOrientation',
    '00220041': 'DepthOfTransverseImage',
    '00220042': 'MydriaticAgentConcentrationUnitsSequence',
    '00220048': 'AcrossScanSpatialResolution',
    '00220049': 'MaximumAcrossScanDistortion',
    '0022004E': 'MydriaticAgentConcentration',
    '00220055': 'IlluminationWaveLength',
    '00220056': 'IlluminationPower',
    '00220057': 'IlluminationBandwidth',
    '00220058': 'MydriaticAgentSequence',
    '00221007': 'OphthalmicAxialMeasurementsRightEyeSequence',
    '00221008': 'OphthalmicAxialMeasurementsLeftEyeSequence',
    '00221009': 'OphthalmicAxialMeasurementsDeviceType',
    '00221010': 'OphthalmicAxialLengthMeasurementsType',
    '00221012': 'OphthalmicAxialLengthSequence',
    '00221019': 'OphthalmicAxialLength',
    '00221024': 'LensStatusCodeSequence',
    '00221025': 'VitreousStatusCodeSequence',
    '00221028': 'IOLFormulaCodeSequence',
    '00221029': 'IOLFormulaDetail',
    '00221033': 'KeratometerIndex',
    '00221035': 'SourceOfOphthalmicAxialLengthCodeSequence',
    '00221037': 'TargetRefraction',
    '00221039': 'RefractiveProcedureOccurred',
    '00221040': 'RefractiveSurgeryTypeCodeSequence',
    '00221044': 'OphthalmicUltrasoundMethodCodeSequence',
    '00221050': 'OphthalmicAxialLengthMeasurementsSequence',
    '00221053': 'IOLPower',
    '00221054': 'PredictedRefractiveError',
    '00221059': 'OphthalmicAxialLengthVelocity',
    '00221065': 'LensStatusDescription',
    '00221066': 'VitreousStatusDescription',
    '00221090': 'IOLPowerSequence',
    '00221092': 'LensConstantSequence',
    '00221093': 'IOLManufacturer',
    '00221094': 'LensConstantDescription',
    '00221095': 'ImplantName',
    '00221096': 'KeratometryMeasurementTypeCodeSequence',
    '00221097': 'ImplantPartNumber',
    '00221100': 'ReferencedOphthalmicAxialMeasurementsSequence',
    '00221101': 'OphthalmicAxialLengthMeasurementsSegmentNameCodeSequence',
    '00221103': 'RefractiveErrorBeforeRefractiveSurgeryCodeSequence',
    '00221121': 'IOLPowerForExactEmmetropia',
    '00221122': 'IOLPowerForExactTargetRefraction',
    '00221125': 'AnteriorChamberDepthDefinitionCodeSequence',
    '00221127': 'LensThicknessSequence',
    '00221128': 'AnteriorChamberDepthSequence',
    '00221130': 'LensThickness',
    '00221131': 'AnteriorChamberDepth',
    '00221132': 'SourceOfLensThicknessDataCodeSequence',
    '00221133': 'SourceOfAnteriorChamberDepthDataCodeSequence',
    '00221134': 'SourceOfRefractiveMeasurementsSequence',
    '00221135': 'SourceOfRefractiveMeasurementsCodeSequence',
    '00221140': 'OphthalmicAxialLengthMeasurementModified',
    '00221150': 'OphthalmicAxialLengthDataSourceCodeSequence',
    '00221153': 'OphthalmicAxialLengthAcquisitionMethodCodeSequence',
    '00221155': 'SignalToNoiseRatio',
    '00221159': 'OphthalmicAxialLengthDataSourceDescription',
    '00221210': 'OphthalmicAxialLengthMeasurementsTotalLengthSequence',
    '00221211': 'OphthalmicAxialLengthMeasurementsSegmentalLengthSequence',
    '00221212': 'OphthalmicAxialLengthMeasurementsLengthSummationSequence',
    '00221220': 'UltrasoundOphthalmicAxialLengthMeasurementsSequence',
    '00221225': 'OpticalOphthalmicAxialLengthMeasurementsSequence',
    '00221230': 'UltrasoundSelectedOphthalmicAxialLengthSequence',
    '00221250': 'OphthalmicAxialLengthSelectionMethodCodeSequence',
    '00221255': 'OpticalSelectedOphthalmicAxialLengthSequence',
    '00221257': 'SelectedSegmentalOphthalmicAxialLengthSequence',
    '00221260': 'SelectedTotalOphthalmicAxialLengthSequence',
    '00221262': 'OphthalmicAxialLengthQualityMetricSequence',
    '00221265': 'OphthalmicAxialLengthQualityMetricTypeCodeSequence',
    '00221273': 'OphthalmicAxialLengthQualityMetricTypeDescription',
    '00221300': 'IntraocularLensCalculationsRightEyeSequence',
    '00221310': 'IntraocularLensCalculationsLeftEyeSequence',
    '00221330': 'ReferencedOphthalmicAxialLengthMeasurementQCImageSequence',
    '00221415': 'OphthalmicMappingDeviceType',
    '00221420': 'AcquisitionMethodCodeSequence',
    '00221423': 'AcquisitionMethodAlgorithmSequence',
    '00221436': 'OphthalmicThicknessMapTypeCodeSequence',
    '00221443': 'OphthalmicThicknessMappingNormalsSequence',
    '00221445': 'RetinalThicknessDefinitionCodeSequence',
    '00221450': 'PixelValueMappingToCodedConceptSequence',
    '00221452': 'MappedPixelValue',
    '00221454': 'PixelValueMappingExplanation',
    '00221458': 'OphthalmicThicknessMapQualityThresholdSequence',
    '00221460': 'OphthalmicThicknessMapThresholdQualityRating',
    '00221463': 'AnatomicStructureReferencePoint',
    '00221465': 'RegistrationToLocalizerSequence',
    '00221466': 'RegisteredLocalizerUnits',
    '00221467': 'RegisteredLocalizerTopLeftHandCorner',
    '00221468': 'RegisteredLocalizerBottomRightHandCorner',
    '00221470': 'OphthalmicThicknessMapQualityRatingSequence',
    '00221472': 'RelevantOPTAttributesSequence',
    '00221512': 'TransformationMethodCodeSequence',
    '00221513': 'TransformationAlgorithmSequence',
    '00221515': 'OphthalmicAxialLengthMethod',
    '00221517': 'OphthalmicFOV',
    '00221518': 'TwoDimensionalToThreeDimensionalMapSequence',
    '00221525': 'WideFieldOphthalmicPhotographyQualityRatingSequence',
    '00221526': 'WideFieldOphthalmicPhotographyQualityThresholdSequence',
    '00221527': 'WideFieldOphthalmicPhotographyThresholdQualityRating',
    '00221528': 'XCoordinatesCenterPixelViewAngle',
    '00221529': 'YCoordinatesCenterPixelViewAngle',
    '00221530': 'NumberOfMapPoints',
    '00221531': 'TwoDimensionalToThreeDimensionalMapData',
    '00221612': 'DerivationAlgorithmSequence',
    '00221615': 'OphthalmicImageTypeCodeSequence',
    '00221616': 'OphthalmicImageTypeDescription',
    '00221618': 'ScanPatternTypeCodeSequence',
    '00221620': 'ReferencedSurfaceMeshIdentificationSequence',
    '00221622': 'OphthalmicVolumetricPropertiesFlag',
    '00221624': 'OphthalmicAnatomicReferencePointXCoordinate',
    '00221626': 'OphthalmicAnatomicReferencePointYCoordinate',
    '00221628': 'OphthalmicEnFaceImageQualityRatingSequence',
    '00221630': 'QualityThreshold',
    '00221640': 'OCTBscanAnalysisAcquisitionParametersSequence',
    '00221642': 'NumberofBscansPerFrame',
    '00221643': 'BscanSlabThickness',
    '00221644': 'DistanceBetweenBscanSlabs',
    '00221645': 'BscanCycleTime',
    '00221646': 'BscanCycleTimeVector',
    '00221649': 'AscanRate',
    '00221650': 'BscanRate',
    '00221658': 'SurfaceMeshZPixelOffset',
    '00240010': 'VisualFieldHorizontalExtent',
    '00240011': 'VisualFieldVerticalExtent',
    '00240012': 'VisualFieldShape',
    '00240016': 'ScreeningTestModeCodeSequence',
    '00240018': 'MaximumStimulusLuminance',
    '00240020': 'BackgroundLuminance',
    '00240021': 'StimulusColorCodeSequence',
    '00240024': 'BackgroundIlluminationColorCodeSequence',
    '00240025': 'StimulusArea',
    '00240028': 'StimulusPresentationTime',
    '00240032': 'FixationSequence',
    '00240033': 'FixationMonitoringCodeSequence',
    '00240034': 'VisualFieldCatchTrialSequence',
    '00240035': 'FixationCheckedQuantity',
    '00240036': 'PatientNotProperlyFixatedQuantity',
    '00240037': 'PresentedVisualStimuliDataFlag',
    '00240038': 'NumberOfVisualStimuli',
    '00240039': 'ExcessiveFixationLossesDataFlag',
    '00240040': 'ExcessiveFixationLosses',
    '00240042': 'StimuliRetestingQuantity',
    '00240044': 'CommentsOnPatientPerformanceOfVisualField',
    '00240045': 'FalseNegativesEstimateFlag',
    '00240046': 'FalseNegativesEstimate',
    '00240048': 'NegativeCatchTrialsQuantity',
    '00240050': 'FalseNegativesQuantity',
    '00240051': 'ExcessiveFalseNegativesDataFlag',
    '00240052': 'ExcessiveFalseNegatives',
    '00240053': 'FalsePositivesEstimateFlag',
    '00240054': 'FalsePositivesEstimate',
    '00240055': 'CatchTrialsDataFlag',
    '00240056': 'PositiveCatchTrialsQuantity',
    '00240057': 'TestPointNormalsDataFlag',
    '00240058': 'TestPointNormalsSequence',
    '00240059': 'GlobalDeviationProbabilityNormalsFlag',
    '00240060': 'FalsePositivesQuantity',
    '00240061': 'ExcessiveFalsePositivesDataFlag',
    '00240062': 'ExcessiveFalsePositives',
    '00240063': 'VisualFieldTestNormalsFlag',
    '00240064': 'ResultsNormalsSequence',
    '00240065': 'AgeCorrectedSensitivityDeviationAlgorithmSequence',
    '00240066': 'GlobalDeviationFromNormal',
    '00240067': 'GeneralizedDefectSensitivityDeviationAlgorithmSequence',
    '00240068': 'LocalizedDeviationFromNormal',
    '00240069': 'PatientReliabilityIndicator',
    '00240070': 'VisualFieldMeanSensitivity',
    '00240071': 'GlobalDeviationProbability',
    '00240072': 'LocalDeviationProbabilityNormalsFlag',
    '00240073': 'LocalizedDeviationProbability',
    '00240074': 'ShortTermFluctuationCalculated',
    '00240075': 'ShortTermFluctuation',
    '00240076': 'ShortTermFluctuationProbabilityCalculated',
    '00240077': 'ShortTermFluctuationProbability',
    '00240078': 'CorrectedLocalizedDeviationFromNormalCalculated',
    '00240079': 'CorrectedLocalizedDeviationFromNormal',
    '00240080': 'CorrectedLocalizedDeviationFromNormalProbabilityCalculated',
    '00240081': 'CorrectedLocalizedDeviationFromNormalProbability',
    '00240083': 'GlobalDeviationProbabilitySequence',
    '00240085': 'LocalizedDeviationProbabilitySequence',
    '00240086': 'FovealSensitivityMeasured',
    '00240087': 'FovealSensitivity',
    '00240088': 'VisualFieldTestDuration',
    '00240089': 'VisualFieldTestPointSequence',
    '00240090': 'VisualFieldTestPointXCoordinate',
    '00240091': 'VisualFieldTestPointYCoordinate',
    '00240092': 'AgeCorrectedSensitivityDeviationValue',
    '00240093': 'StimulusResults',
    '00240094': 'SensitivityValue',
    '00240095': 'RetestStimulusSeen',
    '00240096': 'RetestSensitivityValue',
    '00240097': 'VisualFieldTestPointNormalsSequence',
    '00240098': 'QuantifiedDefect',
    '00240100': 'AgeCorrectedSensitivityDeviationProbabilityValue',
    '00240102': 'GeneralizedDefectCorrectedSensitivityDeviationFlag',
    '00240103': 'GeneralizedDefectCorrectedSensitivityDeviationValue',
    '00240104': 'GeneralizedDefectCorrectedSensitivityDeviationProbabilityValue',
    '00240105': 'MinimumSensitivityValue',
    '00240106': 'BlindSpotLocalized',
    '00240107': 'BlindSpotXCoordinate',
    '00240108': 'BlindSpotYCoordinate',
    '00240110': 'VisualAcuityMeasurementSequence',
    '00240112': 'RefractiveParametersUsedOnPatientSequence',
    '00240113': 'MeasurementLaterality',
    '00240114': 'OphthalmicPatientClinicalInformationLeftEyeSequence',
    '00240115': 'OphthalmicPatientClinicalInformationRightEyeSequence',
    '00240117': 'FovealPointNormativeDataFlag',
    '00240118': 'FovealPointProbabilityValue',
    '00240120': 'ScreeningBaselineMeasured',
    '00240122': 'ScreeningBaselineMeasuredSequence',
    '00240124': 'ScreeningBaselineType',
    '00240126': 'ScreeningBaselineValue',
    '00240202': 'AlgorithmSource',
    '00240306': 'DataSetName',
    '00240307': 'DataSetVersion',
    '00240308': 'DataSetSource',
    '00240309': 'DataSetDescription',
    '00240317': 'VisualFieldTestReliabilityGlobalIndexSequence',
    '00240320': 'VisualFieldGlobalResultsIndexSequence',
    '00240325': 'DataObservationSequence',
    '00240338': 'IndexNormalsFlag',
    '00240341': 'IndexProbability',
    '00240344': 'IndexProbabilitySequence',
    '00280002': 'SamplesPerPixel',
    '00280003': 'SamplesPerPixelUsed',
    '00280004': 'PhotometricInterpretation',
    '00280005': 'ImageDimensions',
    '00280006': 'PlanarConfiguration',
    '00280008': 'NumberOfFrames',
    '00280009': 'FrameIncrementPointer',
    '0028000A': 'FrameDimensionPointer',
    '00280010': 'Rows',
    '00280011': 'Columns',
    '00280012': 'Planes',
    '00280014': 'UltrasoundColorDataPresent',
    '00280020': '',
    '00280030': 'PixelSpacing',
    '00280031': 'ZoomFactor',
    '00280032': 'ZoomCenter',
    '00280034': 'PixelAspectRatio',
    '00280040': 'ImageFormat',
    '00280050': 'ManipulatedImage',
    '00280051': 'CorrectedImage',
    '0028005F': 'CompressionRecognitionCode',
    '00280060': 'CompressionCode',
    '00280061': 'CompressionOriginator',
    '00280062': 'CompressionLabel',
    '00280063': 'CompressionDescription',
    '00280065': 'CompressionSequence',
    '00280066': 'CompressionStepPointers',
    '00280068': 'RepeatInterval',
    '00280069': 'BitsGrouped',
    '00280070': 'PerimeterTable',
    '00280071': 'PerimeterValue',
    '00280080': 'PredictorRows',
    '00280081': 'PredictorColumns',
    '00280082': 'PredictorConstants',
    '00280090': 'BlockedPixels',
    '00280091': 'BlockRows',
    '00280092': 'BlockColumns',
    '00280093': 'RowOverlap',
    '00280094': 'ColumnOverlap',
    '00280100': 'BitsAllocated',
    '00280101': 'BitsStored',
    '00280102': 'HighBit',
    '00280103': 'PixelRepresentation',
    '00280104': 'SmallestValidPixelValue',
    '00280105': 'LargestValidPixelValue',
    '00280106': 'SmallestImagePixelValue',
    '00280107': 'LargestImagePixelValue',
    '00280108': 'SmallestPixelValueInSeries',
    '00280109': 'LargestPixelValueInSeries',
    '00280110': 'SmallestImagePixelValueInPlane',
    '00280111': 'LargestImagePixelValueInPlane',
    '00280120': 'PixelPaddingValue',
    '00280121': 'PixelPaddingRangeLimit',
    '00280122': 'FloatPixelPaddingValue',
    '00280123': 'DoubleFloatPixelPaddingValue',
    '00280124': 'FloatPixelPaddingRangeLimit',
    '00280125': 'DoubleFloatPixelPaddingRangeLimit',
    '00280200': 'ImageLocation',
    '00280300': 'QualityControlImage',
    '00280301': 'BurnedInAnnotation',
    '00280302': 'RecognizableVisualFeatures',
    '00280303': 'LongitudinalTemporalInformationModified',
    '00280304': 'ReferencedColorPaletteInstanceUID',
    '00280400': 'TransformLabel',
    '00280401': 'TransformVersionNumber',
    '00280402': 'NumberOfTransformSteps',
    '00280403': 'SequenceOfCompressedData',
    '00280404': 'DetailsOfCoefficients',
    '00280700': 'DCTLabel',
    '00280701': 'DataBlockDescription',
    '00280702': 'DataBlock',
    '00280710': 'NormalizationFactorFormat',
    '00280720': 'ZonalMapNumberFormat',
    '00280721': 'ZonalMapLocation',
    '00280722': 'ZonalMapFormat',
    '00280730': 'AdaptiveMapFormat',
    '00280740': 'CodeNumberFormat',
    '00280A02': 'PixelSpacingCalibrationType',
    '00280A04': 'PixelSpacingCalibrationDescription',
    '00281040': 'PixelIntensityRelationship',
    '00281041': 'PixelIntensityRelationshipSign',
    '00281050': 'WindowCenter',
    '00281051': 'WindowWidth',
    '00281052': 'RescaleIntercept',
    '00281053': 'RescaleSlope',
    '00281054': 'RescaleType',
    '00281055': 'WindowCenterWidthExplanation',
    '00281056': 'VOILUTFunction',
    '00281080': 'GrayScale',
    '00281090': 'RecommendedViewingMode',
    '00281100': 'GrayLookupTableDescriptor',
    '00281101': 'RedPaletteColorLookupTableDescriptor',
    '00281102': 'GreenPaletteColorLookupTableDescriptor',
    '00281103': 'BluePaletteColorLookupTableDescriptor',
    '00281104': 'AlphaPaletteColorLookupTableDescriptor',
    '00281111': 'LargeRedPaletteColorLookupTableDescriptor',
    '00281112': 'LargeGreenPaletteColorLookupTableDescriptor',
    '00281113': 'LargeBluePaletteColorLookupTableDescriptor',
    '00281199': 'PaletteColorLookupTableUID',
    '00281200': 'GrayLookupTableData',
    '00281201': 'RedPaletteColorLookupTableData',
    '00281202': 'GreenPaletteColorLookupTableData',
    '00281203': 'BluePaletteColorLookupTableData',
    '00281204': 'AlphaPaletteColorLookupTableData',
    '00281211': 'LargeRedPaletteColorLookupTableData',
    '00281212': 'LargeGreenPaletteColorLookupTableData',
    '00281213': 'LargeBluePaletteColorLookupTableData',
    '00281214': 'LargePaletteColorLookupTableUID',
    '00281221': 'SegmentedRedPaletteColorLookupTableData',
    '00281222': 'SegmentedGreenPaletteColorLookupTableData',
    '00281223': 'SegmentedBluePaletteColorLookupTableData',
    '00281224': 'SegmentedAlphaPaletteColorLookupTableData',
    '00281230': 'StoredValueColorRangeSequence',
    '00281231': 'MinimumStoredValueMapped',
    '00281232': 'MaximumStoredValueMapped',
    '00281300': 'BreastImplantPresent',
    '00281350': 'PartialView',
    '00281351': 'PartialViewDescription',
    '00281352': 'PartialViewCodeSequence',
    '0028135A': 'SpatialLocationsPreserved',
    '00281401': 'DataFrameAssignmentSequence',
    '00281402': 'DataPathAssignment',
    '00281403': 'BitsMappedToColorLookupTable',
    '00281404': ('BlendingLUT1Sequence'),
    '00281405': ('BlendingLUT1TransferFunction'),
    '00281406': 'BlendingWeightConstant',
    '00281407': 'BlendingLookupTableDescriptor',
    '00281408': 'BlendingLookupTableData',
    '0028140B': 'EnhancedPaletteColorLookupTableSequence',
    '0028140C': ('BlendingLUT2Sequence'),
    '0028140D': ('BlendingLUT2TransferFunction'),
    '0028140E': 'DataPathID',
    '0028140F': 'RGBLUTTransferFunction',
    '00281410': 'AlphaLUTTransferFunction',
    '00282000': 'ICCProfile',
    '00282002': 'ColorSpace',
    '00282110': 'LossyImageCompression',
    '00282112': 'LossyImageCompressionRatio',
    '00282114': 'LossyImageCompressionMethod',
    '00283000': 'ModalityLUTSequence',
    '00283002': 'LUTDescriptor',
    '00283003': 'LUTExplanation',
    '00283004': 'ModalityLUTType',
    '00283006': 'LUTData',
    '00283010': 'VOILUTSequence',
    '00283110': 'SoftcopyVOILUTSequence',
    '00284000': 'ImagePresentationComments',
    '00285000': 'BiPlaneAcquisitionSequence',
    '00286010': 'RepresentativeFrameNumber',
    '00286020': 'FrameNumbersOfInterest',
    '00286022': 'FrameOfInterestDescription',
    '00286023': 'FrameOfInterestType',
    '00286030': 'MaskPointers',
    '00286040': 'RWavePointer',
    '00286100': 'MaskSubtractionSequence',
    '00286101': 'MaskOperation',
    '00286102': 'ApplicableFrameRange',
    '00286110': 'MaskFrameNumbers',
    '00286112': 'ContrastFrameAveraging',
    '00286114': 'MaskSubPixelShift',
    '00286120': 'TIDOffset',
    '00286190': 'MaskOperationExplanation',
    '00287000': 'EquipmentAdministratorSequence',
    '00287001': 'NumberOfDisplaySubsystems',
    '00287002': 'CurrentConfigurationID',
    '00287003': 'DisplaySubsystemID',
    '00287004': 'DisplaySubsystemName',
    '00287005': 'DisplaySubsystemDescription',
    '00287006': 'SystemStatus',
    '00287007': 'SystemStatusComment',
    '00287008': 'TargetLuminanceCharacteristicsSequence',
    '00287009': 'LuminanceCharacteristicsID',
    '0028700A': 'DisplaySubsystemConfigurationSequence',
    '0028700B': 'ConfigurationID',
    '0028700C': 'ConfigurationName',
    '0028700D': 'ConfigurationDescription',
    '0028700E': 'ReferencedTargetLuminanceCharacteristicsID',
    '0028700F': 'QAResultsSequence',
    '00287010': 'DisplaySubsystemQAResultsSequence',
    '00287011': 'ConfigurationQAResultsSequence',
    '00287012': 'MeasurementEquipmentSequence',
    '00287013': 'MeasurementFunctions',
    '00287014': 'MeasurementEquipmentType',
    '00287015': 'VisualEvaluationResultSequence',
    '00287016': 'DisplayCalibrationResultSequence',
    '00287017': 'DDLValue',
    '00287018': 'CIExyWhitePoint',
    '00287019': 'DisplayFunctionType',
    '0028701A': 'GammaValue',
    '0028701B': 'NumberOfLuminancePoints',
    '0028701C': 'LuminanceResponseSequence',
    '0028701D': 'TargetMinimumLuminance',
    '0028701E': 'TargetMaximumLuminance',
    '0028701F': 'LuminanceValue',
    '00287020': 'LuminanceResponseDescription',
    '00287021': 'WhitePointFlag',
    '00287022': 'DisplayDeviceTypeCodeSequence',
    '00287023': 'DisplaySubsystemSequence',
    '00287024': 'LuminanceResultSequence',
    '00287025': 'AmbientLightValueSource',
    '00287026': 'MeasuredCharacteristics',
    '00287027': 'LuminanceUniformityResultSequence',
    '00287028': 'VisualEvaluationTestSequence',
    '00287029': 'TestResult',
    '0028702A': 'TestResultComment',
    '0028702B': 'TestImageValidation',
    '0028702C': 'TestPatternCodeSequence',
    '0028702D': 'MeasurementPatternCodeSequence',
    '0028702E': 'VisualEvaluationMethodCodeSequence',
    '00287FE0': 'PixelDataProviderURL',
    '00289001': 'DataPointRows',
    '00289002': 'DataPointColumns',
    '00289003': 'SignalDomainColumns',
    '00289099': 'LargestMonochromePixelValue',
    '00289108': 'DataRepresentation',
    '00289110': 'PixelMeasuresSequence',
    '00289132': 'FrameVOILUTSequence',
    '00289145': 'PixelValueTransformationSequence',
    '00289235': 'SignalDomainRows',
    '00289411': 'DisplayFilterPercentage',
    '00289415': 'FramePixelShiftSequence',
    '00289416': 'SubtractionItemID',
    '00289422': 'PixelIntensityRelationshipLUTSequence',
    '00289443': 'FramePixelDataPropertiesSequence',
    '00289444': 'GeometricalProperties',
    '00289445': 'GeometricMaximumDistortion',
    '00289446': 'ImageProcessingApplied',
    '00289454': 'MaskSelectionMode',
    '00289474': 'LUTFunction',
    '00289478': 'MaskVisibilityPercentage',
    '00289501': 'PixelShiftSequence',
    '00289502': 'RegionPixelShiftSequence',
    '00289503': 'VerticesOfTheRegion',
    '00289505': 'MultiFramePresentationSequence',
    '00289506': 'PixelShiftFrameRange',
    '00289507': 'LUTFrameRange',
    '00289520': 'ImageToEquipmentMappingMatrix',
    '00289537': 'EquipmentCoordinateSystemIdentification',
    '0032000A': 'StudyStatusID',
    '0032000C': 'StudyPriorityID',
    '00320012': 'StudyIDIssuer',
    '00320032': 'StudyVerifiedDate',
    '00320033': 'StudyVerifiedTime',
    '00320034': 'StudyReadDate',
    '00320035': 'StudyReadTime',
    '00321000': 'ScheduledStudyStartDate',
    '00321001': 'ScheduledStudyStartTime',
    '00321010': 'ScheduledStudyStopDate',
    '00321011': 'ScheduledStudyStopTime',
    '00321020': 'ScheduledStudyLocation',
    '00321021': 'ScheduledStudyLocationAETitle',
    '00321030': 'ReasonForStudy',
    '00321031': 'RequestingPhysicianIdentificationSequence',
    '00321032': 'RequestingPhysician',
    '00321033': 'RequestingService',
    '00321034': 'RequestingServiceCodeSequence',
    '00321040': 'StudyArrivalDate',
    '00321041': 'StudyArrivalTime',
    '00321050': 'StudyCompletionDate',
    '00321051': 'StudyCompletionTime',
    '00321055': 'StudyComponentStatusID',
    '00321060': 'RequestedProcedureDescription',
    '00321064': 'RequestedProcedureCodeSequence',
    '00321070': 'RequestedContrastAgent',
    '00324000': 'StudyComments',
    '00380004': 'ReferencedPatientAliasSequence',
    '00380008': 'VisitStatusID',
    '00380010': 'AdmissionID',
    '00380011': 'IssuerOfAdmissionID',
    '00380014': 'IssuerOfAdmissionIDSequence',
    '00380016': 'RouteOfAdmissions',
    '0038001A': 'ScheduledAdmissionDate',
    '0038001B': 'ScheduledAdmissionTime',
    '0038001C': 'ScheduledDischargeDate',
    '0038001D': 'ScheduledDischargeTime',
    '0038001E': 'ScheduledPatientInstitutionResidence',
    '00380020': 'AdmittingDate',
    '00380021': 'AdmittingTime',
    '00380030': 'DischargeDate',
    '00380032': 'DischargeTime',
    '00380040': 'DischargeDiagnosisDescription',
    '00380044': 'DischargeDiagnosisCodeSequence',
    '00380050': 'SpecialNeeds',
    '00380060': 'ServiceEpisodeID',
    '00380061': 'IssuerOfServiceEpisodeID',
    '00380062': 'ServiceEpisodeDescription',
    '00380064': 'IssuerOfServiceEpisodeIDSequence',
    '00380100': 'PertinentDocumentsSequence',
    '00380101': 'PertinentResourcesSequence',
    '00380102': 'ResourceDescription',
    '00380300': 'CurrentPatientLocation',
    '00380400': 'PatientInstitutionResidence',
    '00380500': 'PatientState',
    '00380502': 'PatientClinicalTrialParticipationSequence',
    '00384000': 'VisitComments',
    '003A0004': 'WaveformOriginality',
    '003A0005': 'NumberOfWaveformChannels',
    '003A0010': 'NumberOfWaveformSamples',
    '003A001A': 'SamplingFrequency',
    '003A0020': 'MultiplexGroupLabel',
    '003A0200': 'ChannelDefinitionSequence',
    '003A0202': 'WaveformChannelNumber',
    '003A0203': 'ChannelLabel',
    '003A0205': 'ChannelStatus',
    '003A0208': 'ChannelSourceSequence',
    '003A0209': 'ChannelSourceModifiersSequence',
    '003A020A': 'SourceWaveformSequence',
    '003A020C': 'ChannelDerivationDescription',
    '003A0210': 'ChannelSensitivity',
    '003A0211': 'ChannelSensitivityUnitsSequence',
    '003A0212': 'ChannelSensitivityCorrectionFactor',
    '003A0213': 'ChannelBaseline',
    '003A0214': 'ChannelTimeSkew',
    '003A0215': 'ChannelSampleSkew',
    '003A0218': 'ChannelOffset',
    '003A021A': 'WaveformBitsStored',
    '003A0220': 'FilterLowFrequency',
    '003A0221': 'FilterHighFrequency',
    '003A0222': 'NotchFilterFrequency',
    '003A0223': 'NotchFilterBandwidth',
    '003A0230': 'WaveformDataDisplayScale',
    '003A0231': 'WaveformDisplayBackgroundCIELabValue',
    '003A0240': 'WaveformPresentationGroupSequence',
    '003A0241': 'PresentationGroupNumber',
    '003A0242': 'ChannelDisplaySequence',
    '003A0244': 'ChannelRecommendedDisplayCIELabValue',
    '003A0245': 'ChannelPosition',
    '003A0246': 'DisplayShadingFlag',
    '003A0247': 'FractionalChannelDisplayScale',
    '003A0248': 'AbsoluteChannelDisplayScale',
    '003A0300': 'MultiplexedAudioChannelsDescriptionCodeSequence',
    '003A0301': 'ChannelIdentificationCode',
    '003A0302': 'ChannelMode',
    '00400001': 'ScheduledStationAETitle',
    '00400002': 'ScheduledProcedureStepStartDate',
    '00400003': 'ScheduledProcedureStepStartTime',
    '00400004': 'ScheduledProcedureStepEndDate',
    '00400005': 'ScheduledProcedureStepEndTime',
    '00400006': 'ScheduledPerformingPhysicianName',
    '00400007': 'ScheduledProcedureStepDescription',
    '00400008': 'ScheduledProtocolCodeSequence',
    '00400009': 'ScheduledProcedureStepID',
    '0040000A': 'StageCodeSequence',
    '0040000B': 'ScheduledPerformingPhysicianIdentificationSequence',
    '00400010': 'ScheduledStationName',
    '00400011': 'ScheduledProcedureStepLocation',
    '00400012': 'PreMedication',
    '00400020': 'ScheduledProcedureStepStatus',
    '00400026': 'OrderPlacerIdentifierSequence',
    '00400027': 'OrderFillerIdentifierSequence',
    '00400031': 'LocalNamespaceEntityID',
    '00400032': 'UniversalEntityID',
    '00400033': 'UniversalEntityIDType',
    '00400035': 'IdentifierTypeCode',
    '00400036': 'AssigningFacilitySequence',
    '00400039': 'AssigningJurisdictionCodeSequence',
    '0040003A': 'AssigningAgencyOrDepartmentCodeSequence',
    '00400100': 'ScheduledProcedureStepSequence',
    '00400220': 'ReferencedNonImageCompositeSOPInstanceSequence',
    '00400241': 'PerformedStationAETitle',
    '00400242': 'PerformedStationName',
    '00400243': 'PerformedLocation',
    '00400244': 'PerformedProcedureStepStartDate',
    '00400245': 'PerformedProcedureStepStartTime',
    '00400250': 'PerformedProcedureStepEndDate',
    '00400251': 'PerformedProcedureStepEndTime',
    '00400252': 'PerformedProcedureStepStatus',
    '00400253': 'PerformedProcedureStepID',
    '00400254': 'PerformedProcedureStepDescription',
    '00400255': 'PerformedProcedureTypeDescription',
    '00400260': 'PerformedProtocolCodeSequence',
    '00400261': 'PerformedProtocolType',
    '00400270': 'ScheduledStepAttributesSequence',
    '00400275': 'RequestAttributesSequence',
    '00400280': 'CommentsOnThePerformedProcedureStep',
    '00400281': 'PerformedProcedureStepDiscontinuationReasonCodeSequence',
    '00400293': 'QuantitySequence',
    '00400294': 'Quantity',
    '00400295': 'MeasuringUnitsSequence',
    '00400296': 'BillingItemSequence',
    '00400300': 'TotalTimeOfFluoroscopy',
    '00400301': 'TotalNumberOfExposures',
    '00400302': 'EntranceDose',
    '00400303': 'ExposedArea',
    '00400306': 'DistanceSourceToEntrance',
    '00400307': 'DistanceSourceToSupport',
    '0040030E': 'ExposureDoseSequence',
    '00400310': 'CommentsOnRadiationDose',
    '00400312': 'XRayOutput',
    '00400314': 'HalfValueLayer',
    '00400316': 'OrganDose',
    '00400318': 'OrganExposed',
    '00400320': 'BillingProcedureStepSequence',
    '00400321': 'FilmConsumptionSequence',
    '00400324': 'BillingSuppliesAndDevicesSequence',
    '00400330': 'ReferencedProcedureStepSequence',
    '00400340': 'PerformedSeriesSequence',
    '00400400': 'CommentsOnTheScheduledProcedureStep',
    '00400440': 'ProtocolContextSequence',
    '00400441': 'ContentItemModifierSequence',
    '00400500': 'ScheduledSpecimenSequence',
    '0040050A': 'SpecimenAccessionNumber',
    '00400512': 'ContainerIdentifier',
    '00400513': 'IssuerOfTheContainerIdentifierSequence',
    '00400515': 'AlternateContainerIdentifierSequence',
    '00400518': 'ContainerTypeCodeSequence',
    '0040051A': 'ContainerDescription',
    '00400520': 'ContainerComponentSequence',
    '00400550': 'SpecimenSequence',
    '00400551': 'SpecimenIdentifier',
    '00400552': 'SpecimenDescriptionSequenceTrial',
    '00400553': 'SpecimenDescriptionTrial',
    '00400554': 'SpecimenUID',
    '00400555': 'AcquisitionContextSequence',
    '00400556': 'AcquisitionContextDescription',
    '00400560': 'SpecimenDescriptionSequence',
    '00400562': 'IssuerOfTheSpecimenIdentifierSequence',
    '0040059A': 'SpecimenTypeCodeSequence',
    '00400600': 'SpecimenShortDescription',
    '00400602': 'SpecimenDetailedDescription',
    '00400610': 'SpecimenPreparationSequence',
    '00400612': 'SpecimenPreparationStepContentItemSequence',
    '00400620': 'SpecimenLocalizationContentItemSequence',
    '004006FA': 'SlideIdentifier',
    '00400710': 'WholeSlideMicroscopyImageFrameTypeSequence',
    '0040071A': 'ImageCenterPointCoordinatesSequence',
    '0040072A': 'XOffsetInSlideCoordinateSystem',
    '0040073A': 'YOffsetInSlideCoordinateSystem',
    '0040074A': 'ZOffsetInSlideCoordinateSystem',
    '004008D8': 'PixelSpacingSequence',
    '004008DA': 'CoordinateSystemAxisCodeSequence',
    '004008EA': 'MeasurementUnitsCodeSequence',
    '004009F8': 'VitalStainCodeSequenceTrial',
    '00401001': 'RequestedProcedureID',
    '00401002': 'ReasonForTheRequestedProcedure',
    '00401003': 'RequestedProcedurePriority',
    '00401004': 'PatientTransportArrangements',
    '00401005': 'RequestedProcedureLocation',
    '00401006': 'PlacerOrderNumberProcedure',
    '00401007': 'FillerOrderNumberProcedure',
    '00401008': 'ConfidentialityCode',
    '00401009': 'ReportingPriority',
    '0040100A': 'ReasonForRequestedProcedureCodeSequence',
    '00401010': 'NamesOfIntendedRecipientsOfResults',
    '00401011': 'IntendedRecipientsOfResultsIdentificationSequence',
    '00401012': 'ReasonForPerformedProcedureCodeSequence',
    '00401060': 'RequestedProcedureDescriptionTrial',
    '00401101': 'PersonIdentificationCodeSequence',
    '00401102': 'PersonAddress',
    '00401103': 'PersonTelephoneNumbers',
    '00401104': 'PersonTelecomInformation',
    '00401400': 'RequestedProcedureComments',
    '00402001': 'ReasonForTheImagingServiceRequest',
    '00402004': 'IssueDateOfImagingServiceRequest',
    '00402005': 'IssueTimeOfImagingServiceRequest',
    '00402006': 'PlacerOrderNumberImagingServiceRequestRetired',
    '00402007': 'FillerOrderNumberImagingServiceRequestRetired',
    '00402008': 'OrderEnteredBy',
    '00402009': 'OrderEntererLocation',
    '00402010': 'OrderCallbackPhoneNumber',
    '00402011': 'OrderCallbackTelecomInformation',
    '00402016': 'PlacerOrderNumberImagingServiceRequest',
    '00402017': 'FillerOrderNumberImagingServiceRequest',
    '00402400': 'ImagingServiceRequestComments',
    '00403001': 'ConfidentialityConstraintOnPatientDataDescription',
    '00404001': 'GeneralPurposeScheduledProcedureStepStatus',
    '00404002': 'GeneralPurposePerformedProcedureStepStatus',
    '00404003': 'GeneralPurposeScheduledProcedureStepPriority',
    '00404004': 'ScheduledProcessingApplicationsCodeSequence',
    '00404005': 'ScheduledProcedureStepStartDateTime',
    '00404006': 'MultipleCopiesFlag',
    '00404007': 'PerformedProcessingApplicationsCodeSequence',
    '00404008': 'ScheduledProcedureStepExpirationDateTime',
    '00404009': 'HumanPerformerCodeSequence',
    '00404010': 'ScheduledProcedureStepModificationDateTime',
    '00404011': 'ExpectedCompletionDateTime',
    '00404015': 'ResultingGeneralPurposePerformedProcedureStepsSequence',
    '00404016': 'ReferencedGeneralPurposeScheduledProcedureStepSequence',
    '00404018': 'ScheduledWorkitemCodeSequence',
    '00404019': 'PerformedWorkitemCodeSequence',
    '00404020': 'InputAvailabilityFlag',
    '00404021': 'InputInformationSequence',
    '00404022': 'RelevantInformationSequence',
    '00404023': 'ReferencedGeneralPurposeScheduledProcedureStepTransactionUID',
    '00404025': 'ScheduledStationNameCodeSequence',
    '00404026': 'ScheduledStationClassCodeSequence',
    '00404027': 'ScheduledStationGeographicLocationCodeSequence',
    '00404028': 'PerformedStationNameCodeSequence',
    '00404029': 'PerformedStationClassCodeSequence',
    '00404030': 'PerformedStationGeographicLocationCodeSequence',
    '00404031': 'RequestedSubsequentWorkitemCodeSequence',
    '00404032': 'NonDICOMOutputCodeSequence',
    '00404033': 'OutputInformationSequence',
    '00404034': 'ScheduledHumanPerformersSequence',
    '00404035': 'ActualHumanPerformersSequence',
    '00404036': 'HumanPerformerOrganization',
    '00404037': 'HumanPerformerName',
    '00404040': 'RawDataHandling',
    '00404041': 'InputReadinessState',
    '00404050': 'PerformedProcedureStepStartDateTime',
    '00404051': 'PerformedProcedureStepEndDateTime',
    '00404052': 'ProcedureStepCancellationDateTime',
    '00404070': 'OutputDestinationSequence',
    '00404071': 'DICOMStorageSequence',
    '00404072': 'STOWRSStorageSequence',
    '00404073': 'StorageURL',
    '00404074': 'XDSStorageSequence',
    '00408302': 'EntranceDoseInmGy',
    '00408303': 'EntranceDoseDerivation',
    '00409092': 'ParametricMapFrameTypeSequence',
    '00409094': 'ReferencedImageRealWorldValueMappingSequence',
    '00409096': 'RealWorldValueMappingSequence',
    '00409098': 'PixelValueMappingCodeSequence',
    '00409210': 'LUTLabel',
    '00409211': 'RealWorldValueLastValueMapped',
    '00409212': 'RealWorldValueLUTData',
    '00409213': 'DoubleFloatRealWorldValueLastValueMapped',
    '00409214': 'DoubleFloatRealWorldValueFirstValueMapped',
    '00409216': 'RealWorldValueFirstValueMapped',
    '00409220': 'QuantityDefinitionSequence',
    '00409224': 'RealWorldValueIntercept',
    '00409225': 'RealWorldValueSlope',
    '0040A007': 'FindingsFlagTrial',
    '0040A010': 'RelationshipType',
    '0040A020': 'FindingsSequenceTrial',
    '0040A021': 'FindingsGroupUIDTrial',
    '0040A022': 'ReferencedFindingsGroupUIDTrial',
    '0040A023': 'FindingsGroupRecordingDateTrial',
    '0040A024': 'FindingsGroupRecordingTimeTrial',
    '0040A026': 'FindingsSourceCategoryCodeSequenceTrial',
    '0040A027': 'VerifyingOrganization',
    '0040A028': 'DocumentingOrganizationIdentifierCodeSequenceTrial',
    '0040A030': 'VerificationDateTime',
    '0040A032': 'ObservationDateTime',
    '0040A040': 'ValueType',
    '0040A043': 'ConceptNameCodeSequence',
    '0040A047': 'MeasurementPrecisionDescriptionTrial',
    '0040A050': 'ContinuityOfContent',
    '0040A057': 'UrgencyOrPriorityAlertsTrial',
    '0040A060': 'SequencingIndicatorTrial',
    '0040A066': 'DocumentIdentifierCodeSequenceTrial',
    '0040A067': 'DocumentAuthorTrial',
    '0040A068': 'DocumentAuthorIdentifierCodeSequenceTrial',
    '0040A070': 'IdentifierCodeSequenceTrial',
    '0040A073': 'VerifyingObserverSequence',
    '0040A074': 'ObjectBinaryIdentifierTrial',
    '0040A075': 'VerifyingObserverName',
    '0040A076': 'DocumentingObserverIdentifierCodeSequenceTrial',
    '0040A078': 'AuthorObserverSequence',
    '0040A07A': 'ParticipantSequence',
    '0040A07C': 'CustodialOrganizationSequence',
    '0040A080': 'ParticipationType',
    '0040A082': 'ParticipationDateTime',
    '0040A084': 'ObserverType',
    '0040A085': 'ProcedureIdentifierCodeSequenceTrial',
    '0040A088': 'VerifyingObserverIdentificationCodeSequence',
    '0040A089': 'ObjectDirectoryBinaryIdentifierTrial',
    '0040A090': 'EquivalentCDADocumentSequence',
    '0040A0B0': 'ReferencedWaveformChannels',
    '0040A110': 'DateOfDocumentOrVerbalTransactionTrial',
    '0040A112': 'TimeOfDocumentCreationOrVerbalTransactionTrial',
    '0040A120': 'DateTime',
    '0040A121': 'Date',
    '0040A122': 'Time',
    '0040A123': 'PersonName',
    '0040A124': 'UID',
    '0040A125': 'ReportStatusIDTrial',
    '0040A130': 'TemporalRangeType',
    '0040A132': 'ReferencedSamplePositions',
    '0040A136': 'ReferencedFrameNumbers',
    '0040A138': 'ReferencedTimeOffsets',
    '0040A13A': 'ReferencedDateTime',
    '0040A160': 'TextValue',
    '0040A161': 'FloatingPointValue',
    '0040A162': 'RationalNumeratorValue',
    '0040A163': 'RationalDenominatorValue',
    '0040A167': 'ObservationCategoryCodeSequenceTrial',
    '0040A168': 'ConceptCodeSequence',
    '0040A16A': 'BibliographicCitationTrial',
    '0040A170': 'PurposeOfReferenceCodeSequence',
    '0040A171': 'ObservationUID',
    '0040A172': 'ReferencedObservationUIDTrial',
    '0040A173': 'ReferencedObservationClassTrial',
    '0040A174': 'ReferencedObjectObservationClassTrial',
    '0040A180': 'AnnotationGroupNumber',
    '0040A192': 'ObservationDateTrial',
    '0040A193': 'ObservationTimeTrial',
    '0040A194': 'MeasurementAutomationTrial',
    '0040A195': 'ModifierCodeSequence',
    '0040A224': 'IdentificationDescriptionTrial',
    '0040A290': 'CoordinatesSetGeometricTypeTrial',
    '0040A296': 'AlgorithmCodeSequenceTrial',
    '0040A297': 'AlgorithmDescriptionTrial',
    '0040A29A': 'PixelCoordinatesSetTrial',
    '0040A300': 'MeasuredValueSequence',
    '0040A301': 'NumericValueQualifierCodeSequence',
    '0040A307': 'CurrentObserverTrial',
    '0040A30A': 'NumericValue',
    '0040A313': 'ReferencedAccessionSequenceTrial',
    '0040A33A': 'ReportStatusCommentTrial',
    '0040A340': 'ProcedureContextSequenceTrial',
    '0040A352': 'VerbalSourceTrial',
    '0040A353': 'AddressTrial',
    '0040A354': 'TelephoneNumberTrial',
    '0040A358': 'VerbalSourceIdentifierCodeSequenceTrial',
    '0040A360': 'PredecessorDocumentsSequence',
    '0040A370': 'ReferencedRequestSequence',
    '0040A372': 'PerformedProcedureCodeSequence',
    '0040A375': 'CurrentRequestedProcedureEvidenceSequence',
    '0040A380': 'ReportDetailSequenceTrial',
    '0040A385': 'PertinentOtherEvidenceSequence',
    '0040A390': ('HL7StructuredDocumentReferenceSequence'),
    '0040A402': 'ObservationSubjectUIDTrial',
    '0040A403': 'ObservationSubjectClassTrial',
    '0040A404': 'ObservationSubjectTypeCodeSequenceTrial',
    '0040A491': 'CompletionFlag',
    '0040A492': 'CompletionFlagDescription',
    '0040A493': 'VerificationFlag',
    '0040A494': 'ArchiveRequested',
    '0040A496': 'PreliminaryFlag',
    '0040A504': 'ContentTemplateSequence',
    '0040A525': 'IdenticalDocumentsSequence',
    '0040A600': 'ObservationSubjectContextFlagTrial',
    '0040A601': 'ObserverContextFlagTrial',
    '0040A603': 'ProcedureContextFlagTrial',
    '0040A730': 'ContentSequence',
    '0040A731': 'RelationshipSequenceTrial',
    '0040A732': 'RelationshipTypeCodeSequenceTrial',
    '0040A744': 'LanguageCodeSequenceTrial',
    '0040A992': 'UniformResourceLocatorTrial',
    '0040B020': 'WaveformAnnotationSequence',
    '0040DB00': 'TemplateIdentifier',
    '0040DB06': 'TemplateVersion',
    '0040DB07': 'TemplateLocalVersion',
    '0040DB0B': 'TemplateExtensionFlag',
    '0040DB0C': 'TemplateExtensionOrganizationUID',
    '0040DB0D': 'TemplateExtensionCreatorUID',
    '0040DB73': 'ReferencedContentItemIdentifier',
    '0040E001': ('HL7InstanceIdentifier'),
    '0040E004': ('HL7DocumentEffectiveTime'),
    '0040E006': ('HL7DocumentTypeCodeSequence'),
    '0040E008': 'DocumentClassCodeSequence',
    '0040E010': 'RetrieveURI',
    '0040E011': 'RetrieveLocationUID',
    '0040E020': 'TypeOfInstances',
    '0040E021': 'DICOMRetrievalSequence',
    '0040E022': 'DICOMMediaRetrievalSequence',
    '0040E023': 'WADORetrievalSequence',
    '0040E024': 'XDSRetrievalSequence',
    '0040E025': 'WADORSRetrievalSequence',
    '0040E030': 'RepositoryUniqueID',
    '0040E031': 'HomeCommunityID',
    '00420010': 'DocumentTitle',
    '00420011': 'EncapsulatedDocument',
    '00420012': 'MIMETypeOfEncapsulatedDocument',
    '00420013': 'SourceInstanceSequence',
    '00420014': 'ListOfMIMETypes',
    '00440001': 'ProductPackageIdentifier',
    '00440002': 'SubstanceAdministrationApproval',
    '00440003': 'ApprovalStatusFurtherDescription',
    '00440004': 'ApprovalStatusDateTime',
    '00440007': 'ProductTypeCodeSequence',
    '00440008': 'ProductName',
    '00440009': 'ProductDescription',
    '0044000A': 'ProductLotIdentifier',
    '0044000B': 'ProductExpirationDateTime',
    '00440010': 'SubstanceAdministrationDateTime',
    '00440011': 'SubstanceAdministrationNotes',
    '00440012': 'SubstanceAdministrationDeviceID',
    '00440013': 'ProductParameterSequence',
    '00440019': 'SubstanceAdministrationParameterSequence',
    '00440100': 'ApprovalSequence',
    '00440101': 'AssertionCodeSequence',
    '00440102': 'AssertionUID',
    '00440103': 'AsserterIdentificationSequence',
    '00440104': 'AssertionDateTime',
    '00440105': 'AssertionExpirationDateTime',
    '00440106': 'AssertionComments',
    '00440107': 'RelatedAssertionSequence',
    '00440108': 'ReferencedAssertionUID',
    '00440109': 'ApprovalSubjectSequence',
    '0044010A': 'OrganizationalRoleCodeSequence',
    '00460012': 'LensDescription',
    '00460014': 'RightLensSequence',
    '00460015': 'LeftLensSequence',
    '00460016': 'UnspecifiedLateralityLensSequence',
    '00460018': 'CylinderSequence',
    '00460028': 'PrismSequence',
    '00460030': 'HorizontalPrismPower',
    '00460032': 'HorizontalPrismBase',
    '00460034': 'VerticalPrismPower',
    '00460036': 'VerticalPrismBase',
    '00460038': 'LensSegmentType',
    '00460040': 'OpticalTransmittance',
    '00460042': 'ChannelWidth',
    '00460044': 'PupilSize',
    '00460046': 'CornealSize',
    '00460050': 'AutorefractionRightEyeSequence',
    '00460052': 'AutorefractionLeftEyeSequence',
    '00460060': 'DistancePupillaryDistance',
    '00460062': 'NearPupillaryDistance',
    '00460063': 'IntermediatePupillaryDistance',
    '00460064': 'OtherPupillaryDistance',
    '00460070': 'KeratometryRightEyeSequence',
    '00460071': 'KeratometryLeftEyeSequence',
    '00460074': 'SteepKeratometricAxisSequence',
    '00460075': 'RadiusOfCurvature',
    '00460076': 'KeratometricPower',
    '00460077': 'KeratometricAxis',
    '00460080': 'FlatKeratometricAxisSequence',
    '00460092': 'BackgroundColor',
    '00460094': 'Optotype',
    '00460095': 'OptotypePresentation',
    '00460097': 'SubjectiveRefractionRightEyeSequence',
    '00460098': 'SubjectiveRefractionLeftEyeSequence',
    '00460100': 'AddNearSequence',
    '00460101': 'AddIntermediateSequence',
    '00460102': 'AddOtherSequence',
    '00460104': 'AddPower',
    '00460106': 'ViewingDistance',
    '00460121': 'VisualAcuityTypeCodeSequence',
    '00460122': 'VisualAcuityRightEyeSequence',
    '00460123': 'VisualAcuityLeftEyeSequence',
    '00460124': 'VisualAcuityBothEyesOpenSequence',
    '00460125': 'ViewingDistanceType',
    '00460135': 'VisualAcuityModifiers',
    '00460137': 'DecimalVisualAcuity',
    '00460139': 'OptotypeDetailedDefinition',
    '00460145': 'ReferencedRefractiveMeasurementsSequence',
    '00460146': 'SpherePower',
    '00460147': 'CylinderPower',
    '00460201': 'CornealTopographySurface',
    '00460202': 'CornealVertexLocation',
    '00460203': 'PupilCentroidXCoordinate',
    '00460204': 'PupilCentroidYCoordinate',
    '00460205': 'EquivalentPupilRadius',
    '00460207': 'CornealTopographyMapTypeCodeSequence',
    '00460208': 'VerticesOfTheOutlineOfPupil',
    '00460210': 'CornealTopographyMappingNormalsSequence',
    '00460211': 'MaximumCornealCurvatureSequence',
    '00460212': 'MaximumCornealCurvature',
    '00460213': 'MaximumCornealCurvatureLocation',
    '00460215': 'MinimumKeratometricSequence',
    '00460218': 'SimulatedKeratometricCylinderSequence',
    '00460220': 'AverageCornealPower',
    '00460224': 'CornealISValue',
    '00460227': 'AnalyzedArea',
    '00460230': 'SurfaceRegularityIndex',
    '00460232': 'SurfaceAsymmetryIndex',
    '00460234': 'CornealEccentricityIndex',
    '00460236': 'KeratoconusPredictionIndex',
    '00460238': 'DecimalPotentialVisualAcuity',
    '00460242': 'CornealTopographyMapQualityEvaluation',
    '00460244': 'SourceImageCornealProcessedDataSequence',
    '00460247': 'CornealPointLocation',
    '00460248': 'CornealPointEstimated',
    '00460249': 'AxialPower',
    '00460250': 'TangentialPower',
    '00460251': 'RefractivePower',
    '00460252': 'RelativeElevation',
    '00460253': 'CornealWavefront',
    '00480001': 'ImagedVolumeWidth',
    '00480002': 'ImagedVolumeHeight',
    '00480003': 'ImagedVolumeDepth',
    '00480006': 'TotalPixelMatrixColumns',
    '00480007': 'TotalPixelMatrixRows',
    '00480008': 'TotalPixelMatrixOriginSequence',
    '00480010': 'SpecimenLabelInImage',
    '00480011': 'FocusMethod',
    '00480012': 'ExtendedDepthOfField',
    '00480013': 'NumberOfFocalPlanes',
    '00480014': 'DistanceBetweenFocalPlanes',
    '00480015': 'RecommendedAbsentPixelCIELabValue',
    '00480100': 'IlluminatorTypeCodeSequence',
    '00480102': 'ImageOrientationSlide',
    '00480105': 'OpticalPathSequence',
    '00480106': 'OpticalPathIdentifier',
    '00480107': 'OpticalPathDescription',
    '00480108': 'IlluminationColorCodeSequence',
    '00480110': 'SpecimenReferenceSequence',
    '00480111': 'CondenserLensPower',
    '00480112': 'ObjectiveLensPower',
    '00480113': 'ObjectiveLensNumericalAperture',
    '00480120': 'PaletteColorLookupTableSequence',
    '00480200': 'ReferencedImageNavigationSequence',
    '00480201': 'TopLeftHandCornerOfLocalizerArea',
    '00480202': 'BottomRightHandCornerOfLocalizerArea',
    '00480207': 'OpticalPathIdentificationSequence',
    '0048021A': 'PlanePositionSlideSequence',
    '0048021E': 'ColumnPositionInTotalImagePixelMatrix',
    '0048021F': 'RowPositionInTotalImagePixelMatrix',
    '00480301': 'PixelOriginInterpretation',
    '00480302': 'NumberOfOpticalPaths',
    '00480303': 'TotalPixelMatrixFocalPlanes',
    '00500004': 'CalibrationImage',
    '00500010': 'DeviceSequence',
    '00500012': 'ContainerComponentTypeCodeSequence',
    '00500013': 'ContainerComponentThickness',
    '00500014': 'DeviceLength',
    '00500015': 'ContainerComponentWidth',
    '00500016': 'DeviceDiameter',
    '00500017': 'DeviceDiameterUnits',
    '00500018': 'DeviceVolume',
    '00500019': 'InterMarkerDistance',
    '0050001A': 'ContainerComponentMaterial',
    '0050001B': 'ContainerComponentID',
    '0050001C': 'ContainerComponentLength',
    '0050001D': 'ContainerComponentDiameter',
    '0050001E': 'ContainerComponentDescription',
    '00500020': 'DeviceDescription',
    '00520001': 'ContrastBolusIngredientPercentByVolume',
    '00520002': 'OCTFocalDistance',
    '00520003': 'BeamSpotSize',
    '00520004': 'EffectiveRefractiveIndex',
    '00520006': 'OCTAcquisitionDomain',
    '00520007': 'OCTOpticalCenterWavelength',
    '00520008': 'AxialResolution',
    '00520009': 'RangingDepth',
    '00520011': 'ALineRate',
    '00520012': 'ALinesPerFrame',
    '00520013': 'CatheterRotationalRate',
    '00520014': 'ALinePixelSpacing',
    '00520016': 'ModeOfPercutaneousAccessSequence',
    '00520025': 'IntravascularOCTFrameTypeSequence',
    '00520026': 'OCTZOffsetApplied',
    '00520027': 'IntravascularFrameContentSequence',
    '00520028': 'IntravascularLongitudinalDistance',
    '00520029': 'IntravascularOCTFrameContentSequence',
    '00520030': 'OCTZOffsetCorrection',
    '00520031': 'CatheterDirectionOfRotation',
    '00520033': 'SeamLineLocation',
    '00520034': 'FirstALineLocation',
    '00520036': 'SeamLineIndex',
    '00520038': 'NumberOfPaddedALines',
    '00520039': 'InterpolationType',
    '0052003A': 'RefractiveIndexApplied',
    '00540010': 'EnergyWindowVector',
    '00540011': 'NumberOfEnergyWindows',
    '00540012': 'EnergyWindowInformationSequence',
    '00540013': 'EnergyWindowRangeSequence',
    '00540014': 'EnergyWindowLowerLimit',
    '00540015': 'EnergyWindowUpperLimit',
    '00540016': 'RadiopharmaceuticalInformationSequence',
    '00540017': 'ResidualSyringeCounts',
    '00540018': 'EnergyWindowName',
    '00540020': 'DetectorVector',
    '00540021': 'NumberOfDetectors',
    '00540022': 'DetectorInformationSequence',
    '00540030': 'PhaseVector',
    '00540031': 'NumberOfPhases',
    '00540032': 'PhaseInformationSequence',
    '00540033': 'NumberOfFramesInPhase',
    '00540036': 'PhaseDelay',
    '00540038': 'PauseBetweenFrames',
    '00540039': 'PhaseDescription',
    '00540050': 'RotationVector',
    '00540051': 'NumberOfRotations',
    '00540052': 'RotationInformationSequence',
    '00540053': 'NumberOfFramesInRotation',
    '00540060': 'RRIntervalVector',
    '00540061': 'NumberOfRRIntervals',
    '00540062': 'GatedInformationSequence',
    '00540063': 'DataInformationSequence',
    '00540070': 'TimeSlotVector',
    '00540071': 'NumberOfTimeSlots',
    '00540072': 'TimeSlotInformationSequence',
    '00540073': 'TimeSlotTime',
    '00540080': 'SliceVector',
    '00540081': 'NumberOfSlices',
    '00540090': 'AngularViewVector',
    '00540100': 'TimeSliceVector',
    '00540101': 'NumberOfTimeSlices',
    '00540200': 'StartAngle',
    '00540202': 'TypeOfDetectorMotion',
    '00540210': 'TriggerVector',
    '00540211': 'NumberOfTriggersInPhase',
    '00540220': 'ViewCodeSequence',
    '00540222': 'ViewModifierCodeSequence',
    '00540300': 'RadionuclideCodeSequence',
    '00540302': 'AdministrationRouteCodeSequence',
    '00540304': 'RadiopharmaceuticalCodeSequence',
    '00540306': 'CalibrationDataSequence',
    '00540308': 'EnergyWindowNumber',
    '00540400': 'ImageID',
    '00540410': 'PatientOrientationCodeSequence',
    '00540412': 'PatientOrientationModifierCodeSequence',
    '00540414': 'PatientGantryRelationshipCodeSequence',
    '00540500': 'SliceProgressionDirection',
    '00540501': 'ScanProgressionDirection',
    '00541000': 'SeriesType',
    '00541001': 'Units',
    '00541002': 'CountsSource',
    '00541004': 'ReprojectionMethod',
    '00541006': 'SUVType',
    '00541100': 'RandomsCorrectionMethod',
    '00541101': 'AttenuationCorrectionMethod',
    '00541102': 'DecayCorrection',
    '00541103': 'ReconstructionMethod',
    '00541104': 'DetectorLinesOfResponseUsed',
    '00541105': 'ScatterCorrectionMethod',
    '00541200': 'AxialAcceptance',
    '00541201': 'AxialMash',
    '00541202': 'TransverseMash',
    '00541203': 'DetectorElementSize',
    '00541210': 'CoincidenceWindowWidth',
    '00541220': 'SecondaryCountsType',
    '00541300': 'FrameReferenceTime',
    '00541310': 'PrimaryPromptsCountsAccumulated',
    '00541311': 'SecondaryCountsAccumulated',
    '00541320': 'SliceSensitivityFactor',
    '00541321': 'DecayFactor',
    '00541322': 'DoseCalibrationFactor',
    '00541323': 'ScatterFractionFactor',
    '00541324': 'DeadTimeFactor',
    '00541330': 'ImageIndex',
    '00541400': 'CountsIncluded',
    '00541401': 'DeadTimeCorrectionFlag',
    '00603000': 'HistogramSequence',
    '00603002': 'HistogramNumberOfBins',
    '00603004': 'HistogramFirstBinValue',
    '00603006': 'HistogramLastBinValue',
    '00603008': 'HistogramBinWidth',
    '00603010': 'HistogramExplanation',
    '00603020': 'HistogramData',
    '00620001': 'SegmentationType',
    '00620002': 'SegmentSequence',
    '00620003': 'SegmentedPropertyCategoryCodeSequence',
    '00620004': 'SegmentNumber',
    '00620005': 'SegmentLabel',
    '00620006': 'SegmentDescription',
    '00620007': 'SegmentationAlgorithmIdentificationSequence',
    '00620008': 'SegmentAlgorithmType',
    '00620009': 'SegmentAlgorithmName',
    '0062000A': 'SegmentIdentificationSequence',
    '0062000B': 'ReferencedSegmentNumber',
    '0062000C': 'RecommendedDisplayGrayscaleValue',
    '0062000D': 'RecommendedDisplayCIELabValue',
    '0062000E': 'MaximumFractionalValue',
    '0062000F': 'SegmentedPropertyTypeCodeSequence',
    '00620010': 'SegmentationFractionalType',
    '00620011': 'SegmentedPropertyTypeModifierCodeSequence',
    '00620012': 'UsedSegmentsSequence',
    '00620020': 'TrackingID',
    '00620021': 'TrackingUID',
    '00640002': 'DeformableRegistrationSequence',
    '00640003': 'SourceFrameOfReferenceUID',
    '00640005': 'DeformableRegistrationGridSequence',
    '00640007': 'GridDimensions',
    '00640008': 'GridResolution',
    '00640009': 'VectorGridData',
    '0064000F': 'PreDeformationMatrixRegistrationSequence',
    '00640010': 'PostDeformationMatrixRegistrationSequence',
    '00660001': 'NumberOfSurfaces',
    '00660002': 'SurfaceSequence',
    '00660003': 'SurfaceNumber',
    '00660004': 'SurfaceComments',
    '00660009': 'SurfaceProcessing',
    '0066000A': 'SurfaceProcessingRatio',
    '0066000B': 'SurfaceProcessingDescription',
    '0066000C': 'RecommendedPresentationOpacity',
    '0066000D': 'RecommendedPresentationType',
    '0066000E': 'FiniteVolume',
    '00660010': 'Manifold',
    '00660011': 'SurfacePointsSequence',
    '00660012': 'SurfacePointsNormalsSequence',
    '00660013': 'SurfaceMeshPrimitivesSequence',
    '00660015': 'NumberOfSurfacePoints',
    '00660016': 'PointCoordinatesData',
    '00660017': 'PointPositionAccuracy',
    '00660018': 'MeanPointDistance',
    '00660019': 'MaximumPointDistance',
    '0066001A': 'PointsBoundingBoxCoordinates',
    '0066001B': 'AxisOfRotation',
    '0066001C': 'CenterOfRotation',
    '0066001E': 'NumberOfVectors',
    '0066001F': 'VectorDimensionality',
    '00660020': 'VectorAccuracy',
    '00660021': 'VectorCoordinateData',
    '00660023': 'TrianglePointIndexList',
    '00660024': 'EdgePointIndexList',
    '00660025': 'VertexPointIndexList',
    '00660026': 'TriangleStripSequence',
    '00660027': 'TriangleFanSequence',
    '00660028': 'LineSequence',
    '00660029': 'PrimitivePointIndexList',
    '0066002A': 'SurfaceCount',
    '0066002B': 'ReferencedSurfaceSequence',
    '0066002C': 'ReferencedSurfaceNumber',
    '0066002D': 'SegmentSurfaceGenerationAlgorithmIdentificationSequence',
    '0066002E': 'SegmentSurfaceSourceInstanceSequence',
    '0066002F': 'AlgorithmFamilyCodeSequence',
    '00660030': 'AlgorithmNameCodeSequence',
    '00660031': 'AlgorithmVersion',
    '00660032': 'AlgorithmParameters',
    '00660034': 'FacetSequence',
    '00660035': 'SurfaceProcessingAlgorithmIdentificationSequence',
    '00660036': 'AlgorithmName',
    '00660037': 'RecommendedPointRadius',
    '00660038': 'RecommendedLineThickness',
    '00660040': 'LongPrimitivePointIndexList',
    '00660041': 'LongTrianglePointIndexList',
    '00660042': 'LongEdgePointIndexList',
    '00660043': 'LongVertexPointIndexList',
    '00660101': 'TrackSetSequence',
    '00660102': 'TrackSequence',
    '00660103': 'RecommendedDisplayCIELabValueList',
    '00660104': 'TrackingAlgorithmIdentificationSequence',
    '00660105': 'TrackSetNumber',
    '00660106': 'TrackSetLabel',
    '00660107': 'TrackSetDescription',
    '00660108': 'TrackSetAnatomicalTypeCodeSequence',
    '00660121': 'MeasurementsSequence',
    '00660124': 'TrackSetStatisticsSequence',
    '00660125': 'FloatingPointValues',
    '00660129': 'TrackPointIndexList',
    '00660130': 'TrackStatisticsSequence',
    '00660132': 'MeasurementValuesSequence',
    '00660133': 'DiffusionAcquisitionCodeSequence',
    '00660134': 'DiffusionModelCodeSequence',
    '00686210': 'ImplantSize',
    '00686221': 'ImplantTemplateVersion',
    '00686222': 'ReplacedImplantTemplateSequence',
    '00686223': 'ImplantType',
    '00686224': 'DerivationImplantTemplateSequence',
    '00686225': 'OriginalImplantTemplateSequence',
    '00686226': 'EffectiveDateTime',
    '00686230': 'ImplantTargetAnatomySequence',
    '00686260': 'InformationFromManufacturerSequence',
    '00686265': 'NotificationFromManufacturerSequence',
    '00686270': 'InformationIssueDateTime',
    '00686280': 'InformationSummary',
    '006862A0': 'ImplantRegulatoryDisapprovalCodeSequence',
    '006862A5': 'OverallTemplateSpatialTolerance',
    '006862C0': 'HPGLDocumentSequence',
    '006862D0': 'HPGLDocumentID',
    '006862D5': 'HPGLDocumentLabel',
    '006862E0': 'ViewOrientationCodeSequence',
    '006862F0': 'ViewOrientationModifierCodeSequence',
    '006862F2': 'HPGLDocumentScaling',
    '00686300': 'HPGLDocument',
    '00686310': 'HPGLContourPenNumber',
    '00686320': 'HPGLPenSequence',
    '00686330': 'HPGLPenNumber',
    '00686340': 'HPGLPenLabel',
    '00686345': 'HPGLPenDescription',
    '00686346': 'RecommendedRotationPoint',
    '00686347': 'BoundingRectangle',
    '00686350': ('ImplantTemplate3DModelSurfaceNumber'),
    '00686360': 'SurfaceModelDescriptionSequence',
    '00686380': 'SurfaceModelLabel',
    '00686390': 'SurfaceModelScalingFactor',
    '006863A0': 'MaterialsCodeSequence',
    '006863A4': 'CoatingMaterialsCodeSequence',
    '006863A8': 'ImplantTypeCodeSequence',
    '006863AC': 'FixationMethodCodeSequence',
    '006863B0': 'MatingFeatureSetsSequence',
    '006863C0': 'MatingFeatureSetID',
    '006863D0': 'MatingFeatureSetLabel',
    '006863E0': 'MatingFeatureSequence',
    '006863F0': 'MatingFeatureID',
    '00686400': 'MatingFeatureDegreeOfFreedomSequence',
    '00686410': 'DegreeOfFreedomID',
    '00686420': 'DegreeOfFreedomType',
    '00686430': 'TwoDMatingFeatureCoordinatesSequence',
    '00686440': 'ReferencedHPGLDocumentID',
    '00686450': 'TwoDMatingPoint',
    '00686460': 'TwoDMatingAxes',
    '00686470': 'TwoDDegreeOfFreedomSequence',
    '00686490': 'ThreeDDegreeOfFreedomAxis',
    '006864A0': 'RangeOfFreedom',
    '006864C0': 'ThreeDMatingPoint',
    '006864D0': 'ThreeDMatingAxes',
    '006864F0': 'TwoDDegreeOfFreedomAxis',
    '00686500': 'PlanningLandmarkPointSequence',
    '00686510': 'PlanningLandmarkLineSequence',
    '00686520': 'PlanningLandmarkPlaneSequence',
    '00686530': 'PlanningLandmarkID',
    '00686540': 'PlanningLandmarkDescription',
    '00686545': 'PlanningLandmarkIdentificationCodeSequence',
    '00686550': 'TwoDPointCoordinatesSequence',
    '00686560': 'TwoDPointCoordinates',
    '00686590': 'ThreeDPointCoordinates',
    '006865A0': 'TwoDLineCoordinatesSequence',
    '006865B0': 'TwoDLineCoordinates',
    '006865D0': 'ThreeDLineCoordinates',
    '006865E0': 'TwoDPlaneCoordinatesSequence',
    '006865F0': 'TwoDPlaneIntersection',
    '00686610': 'ThreeDPlaneOrigin',
    '00686620': 'ThreeDPlaneNormal',
    '00687001': 'ModelModification',
    '00687002': 'ModelMirroring',
    '00687003': 'ModelUsageCodeSequence',
    '00700001': 'GraphicAnnotationSequence',
    '00700002': 'GraphicLayer',
    '00700003': 'BoundingBoxAnnotationUnits',
    '00700004': 'AnchorPointAnnotationUnits',
    '00700005': 'GraphicAnnotationUnits',
    '00700006': 'UnformattedTextValue',
    '00700008': 'TextObjectSequence',
    '00700009': 'GraphicObjectSequence',
    '00700010': 'BoundingBoxTopLeftHandCorner',
    '00700011': 'BoundingBoxBottomRightHandCorner',
    '00700012': 'BoundingBoxTextHorizontalJustification',
    '00700014': 'AnchorPoint',
    '00700015': 'AnchorPointVisibility',
    '00700020': 'GraphicDimensions',
    '00700021': 'NumberOfGraphicPoints',
    '00700022': 'GraphicData',
    '00700023': 'GraphicType',
    '00700024': 'GraphicFilled',
    '00700040': 'ImageRotationRetired',
    '00700041': 'ImageHorizontalFlip',
    '00700042': 'ImageRotation',
    '00700050': 'DisplayedAreaTopLeftHandCornerTrial',
    '00700051': 'DisplayedAreaBottomRightHandCornerTrial',
    '00700052': 'DisplayedAreaTopLeftHandCorner',
    '00700053': 'DisplayedAreaBottomRightHandCorner',
    '0070005A': 'DisplayedAreaSelectionSequence',
    '00700060': 'GraphicLayerSequence',
    '00700062': 'GraphicLayerOrder',
    '00700066': 'GraphicLayerRecommendedDisplayGrayscaleValue',
    '00700067': 'GraphicLayerRecommendedDisplayRGBValue',
    '00700068': 'GraphicLayerDescription',
    '00700080': 'ContentLabel',
    '00700081': 'ContentDescription',
    '00700082': 'PresentationCreationDate',
    '00700083': 'PresentationCreationTime',
    '00700084': 'ContentCreatorName',
    '00700086': 'ContentCreatorIdentificationCodeSequence',
    '00700087': 'AlternateContentDescriptionSequence',
    '00700100': 'PresentationSizeMode',
    '00700101': 'PresentationPixelSpacing',
    '00700102': 'PresentationPixelAspectRatio',
    '00700103': 'PresentationPixelMagnificationRatio',
    '00700207': 'GraphicGroupLabel',
    '00700208': 'GraphicGroupDescription',
    '00700209': 'CompoundGraphicSequence',
    '00700226': 'CompoundGraphicInstanceID',
    '00700227': 'FontName',
    '00700228': 'FontNameType',
    '00700229': 'CSSFontName',
    '00700230': 'RotationAngle',
    '00700231': 'TextStyleSequence',
    '00700232': 'LineStyleSequence',
    '00700233': 'FillStyleSequence',
    '00700234': 'GraphicGroupSequence',
    '00700241': 'TextColorCIELabValue',
    '00700242': 'HorizontalAlignment',
    '00700243': 'VerticalAlignment',
    '00700244': 'ShadowStyle',
    '00700245': 'ShadowOffsetX',
    '00700246': 'ShadowOffsetY',
    '00700247': 'ShadowColorCIELabValue',
    '00700248': 'Underlined',
    '00700249': 'Bold',
    '00700250': 'Italic',
    '00700251': 'PatternOnColorCIELabValue',
    '00700252': 'PatternOffColorCIELabValue',
    '00700253': 'LineThickness',
    '00700254': 'LineDashingStyle',
    '00700255': 'LinePattern',
    '00700256': 'FillPattern',
    '00700257': 'FillMode',
    '00700258': 'ShadowOpacity',
    '00700261': 'GapLength',
    '00700262': 'DiameterOfVisibility',
    '00700273': 'RotationPoint',
    '00700274': 'TickAlignment',
    '00700278': 'ShowTickLabel',
    '00700279': 'TickLabelAlignment',
    '00700282': 'CompoundGraphicUnits',
    '00700284': 'PatternOnOpacity',
    '00700285': 'PatternOffOpacity',
    '00700287': 'MajorTicksSequence',
    '00700288': 'TickPosition',
    '00700289': 'TickLabel',
    '00700294': 'CompoundGraphicType',
    '00700295': 'GraphicGroupID',
    '00700306': 'ShapeType',
    '00700308': 'RegistrationSequence',
    '00700309': 'MatrixRegistrationSequence',
    '0070030A': 'MatrixSequence',
    '0070030B': 'FrameOfReferenceToDisplayedCoordinateSystemTransformationMatrix',
    '0070030C': 'FrameOfReferenceTransformationMatrixType',
    '0070030D': 'RegistrationTypeCodeSequence',
    '0070030F': 'FiducialDescription',
    '00700310': 'FiducialIdentifier',
    '00700311': 'FiducialIdentifierCodeSequence',
    '00700312': 'ContourUncertaintyRadius',
    '00700314': 'UsedFiducialsSequence',
    '00700318': 'GraphicCoordinatesDataSequence',
    '0070031A': 'FiducialUID',
    '0070031B': 'ReferencedFiducialUID',
    '0070031C': 'FiducialSetSequence',
    '0070031E': 'FiducialSequence',
    '0070031F': 'FiducialsPropertyCategoryCodeSequence',
    '00700401': 'GraphicLayerRecommendedDisplayCIELabValue',
    '00700402': 'BlendingSequence',
    '00700403': 'RelativeOpacity',
    '00700404': 'ReferencedSpatialRegistrationSequence',
    '00700405': 'BlendingPosition',
    '00701101': 'PresentationDisplayCollectionUID',
    '00701102': 'PresentationSequenceCollectionUID',
    '00701103': 'PresentationSequencePositionIndex',
    '00701104': 'RenderedImageReferenceSequence',
    '00701201': 'VolumetricPresentationStateInputSequence',
    '00701202': 'PresentationInputType',
    '00701203': 'InputSequencePositionIndex',
    '00701204': 'Crop',
    '00701205': 'CroppingSpecificationIndex',
    '00701206': 'CompositingMethod',
    '00701207': 'VolumetricPresentationInputNumber',
    '00701208': 'ImageVolumeGeometry',
    '00701209': 'VolumetricPresentationInputSetUID',
    '0070120A': 'VolumetricPresentationInputSetSequence',
    '0070120B': 'GlobalCrop',
    '0070120C': 'GlobalCroppingSpecificationIndex',
    '0070120D': 'RenderingMethod',
    '00701301': 'VolumeCroppingSequence',
    '00701302': 'VolumeCroppingMethod',
    '00701303': 'BoundingBoxCrop',
    '00701304': 'ObliqueCroppingPlaneSequence',
    '00701305': 'Plane',
    '00701306': 'PlaneNormal',
    '00701309': 'CroppingSpecificationNumber',
    '00701501': 'MultiPlanarReconstructionStyle',
    '00701502': 'MPRThicknessType',
    '00701503': 'MPRSlabThickness',
    '00701505': 'MPRTopLeftHandCorner',
    '00701507': 'MPRViewWidthDirection',
    '00701508': 'MPRViewWidth',
    '0070150C': 'NumberOfVolumetricCurvePoints',
    '0070150D': 'VolumetricCurvePoints',
    '00701511': 'MPRViewHeightDirection',
    '00701512': 'MPRViewHeight',
    '00701602': 'RenderProjection',
    '00701603': 'ViewpointPosition',
    '00701604': 'ViewpointLookAtPoint',
    '00701605': 'ViewpointUpDirection',
    '00701606': 'RenderFieldOfView',
    '00701607': 'SamplingStepSize',
    '00701701': 'ShadingStyle',
    '00701702': 'AmbientReflectionIntensity',
    '00701703': 'LightDirection',
    '00701704': 'DiffuseReflectionIntensity',
    '00701705': 'SpecularReflectionIntensity',
    '00701706': 'Shininess',
    '00701801': 'PresentationStateClassificationComponentSequence',
    '00701802': 'ComponentType',
    '00701803': 'ComponentInputSequence',
    '00701804': 'VolumetricPresentationInputIndex',
    '00701805': 'PresentationStateCompositorComponentSequence',
    '00701806': 'WeightingTransferFunctionSequence',
    '00701807': 'WeightingLookupTableDescriptor',
    '00701808': 'WeightingLookupTableData',
    '00701901': 'VolumetricAnnotationSequence',
    '00701903': 'ReferencedStructuredContextSequence',
    '00701904': 'ReferencedContentItem',
    '00701905': 'VolumetricPresentationInputAnnotationSequence',
    '00701907': 'AnnotationClipping',
    '00701A01': 'PresentationAnimationStyle',
    '00701A03': 'RecommendedAnimationRate',
    '00701A04': 'AnimationCurveSequence',
    '00701A05': 'AnimationStepSize',
    '00701A06': 'SwivelRange',
    '00701A07': 'VolumetricCurveUpDirections',
    '00701A08': 'VolumeStreamSequence',
    '00701A09': 'RGBATransferFunctionDescription',
    '00701B01': 'AdvancedBlendingSequence',
    '00701B02': 'BlendingInputNumber',
    '00701B03': 'BlendingDisplayInputSequence',
    '00701B04': 'BlendingDisplaySequence',
    '00701B06': 'BlendingMode',
    '00701B07': 'TimeSeriesBlending',
    '00701B08': 'GeometryForDisplay',
    '00701B11': 'ThresholdSequence',
    '00701B12': 'ThresholdValueSequence',
    '00701B13': 'ThresholdType',
    '00701B14': 'ThresholdValue',
    '00720002': 'HangingProtocolName',
    '00720004': 'HangingProtocolDescription',
    '00720006': 'HangingProtocolLevel',
    '00720008': 'HangingProtocolCreator',
    '0072000A': 'HangingProtocolCreationDateTime',
    '0072000C': 'HangingProtocolDefinitionSequence',
    '0072000E': 'HangingProtocolUserIdentificationCodeSequence',
    '00720010': 'HangingProtocolUserGroupName',
    '00720012': 'SourceHangingProtocolSequence',
    '00720014': 'NumberOfPriorsReferenced',
    '00720020': 'ImageSetsSequence',
    '00720022': 'ImageSetSelectorSequence',
    '00720024': 'ImageSetSelectorUsageFlag',
    '00720026': 'SelectorAttribute',
    '00720028': 'SelectorValueNumber',
    '00720030': 'TimeBasedImageSetsSequence',
    '00720032': 'ImageSetNumber',
    '00720034': 'ImageSetSelectorCategory',
    '00720038': 'RelativeTime',
    '0072003A': 'RelativeTimeUnits',
    '0072003C': 'AbstractPriorValue',
    '0072003E': 'AbstractPriorCodeSequence',
    '00720040': 'ImageSetLabel',
    '00720050': 'SelectorAttributeVR',
    '00720052': 'SelectorSequencePointer',
    '00720054': 'SelectorSequencePointerPrivateCreator',
    '00720056': 'SelectorAttributePrivateCreator',
    '0072005E': 'SelectorAEValue',
    '0072005F': 'SelectorASValue',
    '00720060': 'SelectorATValue',
    '00720061': 'SelectorDAValue',
    '00720062': 'SelectorCSValue',
    '00720063': 'SelectorDTValue',
    '00720064': 'SelectorISValue',
    '00720065': 'SelectorOBValue',
    '00720066': 'SelectorLOValue',
    '00720067': 'SelectorOFValue',
    '00720068': 'SelectorLTValue',
    '00720069': 'SelectorOWValue',
    '0072006A': 'SelectorPNValue',
    '0072006B': 'SelectorTMValue',
    '0072006C': 'SelectorSHValue',
    '0072006D': 'SelectorUNValue',
    '0072006E': 'SelectorSTValue',
    '0072006F': 'SelectorUCValue',
    '00720070': 'SelectorUTValue',
    '00720071': 'SelectorURValue',
    '00720072': 'SelectorDSValue',
    '00720073': 'SelectorODValue',
    '00720074': 'SelectorFDValue',
    '00720075': 'SelectorOLValue',
    '00720076': 'SelectorFLValue',
    '00720078': 'SelectorULValue',
    '0072007A': 'SelectorUSValue',
    '0072007C': 'SelectorSLValue',
    '0072007E': 'SelectorSSValue',
    '0072007F': 'SelectorUIValue',
    '00720080': 'SelectorCodeSequenceValue',
    '00720100': 'NumberOfScreens',
    '00720102': 'NominalScreenDefinitionSequence',
    '00720104': 'NumberOfVerticalPixels',
    '00720106': 'NumberOfHorizontalPixels',
    '00720108': 'DisplayEnvironmentSpatialPosition',
    '0072010A': 'ScreenMinimumGrayscaleBitDepth',
    '0072010C': 'ScreenMinimumColorBitDepth',
    '0072010E': 'ApplicationMaximumRepaintTime',
    '00720200': 'DisplaySetsSequence',
    '00720202': 'DisplaySetNumber',
    '00720203': 'DisplaySetLabel',
    '00720204': 'DisplaySetPresentationGroup',
    '00720206': 'DisplaySetPresentationGroupDescription',
    '00720208': 'PartialDataDisplayHandling',
    '00720210': 'SynchronizedScrollingSequence',
    '00720212': 'DisplaySetScrollingGroup',
    '00720214': 'NavigationIndicatorSequence',
    '00720216': 'NavigationDisplaySet',
    '00720218': 'ReferenceDisplaySets',
    '00720300': 'ImageBoxesSequence',
    '00720302': 'ImageBoxNumber',
    '00720304': 'ImageBoxLayoutType',
    '00720306': 'ImageBoxTileHorizontalDimension',
    '00720308': 'ImageBoxTileVerticalDimension',
    '00720310': 'ImageBoxScrollDirection',
    '00720312': 'ImageBoxSmallScrollType',
    '00720314': 'ImageBoxSmallScrollAmount',
    '00720316': 'ImageBoxLargeScrollType',
    '00720318': 'ImageBoxLargeScrollAmount',
    '00720320': 'ImageBoxOverlapPriority',
    '00720330': 'CineRelativeToRealTime',
    '00720400': 'FilterOperationsSequence',
    '00720402': 'FilterByCategory',
    '00720404': 'FilterByAttributePresence',
    '00720406': 'FilterByOperator',
    '00720420': 'StructuredDisplayBackgroundCIELabValue',
    '00720421': 'EmptyImageBoxCIELabValue',
    '00720422': 'StructuredDisplayImageBoxSequence',
    '00720424': 'StructuredDisplayTextBoxSequence',
    '00720427': 'ReferencedFirstFrameSequence',
    '00720430': 'ImageBoxSynchronizationSequence',
    '00720432': 'SynchronizedImageBoxList',
    '00720434': 'TypeOfSynchronization',
    '00720500': 'BlendingOperationType',
    '00720510': 'ReformattingOperationType',
    '00720512': 'ReformattingThickness',
    '00720514': 'ReformattingInterval',
    '00720516': 'ReformattingOperationInitialViewDirection',
    '00720520': 'ThreeDRenderingType',
    '00720600': 'SortingOperationsSequence',
    '00720602': 'SortByCategory',
    '00720604': 'SortingDirection',
    '00720700': 'DisplaySetPatientOrientation',
    '00720702': 'VOIType',
    '00720704': 'PseudoColorType',
    '00720705': 'PseudoColorPaletteInstanceReferenceSequence',
    '00720706': 'ShowGrayscaleInverted',
    '00720710': 'ShowImageTrueSizeFlag',
    '00720712': 'ShowGraphicAnnotationFlag',
    '00720714': 'ShowPatientDemographicsFlag',
    '00720716': 'ShowAcquisitionTechniquesFlag',
    '00720717': 'DisplaySetHorizontalJustification',
    '00720718': 'DisplaySetVerticalJustification',
    '00740120': 'ContinuationStartMeterset',
    '00740121': 'ContinuationEndMeterset',
    '00741000': 'ProcedureStepState',
    '00741002': 'ProcedureStepProgressInformationSequence',
    '00741004': 'ProcedureStepProgress',
    '00741006': 'ProcedureStepProgressDescription',
    '00741007': 'ProcedureStepProgressParametersSequence',
    '00741008': 'ProcedureStepCommunicationsURISequence',
    '0074100A': 'ContactURI',
    '0074100C': 'ContactDisplayName',
    '0074100E': 'ProcedureStepDiscontinuationReasonCodeSequence',
    '00741020': 'BeamTaskSequence',
    '00741022': 'BeamTaskType',
    '00741024': 'BeamOrderIndexTrial',
    '00741025': 'AutosequenceFlag',
    '00741026': 'TableTopVerticalAdjustedPosition',
    '00741027': 'TableTopLongitudinalAdjustedPosition',
    '00741028': 'TableTopLateralAdjustedPosition',
    '0074102A': 'PatientSupportAdjustedAngle',
    '0074102B': 'TableTopEccentricAdjustedAngle',
    '0074102C': 'TableTopPitchAdjustedAngle',
    '0074102D': 'TableTopRollAdjustedAngle',
    '00741030': 'DeliveryVerificationImageSequence',
    '00741032': 'VerificationImageTiming',
    '00741034': 'DoubleExposureFlag',
    '00741036': 'DoubleExposureOrdering',
    '00741038': 'DoubleExposureMetersetTrial',
    '0074103A': 'DoubleExposureFieldDeltaTrial',
    '00741040': 'RelatedReferenceRTImageSequence',
    '00741042': 'GeneralMachineVerificationSequence',
    '00741044': 'ConventionalMachineVerificationSequence',
    '00741046': 'IonMachineVerificationSequence',
    '00741048': 'FailedAttributesSequence',
    '0074104A': 'OverriddenAttributesSequence',
    '0074104C': 'ConventionalControlPointVerificationSequence',
    '0074104E': 'IonControlPointVerificationSequence',
    '00741050': 'AttributeOccurrenceSequence',
    '00741052': 'AttributeOccurrencePointer',
    '00741054': 'AttributeItemSelector',
    '00741056': 'AttributeOccurrencePrivateCreator',
    '00741057': 'SelectorSequencePointerItems',
    '00741200': 'ScheduledProcedureStepPriority',
    '00741202': 'WorklistLabel',
    '00741204': 'ProcedureStepLabel',
    '00741210': 'ScheduledProcessingParametersSequence',
    '00741212': 'PerformedProcessingParametersSequence',
    '00741216': 'UnifiedProcedureStepPerformedProcedureSequence',
    '00741220': 'RelatedProcedureStepSequence',
    '00741222': 'ProcedureStepRelationshipType',
    '00741224': 'ReplacedProcedureStepSequence',
    '00741230': 'DeletionLock',
    '00741234': 'ReceivingAE',
    '00741236': 'RequestingAE',
    '00741238': 'ReasonForCancellation',
    '00741242': 'SCPStatus',
    '00741244': 'SubscriptionListStatus',
    '00741246': 'UnifiedProcedureStepListStatus',
    '00741324': 'BeamOrderIndex',
    '00741338': 'DoubleExposureMeterset',
    '0074133A': 'DoubleExposureFieldDelta',
    '00741401': 'BrachyTaskSequence',
    '00741402': 'ContinuationStartTotalReferenceAirKerma',
    '00741403': 'ContinuationEndTotalReferenceAirKerma',
    '00741404': 'ContinuationPulseNumber',
    '00741405': 'ChannelDeliveryOrderSequence',
    '00741406': 'ReferencedChannelNumber',
    '00741407': 'StartCumulativeTimeWeight',
    '00741408': 'EndCumulativeTimeWeight',
    '00741409': 'OmittedChannelSequence',
    '0074140A': 'ReasonForChannelOmission',
    '0074140B': 'ReasonForChannelOmissionDescription',
    '0074140C': 'ChannelDeliveryOrderIndex',
    '0074140D': 'ChannelDeliveryContinuationSequence',
    '0074140E': 'OmittedApplicationSetupSequence',
    '00760001': 'ImplantAssemblyTemplateName',
    '00760003': 'ImplantAssemblyTemplateIssuer',
    '00760006': 'ImplantAssemblyTemplateVersion',
    '00760008': 'ReplacedImplantAssemblyTemplateSequence',
    '0076000A': 'ImplantAssemblyTemplateType',
    '0076000C': 'OriginalImplantAssemblyTemplateSequence',
    '0076000E': 'DerivationImplantAssemblyTemplateSequence',
    '00760010': 'ImplantAssemblyTemplateTargetAnatomySequence',
    '00760020': 'ProcedureTypeCodeSequence',
    '00760030': 'SurgicalTechnique',
    '00760032': 'ComponentTypesSequence',
    '00760034': 'ComponentTypeCodeSequence',
    '00760036': 'ExclusiveComponentType',
    '00760038': 'MandatoryComponentType',
    '00760040': 'ComponentSequence',
    '00760055': 'ComponentID',
    '00760060': 'ComponentAssemblySequence',
    '00760070': ('Component1ReferencedID'),
    '00760080': ('Component1ReferencedMatingFeatureSetID'),
    '00760090': ('Component1ReferencedMatingFeatureID'),
    '007600A0': ('Component2ReferencedID'),
    '007600B0': ('Component2ReferencedMatingFeatureSetID'),
    '007600C0': ('Component2ReferencedMatingFeatureID'),
    '00780001': 'ImplantTemplateGroupName',
    '00780010': 'ImplantTemplateGroupDescription',
    '00780020': 'ImplantTemplateGroupIssuer',
    '00780024': 'ImplantTemplateGroupVersion',
    '00780026': 'ReplacedImplantTemplateGroupSequence',
    '00780028': 'ImplantTemplateGroupTargetAnatomySequence',
    '0078002A': 'ImplantTemplateGroupMembersSequence',
    '0078002E': 'ImplantTemplateGroupMemberID',
    '00780050': 'ThreeDImplantTemplateGroupMemberMatchingPoint',
    '00780060': 'ThreeDImplantTemplateGroupMemberMatchingAxes',
    '00780070': ('ImplantTemplateGroupMemberMatching2DCoordinatesSequence'),
    '00780090': 'TwoDImplantTemplateGroupMemberMatchingPoint',
    '007800A0': 'TwoDImplantTemplateGroupMemberMatchingAxes',
    '007800B0': 'ImplantTemplateGroupVariationDimensionSequence',
    '007800B2': 'ImplantTemplateGroupVariationDimensionName',
    '007800B4': 'ImplantTemplateGroupVariationDimensionRankSequence',
    '007800B6': 'ReferencedImplantTemplateGroupMemberID',
    '007800B8': 'ImplantTemplateGroupVariationDimensionRank',
    '00800001': 'SurfaceScanAcquisitionTypeCodeSequence',
    '00800002': 'SurfaceScanModeCodeSequence',
    '00800003': 'RegistrationMethodCodeSequence',
    '00800004': 'ShotDurationTime',
    '00800005': 'ShotOffsetTime',
    '00800006': 'SurfacePointPresentationValueData',
    '00800007': 'SurfacePointColorCIELabValueData',
    '00800008': 'UVMappingSequence',
    '00800009': 'TextureLabel',
    '00800010': 'UValueData',
    '00800011': 'VValueData',
    '00800012': 'ReferencedTextureSequence',
    '00800013': 'ReferencedSurfaceDataSequence',
    '00820001': 'AssessmentSummary',
    '00820003': 'AssessmentSummaryDescription',
    '00820004': 'AssessedSOPInstanceSequence',
    '00820005': 'ReferencedComparisonSOPInstanceSequence',
    '00820006': 'NumberOfAssessmentObservations',
    '00820007': 'AssessmentObservationsSequence',
    '00820008': 'ObservationSignificance',
    '0082000A': 'ObservationDescription',
    '0082000C': 'StructuredConstraintObservationSequence',
    '00820010': 'AssessedAttributeValueSequence',
    '00820016': 'AssessmentSetID',
    '00820017': 'AssessmentRequesterSequence',
    '00820018': 'SelectorAttributeName',
    '00820019': 'SelectorAttributeKeyword',
    '00820021': 'AssessmentTypeCodeSequence',
    '00820022': 'ObservationBasisCodeSequence',
    '00820023': 'AssessmentLabel',
    '00820032': 'ConstraintType',
    '00820033': 'SpecificationSelectionGuidance',
    '00820034': 'ConstraintValueSequence',
    '00820035': 'RecommendedDefaultValueSequence',
    '00820036': 'ConstraintViolationSignificance',
    '00820037': 'ConstraintViolationCondition',
    '00820038': 'ModifiableConstraintFlag',
    '00880130': 'StorageMediaFileSetID',
    '00880140': 'StorageMediaFileSetUID',
    '00880200': 'IconImageSequence',
    '00880904': 'TopicTitle',
    '00880906': 'TopicSubject',
    '00880910': 'TopicAuthor',
    '00880912': 'TopicKeywords',
    '01000410': 'SOPInstanceStatus',
    '01000420': 'SOPAuthorizationDateTime',
    '01000424': 'SOPAuthorizationComment',
    '01000426': 'AuthorizationEquipmentCertificationNumber',
    '04000005': 'MACIDNumber',
    '04000010': 'MACCalculationTransferSyntaxUID',
    '04000015': 'MACAlgorithm',
    '04000020': 'DataElementsSigned',
    '04000100': 'DigitalSignatureUID',
    '04000105': 'DigitalSignatureDateTime',
    '04000110': 'CertificateType',
    '04000115': 'CertificateOfSigner',
    '04000120': 'Signature',
    '04000305': 'CertifiedTimestampType',
    '04000310': 'CertifiedTimestamp',
    '04000315': '',
    '04000401': 'DigitalSignaturePurposeCodeSequence',
    '04000402': 'ReferencedDigitalSignatureSequence',
    '04000403': 'ReferencedSOPInstanceMACSequence',
    '04000404': 'MAC',
    '04000500': 'EncryptedAttributesSequence',
    '04000510': 'EncryptedContentTransferSyntaxUID',
    '04000520': 'EncryptedContent',
    '04000550': 'ModifiedAttributesSequence',
    '04000561': 'OriginalAttributesSequence',
    '04000562': 'AttributeModificationDateTime',
    '04000563': 'ModifyingSystem',
    '04000564': 'SourceOfPreviousValues',
    '04000565': 'ReasonForTheAttributeModification',
    '04000600': 'InstanceOriginStatus',
    '20000010': 'NumberOfCopies',
    '2000001E': 'PrinterConfigurationSequence',
    '20000020': 'PrintPriority',
    '20000030': 'MediumType',
    '20000040': 'FilmDestination',
    '20000050': 'FilmSessionLabel',
    '20000060': 'MemoryAllocation',
    '20000061': 'MaximumMemoryAllocation',
    '20000062': 'ColorImagePrintingFlag',
    '20000063': 'CollationFlag',
    '20000065': 'AnnotationFlag',
    '20000067': 'ImageOverlayFlag',
    '20000069': 'PresentationLUTFlag',
    '2000006A': 'ImageBoxPresentationLUTFlag',
    '200000A0': 'MemoryBitDepth',
    '200000A1': 'PrintingBitDepth',
    '200000A2': 'MediaInstalledSequence',
    '200000A4': 'OtherMediaAvailableSequence',
    '200000A8': 'SupportedImageDisplayFormatsSequence',
    '20000500': 'ReferencedFilmBoxSequence',
    '20000510': 'ReferencedStoredPrintSequence',
    '20100010': 'ImageDisplayFormat',
    '20100030': 'AnnotationDisplayFormatID',
    '20100040': 'FilmOrientation',
    '20100050': 'FilmSizeID',
    '20100052': 'PrinterResolutionID',
    '20100054': 'DefaultPrinterResolutionID',
    '20100060': 'MagnificationType',
    '20100080': 'SmoothingType',
    '201000A6': 'DefaultMagnificationType',
    '201000A7': 'OtherMagnificationTypesAvailable',
    '201000A8': 'DefaultSmoothingType',
    '201000A9': 'OtherSmoothingTypesAvailable',
    '20100100': 'BorderDensity',
    '20100110': 'EmptyImageDensity',
    '20100120': 'MinDensity',
    '20100130': 'MaxDensity',
    '20100140': 'Trim',
    '20100150': 'ConfigurationInformation',
    '20100152': 'ConfigurationInformationDescription',
    '20100154': 'MaximumCollatedFilms',
    '2010015E': 'Illumination',
    '20100160': 'ReflectedAmbientLight',
    '20100376': 'PrinterPixelSpacing',
    '20100500': 'ReferencedFilmSessionSequence',
    '20100510': 'ReferencedImageBoxSequence',
    '20100520': 'ReferencedBasicAnnotationBoxSequence',
    '20200010': 'ImageBoxPosition',
    '20200020': 'Polarity',
    '20200030': 'RequestedImageSize',
    '20200040': 'RequestedDecimateCropBehavior',
    '20200050': 'RequestedResolutionID',
    '202000A0': 'RequestedImageSizeFlag',
    '202000A2': 'DecimateCropResult',
    '20200110': 'BasicGrayscaleImageSequence',
    '20200111': 'BasicColorImageSequence',
    '20200130': 'ReferencedImageOverlayBoxSequence',
    '20200140': 'ReferencedVOILUTBoxSequence',
    '20300010': 'AnnotationPosition',
    '20300020': 'TextString',
    '20400010': 'ReferencedOverlayPlaneSequence',
    '20400011': 'ReferencedOverlayPlaneGroups',
    '20400020': 'OverlayPixelDataSequence',
    '20400060': 'OverlayMagnificationType',
    '20400070': 'OverlaySmoothingType',
    '20400072': 'OverlayOrImageMagnification',
    '20400074': 'MagnifyToNumberOfColumns',
    '20400080': 'OverlayForegroundDensity',
    '20400082': 'OverlayBackgroundDensity',
    '20400090': 'OverlayMode',
    '20400100': 'ThresholdDensity',
    '20400500': 'ReferencedImageBoxSequenceRetired',
    '20500010': 'PresentationLUTSequence',
    '20500020': 'PresentationLUTShape',
    '20500500': 'ReferencedPresentationLUTSequence',
    '21000010': 'PrintJobID',
    '21000020': 'ExecutionStatus',
    '21000030': 'ExecutionStatusInfo',
    '21000040': 'CreationDate',
    '21000050': 'CreationTime',
    '21000070': 'Originator',
    '21000140': 'DestinationAE',
    '21000160': 'OwnerID',
    '21000170': 'NumberOfFilms',
    '21000500': 'ReferencedPrintJobSequencePullStoredPrint',
    '21100010': 'PrinterStatus',
    '21100020': 'PrinterStatusInfo',
    '21100030': 'PrinterName',
    '21100099': 'PrintQueueID',
    '21200010': 'QueueStatus',
    '21200050': 'PrintJobDescriptionSequence',
    '21200070': 'ReferencedPrintJobSequence',
    '21300010': 'PrintManagementCapabilitiesSequence',
    '21300015': 'PrinterCharacteristicsSequence',
    '21300030': 'FilmBoxContentSequence',
    '21300040': 'ImageBoxContentSequence',
    '21300050': 'AnnotationContentSequence',
    '21300060': 'ImageOverlayBoxContentSequence',
    '21300080': 'PresentationLUTContentSequence',
    '213000A0': 'ProposedStudySequence',
    '213000C0': 'OriginalImageSequence',
    '22000001': 'LabelUsingInformationExtractedFromInstances',
    '22000002': 'LabelText',
    '22000003': 'LabelStyleSelection',
    '22000004': 'MediaDisposition',
    '22000005': 'BarcodeValue',
    '22000006': 'BarcodeSymbology',
    '22000007': 'AllowMediaSplitting',
    '22000008': 'IncludeNonDICOMObjects',
    '22000009': 'IncludeDisplayApplication',
    '2200000A': 'PreserveCompositeInstancesAfterMediaCreation',
    '2200000B': 'TotalNumberOfPiecesOfMediaCreated',
    '2200000C': 'RequestedMediaApplicationProfile',
    '2200000D': 'ReferencedStorageMediaSequence',
    '2200000E': 'FailureAttributes',
    '2200000F': 'AllowLossyCompression',
    '22000020': 'RequestPriority',
    '30020002': 'RTImageLabel',
    '30020003': 'RTImageName',
    '30020004': 'RTImageDescription',
    '3002000A': 'ReportedValuesOrigin',
    '3002000C': 'RTImagePlane',
    '3002000D': 'XRayImageReceptorTranslation',
    '3002000E': 'XRayImageReceptorAngle',
    '30020010': 'RTImageOrientation',
    '30020011': 'ImagePlanePixelSpacing',
    '30020012': 'RTImagePosition',
    '30020020': 'RadiationMachineName',
    '30020022': 'RadiationMachineSAD',
    '30020024': 'RadiationMachineSSD',
    '30020026': 'RTImageSID',
    '30020028': 'SourceToReferenceObjectDistance',
    '30020029': 'FractionNumber',
    '30020030': 'ExposureSequence',
    '30020032': 'MetersetExposure',
    '30020034': 'DiaphragmPosition',
    '30020040': 'FluenceMapSequence',
    '30020041': 'FluenceDataSource',
    '30020042': 'FluenceDataScale',
    '30020050': 'PrimaryFluenceModeSequence',
    '30020051': 'FluenceMode',
    '30020052': 'FluenceModeID',
    '30040001': 'DVHType',
    '30040002': 'DoseUnits',
    '30040004': 'DoseType',
    '30040005': 'SpatialTransformOfDose',
    '30040006': 'DoseComment',
    '30040008': 'NormalizationPoint',
    '3004000A': 'DoseSummationType',
    '3004000C': 'GridFrameOffsetVector',
    '3004000E': 'DoseGridScaling',
    '30040010': 'RTDoseROISequence',
    '30040012': 'DoseValue',
    '30040014': 'TissueHeterogeneityCorrection',
    '30040040': 'DVHNormalizationPoint',
    '30040042': 'DVHNormalizationDoseValue',
    '30040050': 'DVHSequence',
    '30040052': 'DVHDoseScaling',
    '30040054': 'DVHVolumeUnits',
    '30040056': 'DVHNumberOfBins',
    '30040058': 'DVHData',
    '30040060': 'DVHReferencedROISequence',
    '30040062': 'DVHROIContributionType',
    '30040070': 'DVHMinimumDose',
    '30040072': 'DVHMaximumDose',
    '30040074': 'DVHMeanDose',
    '30060002': 'StructureSetLabel',
    '30060004': 'StructureSetName',
    '30060006': 'StructureSetDescription',
    '30060008': 'StructureSetDate',
    '30060009': 'StructureSetTime',
    '30060010': 'ReferencedFrameOfReferenceSequence',
    '30060012': 'RTReferencedStudySequence',
    '30060014': 'RTReferencedSeriesSequence',
    '30060016': 'ContourImageSequence',
    '30060018': 'PredecessorStructureSetSequence',
    '30060020': 'StructureSetROISequence',
    '30060022': 'ROINumber',
    '30060024': 'ReferencedFrameOfReferenceUID',
    '30060026': 'ROIName',
    '30060028': 'ROIDescription',
    '3006002A': 'ROIDisplayColor',
    '3006002C': 'ROIVolume',
    '30060030': 'RTRelatedROISequence',
    '30060033': 'RTROIRelationship',
    '30060036': 'ROIGenerationAlgorithm',
    '30060038': 'ROIGenerationDescription',
    '30060039': 'ROIContourSequence',
    '30060040': 'ContourSequence',
    '30060042': 'ContourGeometricType',
    '30060044': 'ContourSlabThickness',
    '30060045': 'ContourOffsetVector',
    '30060046': 'NumberOfContourPoints',
    '30060048': 'ContourNumber',
    '30060049': 'AttachedContours',
    '30060050': 'ContourData',
    '30060080': 'RTROIObservationsSequence',
    '30060082': 'ObservationNumber',
    '30060084': 'ReferencedROINumber',
    '30060085': 'ROIObservationLabel',
    '30060086': 'RTROIIdentificationCodeSequence',
    '30060088': 'ROIObservationDescription',
    '300600A0': 'RelatedRTROIObservationsSequence',
    '300600A4': 'RTROIInterpretedType',
    '300600A6': 'ROIInterpreter',
    '300600B0': 'ROIPhysicalPropertiesSequence',
    '300600B2': 'ROIPhysicalProperty',
    '300600B4': 'ROIPhysicalPropertyValue',
    '300600B6': 'ROIElementalCompositionSequence',
    '300600B7': 'ROIElementalCompositionAtomicNumber',
    '300600B8': 'ROIElementalCompositionAtomicMassFraction',
    '300600B9': 'AdditionalRTROIIdentificationCodeSequence',
    '300600C0': 'FrameOfReferenceRelationshipSequence',
    '300600C2': 'RelatedFrameOfReferenceUID',
    '300600C4': 'FrameOfReferenceTransformationType',
    '300600C6': 'FrameOfReferenceTransformationMatrix',
    '300600C8': 'FrameOfReferenceTransformationComment',
    '30080010': 'MeasuredDoseReferenceSequence',
    '30080012': 'MeasuredDoseDescription',
    '30080014': 'MeasuredDoseType',
    '30080016': 'MeasuredDoseValue',
    '30080020': 'TreatmentSessionBeamSequence',
    '30080021': 'TreatmentSessionIonBeamSequence',
    '30080022': 'CurrentFractionNumber',
    '30080024': 'TreatmentControlPointDate',
    '30080025': 'TreatmentControlPointTime',
    '3008002A': 'TreatmentTerminationStatus',
    '3008002B': 'TreatmentTerminationCode',
    '3008002C': 'TreatmentVerificationStatus',
    '30080030': 'ReferencedTreatmentRecordSequence',
    '30080032': 'SpecifiedPrimaryMeterset',
    '30080033': 'SpecifiedSecondaryMeterset',
    '30080036': 'DeliveredPrimaryMeterset',
    '30080037': 'DeliveredSecondaryMeterset',
    '3008003A': 'SpecifiedTreatmentTime',
    '3008003B': 'DeliveredTreatmentTime',
    '30080040': 'ControlPointDeliverySequence',
    '30080041': 'IonControlPointDeliverySequence',
    '30080042': 'SpecifiedMeterset',
    '30080044': 'DeliveredMeterset',
    '30080045': 'MetersetRateSet',
    '30080046': 'MetersetRateDelivered',
    '30080047': 'ScanSpotMetersetsDelivered',
    '30080048': 'DoseRateDelivered',
    '30080050': 'TreatmentSummaryCalculatedDoseReferenceSequence',
    '30080052': 'CumulativeDoseToDoseReference',
    '30080054': 'FirstTreatmentDate',
    '30080056': 'MostRecentTreatmentDate',
    '3008005A': 'NumberOfFractionsDelivered',
    '30080060': 'OverrideSequence',
    '30080061': 'ParameterSequencePointer',
    '30080062': 'OverrideParameterPointer',
    '30080063': 'ParameterItemIndex',
    '30080064': 'MeasuredDoseReferenceNumber',
    '30080065': 'ParameterPointer',
    '30080066': 'OverrideReason',
    '30080067': 'ParameterValueNumber',
    '30080068': 'CorrectedParameterSequence',
    '3008006A': 'CorrectionValue',
    '30080070': 'CalculatedDoseReferenceSequence',
    '30080072': 'CalculatedDoseReferenceNumber',
    '30080074': 'CalculatedDoseReferenceDescription',
    '30080076': 'CalculatedDoseReferenceDoseValue',
    '30080078': 'StartMeterset',
    '3008007A': 'EndMeterset',
    '30080080': 'ReferencedMeasuredDoseReferenceSequence',
    '30080082': 'ReferencedMeasuredDoseReferenceNumber',
    '30080090': 'ReferencedCalculatedDoseReferenceSequence',
    '30080092': 'ReferencedCalculatedDoseReferenceNumber',
    '300800A0': 'BeamLimitingDeviceLeafPairsSequence',
    '300800B0': 'RecordedWedgeSequence',
    '300800C0': 'RecordedCompensatorSequence',
    '300800D0': 'RecordedBlockSequence',
    '300800E0': 'TreatmentSummaryMeasuredDoseReferenceSequence',
    '300800F0': 'RecordedSnoutSequence',
    '300800F2': 'RecordedRangeShifterSequence',
    '300800F4': 'RecordedLateralSpreadingDeviceSequence',
    '300800F6': 'RecordedRangeModulatorSequence',
    '30080100': 'RecordedSourceSequence',
    '30080105': 'SourceSerialNumber',
    '30080110': 'TreatmentSessionApplicationSetupSequence',
    '30080116': 'ApplicationSetupCheck',
    '30080120': 'RecordedBrachyAccessoryDeviceSequence',
    '30080122': 'ReferencedBrachyAccessoryDeviceNumber',
    '30080130': 'RecordedChannelSequence',
    '30080132': 'SpecifiedChannelTotalTime',
    '30080134': 'DeliveredChannelTotalTime',
    '30080136': 'SpecifiedNumberOfPulses',
    '30080138': 'DeliveredNumberOfPulses',
    '3008013A': 'SpecifiedPulseRepetitionInterval',
    '3008013C': 'DeliveredPulseRepetitionInterval',
    '30080140': 'RecordedSourceApplicatorSequence',
    '30080142': 'ReferencedSourceApplicatorNumber',
    '30080150': 'RecordedChannelShieldSequence',
    '30080152': 'ReferencedChannelShieldNumber',
    '30080160': 'BrachyControlPointDeliveredSequence',
    '30080162': 'SafePositionExitDate',
    '30080164': 'SafePositionExitTime',
    '30080166': 'SafePositionReturnDate',
    '30080168': 'SafePositionReturnTime',
    '30080171': 'PulseSpecificBrachyControlPointDeliveredSequence',
    '30080172': 'PulseNumber',
    '30080173': 'BrachyPulseControlPointDeliveredSequence',
    '30080200': 'CurrentTreatmentStatus',
    '30080202': 'TreatmentStatusComment',
    '30080220': 'FractionGroupSummarySequence',
    '30080223': 'ReferencedFractionNumber',
    '30080224': 'FractionGroupType',
    '30080230': 'BeamStopperPosition',
    '30080240': 'FractionStatusSummarySequence',
    '30080250': 'TreatmentDate',
    '30080251': 'TreatmentTime',
    '300A0002': 'RTPlanLabel',
    '300A0003': 'RTPlanName',
    '300A0004': 'RTPlanDescription',
    '300A0006': 'RTPlanDate',
    '300A0007': 'RTPlanTime',
    '300A0009': 'TreatmentProtocols',
    '300A000A': 'PlanIntent',
    '300A000B': 'TreatmentSites',
    '300A000C': 'RTPlanGeometry',
    '300A000E': 'PrescriptionDescription',
    '300A0010': 'DoseReferenceSequence',
    '300A0012': 'DoseReferenceNumber',
    '300A0013': 'DoseReferenceUID',
    '300A0014': 'DoseReferenceStructureType',
    '300A0015': 'NominalBeamEnergyUnit',
    '300A0016': 'DoseReferenceDescription',
    '300A0018': 'DoseReferencePointCoordinates',
    '300A001A': 'NominalPriorDose',
    '300A0020': 'DoseReferenceType',
    '300A0021': 'ConstraintWeight',
    '300A0022': 'DeliveryWarningDose',
    '300A0023': 'DeliveryMaximumDose',
    '300A0025': 'TargetMinimumDose',
    '300A0026': 'TargetPrescriptionDose',
    '300A0027': 'TargetMaximumDose',
    '300A0028': 'TargetUnderdoseVolumeFraction',
    '300A002A': 'OrganAtRiskFullVolumeDose',
    '300A002B': 'OrganAtRiskLimitDose',
    '300A002C': 'OrganAtRiskMaximumDose',
    '300A002D': 'OrganAtRiskOverdoseVolumeFraction',
    '300A0040': 'ToleranceTableSequence',
    '300A0042': 'ToleranceTableNumber',
    '300A0043': 'ToleranceTableLabel',
    '300A0044': 'GantryAngleTolerance',
    '300A0046': 'BeamLimitingDeviceAngleTolerance',
    '300A0048': 'BeamLimitingDeviceToleranceSequence',
    '300A004A': 'BeamLimitingDevicePositionTolerance',
    '300A004B': 'SnoutPositionTolerance',
    '300A004C': 'PatientSupportAngleTolerance',
    '300A004E': 'TableTopEccentricAngleTolerance',
    '300A004F': 'TableTopPitchAngleTolerance',
    '300A0050': 'TableTopRollAngleTolerance',
    '300A0051': 'TableTopVerticalPositionTolerance',
    '300A0052': 'TableTopLongitudinalPositionTolerance',
    '300A0053': 'TableTopLateralPositionTolerance',
    '300A0055': 'RTPlanRelationship',
    '300A0070': 'FractionGroupSequence',
    '300A0071': 'FractionGroupNumber',
    '300A0072': 'FractionGroupDescription',
    '300A0078': 'NumberOfFractionsPlanned',
    '300A0079': 'NumberOfFractionPatternDigitsPerDay',
    '300A007A': 'RepeatFractionCycleLength',
    '300A007B': 'FractionPattern',
    '300A0080': 'NumberOfBeams',
    '300A0082': 'BeamDoseSpecificationPoint',
    '300A0083': 'ReferencedDoseReferenceUID',
    '300A0084': 'BeamDose',
    '300A0086': 'BeamMeterset',
    '300A0088': 'BeamDosePointDepth',
    '300A0089': 'BeamDosePointEquivalentDepth',
    '300A008A': 'BeamDosePointSSD',
    '300A008B': 'BeamDoseMeaning',
    '300A008C': 'BeamDoseVerificationControlPointSequence',
    '300A008D': 'AverageBeamDosePointDepth',
    '300A008E': 'AverageBeamDosePointEquivalentDepth',
    '300A008F': 'AverageBeamDosePointSSD',
    '300A0090': 'BeamDoseType',
    '300A0091': 'AlternateBeamDose',
    '300A0092': 'AlternateBeamDoseType',
    '300A0093': 'DepthValueAveragingFlag',
    '300A0094': 'BeamDosePointSourceToExternalContourDistance',
    '300A00A0': 'NumberOfBrachyApplicationSetups',
    '300A00A2': 'BrachyApplicationSetupDoseSpecificationPoint',
    '300A00A4': 'BrachyApplicationSetupDose',
    '300A00B0': 'BeamSequence',
    '300A00B2': 'TreatmentMachineName',
    '300A00B3': 'PrimaryDosimeterUnit',
    '300A00B4': 'SourceAxisDistance',
    '300A00B6': 'BeamLimitingDeviceSequence',
    '300A00B8': 'RTBeamLimitingDeviceType',
    '300A00BA': 'SourceToBeamLimitingDeviceDistance',
    '300A00BB': 'IsocenterToBeamLimitingDeviceDistance',
    '300A00BC': 'NumberOfLeafJawPairs',
    '300A00BE': 'LeafPositionBoundaries',
    '300A00C0': 'BeamNumber',
    '300A00C2': 'BeamName',
    '300A00C3': 'BeamDescription',
    '300A00C4': 'BeamType',
    '300A00C5': 'BeamDeliveryDurationLimit',
    '300A00C6': 'RadiationType',
    '300A00C7': 'HighDoseTechniqueType',
    '300A00C8': 'ReferenceImageNumber',
    '300A00CA': 'PlannedVerificationImageSequence',
    '300A00CC': 'ImagingDeviceSpecificAcquisitionParameters',
    '300A00CE': 'TreatmentDeliveryType',
    '300A00D0': 'NumberOfWedges',
    '300A00D1': 'WedgeSequence',
    '300A00D2': 'WedgeNumber',
    '300A00D3': 'WedgeType',
    '300A00D4': 'WedgeID',
    '300A00D5': 'WedgeAngle',
    '300A00D6': 'WedgeFactor',
    '300A00D7': 'TotalWedgeTrayWaterEquivalentThickness',
    '300A00D8': 'WedgeOrientation',
    '300A00D9': 'IsocenterToWedgeTrayDistance',
    '300A00DA': 'SourceToWedgeTrayDistance',
    '300A00DB': 'WedgeThinEdgePosition',
    '300A00DC': 'BolusID',
    '300A00DD': 'BolusDescription',
    '300A00DE': 'EffectiveWedgeAngle',
    '300A00E0': 'NumberOfCompensators',
    '300A00E1': 'MaterialID',
    '300A00E2': 'TotalCompensatorTrayFactor',
    '300A00E3': 'CompensatorSequence',
    '300A00E4': 'CompensatorNumber',
    '300A00E5': 'CompensatorID',
    '300A00E6': 'SourceToCompensatorTrayDistance',
    '300A00E7': 'CompensatorRows',
    '300A00E8': 'CompensatorColumns',
    '300A00E9': 'CompensatorPixelSpacing',
    '300A00EA': 'CompensatorPosition',
    '300A00EB': 'CompensatorTransmissionData',
    '300A00EC': 'CompensatorThicknessData',
    '300A00ED': 'NumberOfBoli',
    '300A00EE': 'CompensatorType',
    '300A00EF': 'CompensatorTrayID',
    '300A00F0': 'NumberOfBlocks',
    '300A00F2': 'TotalBlockTrayFactor',
    '300A00F3': 'TotalBlockTrayWaterEquivalentThickness',
    '300A00F4': 'BlockSequence',
    '300A00F5': 'BlockTrayID',
    '300A00F6': 'SourceToBlockTrayDistance',
    '300A00F7': 'IsocenterToBlockTrayDistance',
    '300A00F8': 'BlockType',
    '300A00F9': 'AccessoryCode',
    '300A00FA': 'BlockDivergence',
    '300A00FB': 'BlockMountingPosition',
    '300A00FC': 'BlockNumber',
    '300A00FE': 'BlockName',
    '300A0100': 'BlockThickness',
    '300A0102': 'BlockTransmission',
    '300A0104': 'BlockNumberOfPoints',
    '300A0106': 'BlockData',
    '300A0107': 'ApplicatorSequence',
    '300A0108': 'ApplicatorID',
    '300A0109': 'ApplicatorType',
    '300A010A': 'ApplicatorDescription',
    '300A010C': 'CumulativeDoseReferenceCoefficient',
    '300A010E': 'FinalCumulativeMetersetWeight',
    '300A0110': 'NumberOfControlPoints',
    '300A0111': 'ControlPointSequence',
    '300A0112': 'ControlPointIndex',
    '300A0114': 'NominalBeamEnergy',
    '300A0115': 'DoseRateSet',
    '300A0116': 'WedgePositionSequence',
    '300A0118': 'WedgePosition',
    '300A011A': 'BeamLimitingDevicePositionSequence',
    '300A011C': 'LeafJawPositions',
    '300A011E': 'GantryAngle',
    '300A011F': 'GantryRotationDirection',
    '300A0120': 'BeamLimitingDeviceAngle',
    '300A0121': 'BeamLimitingDeviceRotationDirection',
    '300A0122': 'PatientSupportAngle',
    '300A0123': 'PatientSupportRotationDirection',
    '300A0124': 'TableTopEccentricAxisDistance',
    '300A0125': 'TableTopEccentricAngle',
    '300A0126': 'TableTopEccentricRotationDirection',
    '300A0128': 'TableTopVerticalPosition',
    '300A0129': 'TableTopLongitudinalPosition',
    '300A012A': 'TableTopLateralPosition',
    '300A012C': 'IsocenterPosition',
    '300A012E': 'SurfaceEntryPoint',
    '300A0130': 'SourceToSurfaceDistance',
    '300A0131': 'AverageBeamDosePointSourceToExternalContourDistance',
    '300A0132': 'SourceToExternalContourDistance',
    '300A0133': 'ExternalContourEntryPoint',
    '300A0134': 'CumulativeMetersetWeight',
    '300A0140': 'TableTopPitchAngle',
    '300A0142': 'TableTopPitchRotationDirection',
    '300A0144': 'TableTopRollAngle',
    '300A0146': 'TableTopRollRotationDirection',
    '300A0148': 'HeadFixationAngle',
    '300A014A': 'GantryPitchAngle',
    '300A014C': 'GantryPitchRotationDirection',
    '300A014E': 'GantryPitchAngleTolerance',
    '300A0150': 'FixationEye',
    '300A0151': 'ChairHeadFramePosition',
    '300A0152': 'HeadFixationAngleTolerance',
    '300A0153': 'ChairHeadFramePositionTolerance',
    '300A0154': 'FixationLightAzimuthalAngleTolerance',
    '300A0155': 'FixationLightPolarAngleTolerance',
    '300A0180': 'PatientSetupSequence',
    '300A0182': 'PatientSetupNumber',
    '300A0183': 'PatientSetupLabel',
    '300A0184': 'PatientAdditionalPosition',
    '300A0190': 'FixationDeviceSequence',
    '300A0192': 'FixationDeviceType',
    '300A0194': 'FixationDeviceLabel',
    '300A0196': 'FixationDeviceDescription',
    '300A0198': 'FixationDevicePosition',
    '300A0199': 'FixationDevicePitchAngle',
    '300A019A': 'FixationDeviceRollAngle',
    '300A01A0': 'ShieldingDeviceSequence',
    '300A01A2': 'ShieldingDeviceType',
    '300A01A4': 'ShieldingDeviceLabel',
    '300A01A6': 'ShieldingDeviceDescription',
    '300A01A8': 'ShieldingDevicePosition',
    '300A01B0': 'SetupTechnique',
    '300A01B2': 'SetupTechniqueDescription',
    '300A01B4': 'SetupDeviceSequence',
    '300A01B6': 'SetupDeviceType',
    '300A01B8': 'SetupDeviceLabel',
    '300A01BA': 'SetupDeviceDescription',
    '300A01BC': 'SetupDeviceParameter',
    '300A01D0': 'SetupReferenceDescription',
    '300A01D2': 'TableTopVerticalSetupDisplacement',
    '300A01D4': 'TableTopLongitudinalSetupDisplacement',
    '300A01D6': 'TableTopLateralSetupDisplacement',
    '300A0200': 'BrachyTreatmentTechnique',
    '300A0202': 'BrachyTreatmentType',
    '300A0206': 'TreatmentMachineSequence',
    '300A0210': 'SourceSequence',
    '300A0212': 'SourceNumber',
    '300A0214': 'SourceType',
    '300A0216': 'SourceManufacturer',
    '300A0218': 'ActiveSourceDiameter',
    '300A021A': 'ActiveSourceLength',
    '300A021B': 'SourceModelID',
    '300A021C': 'SourceDescription',
    '300A0222': 'SourceEncapsulationNominalThickness',
    '300A0224': 'SourceEncapsulationNominalTransmission',
    '300A0226': 'SourceIsotopeName',
    '300A0228': 'SourceIsotopeHalfLife',
    '300A0229': 'SourceStrengthUnits',
    '300A022A': 'ReferenceAirKermaRate',
    '300A022B': 'SourceStrength',
    '300A022C': 'SourceStrengthReferenceDate',
    '300A022E': 'SourceStrengthReferenceTime',
    '300A0230': 'ApplicationSetupSequence',
    '300A0232': 'ApplicationSetupType',
    '300A0234': 'ApplicationSetupNumber',
    '300A0236': 'ApplicationSetupName',
    '300A0238': 'ApplicationSetupManufacturer',
    '300A0240': 'TemplateNumber',
    '300A0242': 'TemplateType',
    '300A0244': 'TemplateName',
    '300A0250': 'TotalReferenceAirKerma',
    '300A0260': 'BrachyAccessoryDeviceSequence',
    '300A0262': 'BrachyAccessoryDeviceNumber',
    '300A0263': 'BrachyAccessoryDeviceID',
    '300A0264': 'BrachyAccessoryDeviceType',
    '300A0266': 'BrachyAccessoryDeviceName',
    '300A026A': 'BrachyAccessoryDeviceNominalThickness',
    '300A026C': 'BrachyAccessoryDeviceNominalTransmission',
    '300A0271': 'ChannelEffectiveLength',
    '300A0272': 'ChannelInnerLength',
    '300A0273': 'AfterloaderChannelID',
    '300A0274': 'SourceApplicatorTipLength',
    '300A0280': 'ChannelSequence',
    '300A0282': 'ChannelNumber',
    '300A0284': 'ChannelLength',
    '300A0286': 'ChannelTotalTime',
    '300A0288': 'SourceMovementType',
    '300A028A': 'NumberOfPulses',
    '300A028C': 'PulseRepetitionInterval',
    '300A0290': 'SourceApplicatorNumber',
    '300A0291': 'SourceApplicatorID',
    '300A0292': 'SourceApplicatorType',
    '300A0294': 'SourceApplicatorName',
    '300A0296': 'SourceApplicatorLength',
    '300A0298': 'SourceApplicatorManufacturer',
    '300A029C': 'SourceApplicatorWallNominalThickness',
    '300A029E': 'SourceApplicatorWallNominalTransmission',
    '300A02A0': 'SourceApplicatorStepSize',
    '300A02A2': 'TransferTubeNumber',
    '300A02A4': 'TransferTubeLength',
    '300A02B0': 'ChannelShieldSequence',
    '300A02B2': 'ChannelShieldNumber',
    '300A02B3': 'ChannelShieldID',
    '300A02B4': 'ChannelShieldName',
    '300A02B8': 'ChannelShieldNominalThickness',
    '300A02BA': 'ChannelShieldNominalTransmission',
    '300A02C8': 'FinalCumulativeTimeWeight',
    '300A02D0': 'BrachyControlPointSequence',
    '300A02D2': 'ControlPointRelativePosition',
    '300A02D4': ('ControlPoint3DPosition'),
    '300A02D6': 'CumulativeTimeWeight',
    '300A02E0': 'CompensatorDivergence',
    '300A02E1': 'CompensatorMountingPosition',
    '300A02E2': 'SourceToCompensatorDistance',
    '300A02E3': 'TotalCompensatorTrayWaterEquivalentThickness',
    '300A02E4': 'IsocenterToCompensatorTrayDistance',
    '300A02E5': 'CompensatorColumnOffset',
    '300A02E6': 'IsocenterToCompensatorDistances',
    '300A02E7': 'CompensatorRelativeStoppingPowerRatio',
    '300A02E8': 'CompensatorMillingToolDiameter',
    '300A02EA': 'IonRangeCompensatorSequence',
    '300A02EB': 'CompensatorDescription',
    '300A0302': 'RadiationMassNumber',
    '300A0304': 'RadiationAtomicNumber',
    '300A0306': 'RadiationChargeState',
    '300A0308': 'ScanMode',
    '300A0309': 'ModulatedScanModeType',
    '300A030A': 'VirtualSourceAxisDistances',
    '300A030C': 'SnoutSequence',
    '300A030D': 'SnoutPosition',
    '300A030F': 'SnoutID',
    '300A0312': 'NumberOfRangeShifters',
    '300A0314': 'RangeShifterSequence',
    '300A0316': 'RangeShifterNumber',
    '300A0318': 'RangeShifterID',
    '300A0320': 'RangeShifterType',
    '300A0322': 'RangeShifterDescription',
    '300A0330': 'NumberOfLateralSpreadingDevices',
    '300A0332': 'LateralSpreadingDeviceSequence',
    '300A0334': 'LateralSpreadingDeviceNumber',
    '300A0336': 'LateralSpreadingDeviceID',
    '300A0338': 'LateralSpreadingDeviceType',
    '300A033A': 'LateralSpreadingDeviceDescription',
    '300A033C': 'LateralSpreadingDeviceWaterEquivalentThickness',
    '300A0340': 'NumberOfRangeModulators',
    '300A0342': 'RangeModulatorSequence',
    '300A0344': 'RangeModulatorNumber',
    '300A0346': 'RangeModulatorID',
    '300A0348': 'RangeModulatorType',
    '300A034A': 'RangeModulatorDescription',
    '300A034C': 'BeamCurrentModulationID',
    '300A0350': 'PatientSupportType',
    '300A0352': 'PatientSupportID',
    '300A0354': 'PatientSupportAccessoryCode',
    '300A0355': 'TrayAccessoryCode',
    '300A0356': 'FixationLightAzimuthalAngle',
    '300A0358': 'FixationLightPolarAngle',
    '300A035A': 'MetersetRate',
    '300A0360': 'RangeShifterSettingsSequence',
    '300A0362': 'RangeShifterSetting',
    '300A0364': 'IsocenterToRangeShifterDistance',
    '300A0366': 'RangeShifterWaterEquivalentThickness',
    '300A0370': 'LateralSpreadingDeviceSettingsSequence',
    '300A0372': 'LateralSpreadingDeviceSetting',
    '300A0374': 'IsocenterToLateralSpreadingDeviceDistance',
    '300A0380': 'RangeModulatorSettingsSequence',
    '300A0382': 'RangeModulatorGatingStartValue',
    '300A0384': 'RangeModulatorGatingStopValue',
    '300A0386': 'RangeModulatorGatingStartWaterEquivalentThickness',
    '300A0388': 'RangeModulatorGatingStopWaterEquivalentThickness',
    '300A038A': 'IsocenterToRangeModulatorDistance',
    '300A038F': 'ScanSpotTimeOffset',
    '300A0390': 'ScanSpotTuneID',
    '300A0391': 'ScanSpotPrescribedIndices',
    '300A0392': 'NumberOfScanSpotPositions',
    '300A0393': 'ScanSpotReordered',
    '300A0394': 'ScanSpotPositionMap',
    '300A0395': 'ScanSpotReorderingAllowed',
    '300A0396': 'ScanSpotMetersetWeights',
    '300A0398': 'ScanningSpotSize',
    '300A039A': 'NumberOfPaintings',
    '300A03A0': 'IonToleranceTableSequence',
    '300A03A2': 'IonBeamSequence',
    '300A03A4': 'IonBeamLimitingDeviceSequence',
    '300A03A6': 'IonBlockSequence',
    '300A03A8': 'IonControlPointSequence',
    '300A03AA': 'IonWedgeSequence',
    '300A03AC': 'IonWedgePositionSequence',
    '300A0401': 'ReferencedSetupImageSequence',
    '300A0402': 'SetupImageComment',
    '300A0410': 'MotionSynchronizationSequence',
    '300A0412': 'ControlPointOrientation',
    '300A0420': 'GeneralAccessorySequence',
    '300A0421': 'GeneralAccessoryID',
    '300A0422': 'GeneralAccessoryDescription',
    '300A0423': 'GeneralAccessoryType',
    '300A0424': 'GeneralAccessoryNumber',
    '300A0425': 'SourceToGeneralAccessoryDistance',
    '300A0431': 'ApplicatorGeometrySequence',
    '300A0432': 'ApplicatorApertureShape',
    '300A0433': 'ApplicatorOpening',
    '300A0434': 'ApplicatorOpeningX',
    '300A0435': 'ApplicatorOpeningY',
    '300A0436': 'SourceToApplicatorMountingPositionDistance',
    '300A0440': 'NumberOfBlockSlabItems',
    '300A0441': 'BlockSlabSequence',
    '300A0442': 'BlockSlabThickness',
    '300A0443': 'BlockSlabNumber',
    '300A0450': 'DeviceMotionControlSequence',
    '300A0451': 'DeviceMotionExecutionMode',
    '300A0452': 'DeviceMotionObservationMode',
    '300A0453': 'DeviceMotionParameterCodeSequence',
    '300A0501': 'DistalDepthFraction',
    '300A0502': 'DistalDepth',
    '300A0503': 'NominalRangeModulationFractions',
    '300A0504': 'NominalRangeModulatedRegionDepths',
    '300A0505': 'DepthDoseParametersSequence',
    '300A0506': 'DeliveredDepthDoseParametersSequence',
    '300A0507': 'DeliveredDistalDepthFraction',
    '300A0508': 'DeliveredDistalDepth',
    '300A0509': 'DeliveredNominalRangeModulationFractions',
    '300A0510': 'DeliveredNominalRangeModulatedRegionDepths',
    '300A0511': 'DeliveredReferenceDoseDefinition',
    '300A0512': 'ReferenceDoseDefinition',
    '300C0002': 'ReferencedRTPlanSequence',
    '300C0004': 'ReferencedBeamSequence',
    '300C0006': 'ReferencedBeamNumber',
    '300C0007': 'ReferencedReferenceImageNumber',
    '300C0008': 'StartCumulativeMetersetWeight',
    '300C0009': 'EndCumulativeMetersetWeight',
    '300C000A': 'ReferencedBrachyApplicationSetupSequence',
    '300C000C': 'ReferencedBrachyApplicationSetupNumber',
    '300C000E': 'ReferencedSourceNumber',
    '300C0020': 'ReferencedFractionGroupSequence',
    '300C0022': 'ReferencedFractionGroupNumber',
    '300C0040': 'ReferencedVerificationImageSequence',
    '300C0042': 'ReferencedReferenceImageSequence',
    '300C0050': 'ReferencedDoseReferenceSequence',
    '300C0051': 'ReferencedDoseReferenceNumber',
    '300C0055': 'BrachyReferencedDoseReferenceSequence',
    '300C0060': 'ReferencedStructureSetSequence',
    '300C006A': 'ReferencedPatientSetupNumber',
    '300C0080': 'ReferencedDoseSequence',
    '300C00A0': 'ReferencedToleranceTableNumber',
    '300C00B0': 'ReferencedBolusSequence',
    '300C00C0': 'ReferencedWedgeNumber',
    '300C00D0': 'ReferencedCompensatorNumber',
    '300C00E0': 'ReferencedBlockNumber',
    '300C00F0': 'ReferencedControlPointIndex',
    '300C00F2': 'ReferencedControlPointSequence',
    '300C00F4': 'ReferencedStartControlPointIndex',
    '300C00F6': 'ReferencedStopControlPointIndex',
    '300C0100': 'ReferencedRangeShifterNumber',
    '300C0102': 'ReferencedLateralSpreadingDeviceNumber',
    '300C0104': 'ReferencedRangeModulatorNumber',
    '300C0111': 'OmittedBeamTaskSequence',
    '300C0112': 'ReasonForOmission',
    '300C0113': 'ReasonForOmissionDescription',
    '300E0002': 'ApprovalStatus',
    '300E0004': 'ReviewDate',
    '300E0005': 'ReviewTime',
    '300E0008': 'ReviewerName',
    '40000010': 'Arbitrary',
    '40004000': 'TextComments',
    '40080040': 'ResultsID',
    '40080042': 'ResultsIDIssuer',
    '40080050': 'ReferencedInterpretationSequence',
    '400800FF': 'ReportProductionStatusTrial',
    '40080100': 'InterpretationRecordedDate',
    '40080101': 'InterpretationRecordedTime',
    '40080102': 'InterpretationRecorder',
    '40080103': 'ReferenceToRecordedSound',
    '40080108': 'InterpretationTranscriptionDate',
    '40080109': 'InterpretationTranscriptionTime',
    '4008010A': 'InterpretationTranscriber',
    '4008010B': 'InterpretationText',
    '4008010C': 'InterpretationAuthor',
    '40080111': 'InterpretationApproverSequence',
    '40080112': 'InterpretationApprovalDate',
    '40080113': 'InterpretationApprovalTime',
    '40080114': 'PhysicianApprovingInterpretation',
    '40080115': 'InterpretationDiagnosisDescription',
    '40080117': 'InterpretationDiagnosisCodeSequence',
    '40080118': 'ResultsDistributionListSequence',
    '40080119': 'DistributionName',
    '4008011A': 'DistributionAddress',
    '40080200': 'InterpretationID',
    '40080202': 'InterpretationIDIssuer',
    '40080210': 'InterpretationTypeID',
    '40080212': 'InterpretationStatusID',
    '40080300': 'Impressions',
    '40084000': 'ResultsComments',
    '40100001': 'LowEnergyDetectors',
    '40100002': 'HighEnergyDetectors',
    '40100004': 'DetectorGeometrySequence',
    '40101001': 'ThreatROIVoxelSequence',
    '40101004': 'ThreatROIBase',
    '40101005': 'ThreatROIExtents',
    '40101006': 'ThreatROIBitmap',
    '40101007': 'RouteSegmentID',
    '40101008': 'GantryType',
    '40101009': 'OOIOwnerType',
    '4010100A': 'RouteSegmentSequence',
    '40101010': 'PotentialThreatObjectID',
    '40101011': 'ThreatSequence',
    '40101012': 'ThreatCategory',
    '40101013': 'ThreatCategoryDescription',
    '40101014': 'ATDAbilityAssessment',
    '40101015': 'ATDAssessmentFlag',
    '40101016': 'ATDAssessmentProbability',
    '40101017': 'Mass',
    '40101018': 'Density',
    '40101019': 'ZEffective',
    '4010101A': 'BoardingPassID',
    '4010101B': 'CenterOfMass',
    '4010101C': 'CenterOfPTO',
    '4010101D': 'BoundingPolygon',
    '4010101E': 'RouteSegmentStartLocationID',
    '4010101F': 'RouteSegmentEndLocationID',
    '40101020': 'RouteSegmentLocationIDType',
    '40101021': 'AbortReason',
    '40101023': 'VolumeOfPTO',
    '40101024': 'AbortFlag',
    '40101025': 'RouteSegmentStartTime',
    '40101026': 'RouteSegmentEndTime',
    '40101027': 'TDRType',
    '40101028': 'InternationalRouteSegment',
    '40101029': 'ThreatDetectionAlgorithmandVersion',
    '4010102A': 'AssignedLocation',
    '4010102B': 'AlarmDecisionTime',
    '40101031': 'AlarmDecision',
    '40101033': 'NumberOfTotalObjects',
    '40101034': 'NumberOfAlarmObjects',
    '40101037': 'PTORepresentationSequence',
    '40101038': 'ATDAssessmentSequence',
    '40101039': 'TIPType',
    '4010103A': 'DICOSVersion',
    '40101041': 'OOIOwnerCreationTime',
    '40101042': 'OOIType',
    '40101043': 'OOISize',
    '40101044': 'AcquisitionStatus',
    '40101045': 'BasisMaterialsCodeSequence',
    '40101046': 'PhantomType',
    '40101047': 'OOIOwnerSequence',
    '40101048': 'ScanType',
    '40101051': 'ItineraryID',
    '40101052': 'ItineraryIDType',
    '40101053': 'ItineraryIDAssigningAuthority',
    '40101054': 'RouteID',
    '40101055': 'RouteIDAssigningAuthority',
    '40101056': 'InboundArrivalType',
    '40101058': 'CarrierID',
    '40101059': 'CarrierIDAssigningAuthority',
    '40101060': 'SourceOrientation',
    '40101061': 'SourcePosition',
    '40101062': 'BeltHeight',
    '40101064': 'AlgorithmRoutingCodeSequence',
    '40101067': 'TransportClassification',
    '40101068': 'OOITypeDescriptor',
    '40101069': 'TotalProcessingTime',
    '4010106C': 'DetectorCalibrationData',
    '4010106D': 'AdditionalScreeningPerformed',
    '4010106E': 'AdditionalInspectionSelectionCriteria',
    '4010106F': 'AdditionalInspectionMethodSequence',
    '40101070': 'AITDeviceType',
    '40101071': 'QRMeasurementsSequence',
    '40101072': 'TargetMaterialSequence',
    '40101073': 'SNRThreshold',
    '40101075': 'ImageScaleRepresentation',
    '40101076': 'ReferencedPTOSequence',
    '40101077': 'ReferencedTDRInstanceSequence',
    '40101078': 'PTOLocationDescription',
    '40101079': 'AnomalyLocatorIndicatorSequence',
    '4010107A': 'AnomalyLocatorIndicator',
    '4010107B': 'PTORegionSequence',
    '4010107C': 'InspectionSelectionCriteria',
    '4010107D': 'SecondaryInspectionMethodSequence',
    '4010107E': 'PRCSToRCSOrientation',
    '4FFE0001': 'MACParametersSequence',
    '52009229': 'SharedFunctionalGroupsSequence',
    '52009230': 'PerFrameFunctionalGroupsSequence',
    '54000100': 'WaveformSequence',
    '54000110': 'ChannelMinimumValue',
    '54000112': 'ChannelMaximumValue',
    '54001004': 'WaveformBitsAllocated',
    '54001006': 'WaveformSampleInterpretation',
    '5400100A': 'WaveformPaddingValue',
    '54001010': 'WaveformData',
    '56000010': 'FirstOrderPhaseCorrectionAngle',
    '56000020': 'SpectroscopyData',
    '7FE00008': 'FloatPixelData',
    '7FE00009': 'DoubleFloatPixelData',
    '7FE00010': 'PixelData',
    '7FE00020': 'CoefficientsSDVN',
    '7FE00030': 'CoefficientsSDHN',
    '7FE00040': 'CoefficientsSDDN',
    'FFFAFFFA': 'DigitalSignaturesSequence',
    'FFFCFFFC': 'DataSetTrailingPadding',
    'FFFEE000': 'Item',
    'FFFEE00D': 'ItemDelimitationItem',
    'FFFEE0DD': 'SequenceDelimitationItem'
  };
  Object.freeze(tagToKeyword);
  /** Maps DICOM Attribute Keyword to Tag.
   *
   * @constant {Object}
   * @private
   */

  const keywordToTag = {
    'CommandGroupLength': '00000000',
    'CommandLengthToEnd': '00000001',
    'AffectedSOPClassUID': '00000002',
    'RequestedSOPClassUID': '00000003',
    'CommandRecognitionCode': '00000010',
    'CommandField': '00000100',
    'MessageID': '00000110',
    'MessageIDBeingRespondedTo': '00000120',
    'Initiator': '00000200',
    'Receiver': '00000300',
    'FindLocation': '00000400',
    'MoveDestination': '00000600',
    'Priority': '00000700',
    'CommandDataSetType': '00000800',
    'NumberOfMatches': '00000850',
    'ResponseSequenceNumber': '00000860',
    'Status': '00000900',
    'OffendingElement': '00000901',
    'ErrorComment': '00000902',
    'ErrorID': '00000903',
    'AffectedSOPInstanceUID': '00001000',
    'RequestedSOPInstanceUID': '00001001',
    'EventTypeID': '00001002',
    'AttributeIdentifierList': '00001005',
    'ActionTypeID': '00001008',
    'NumberOfRemainingSuboperations': '00001020',
    'NumberOfCompletedSuboperations': '00001021',
    'NumberOfFailedSuboperations': '00001022',
    'NumberOfWarningSuboperations': '00001023',
    'MoveOriginatorApplicationEntityTitle': '00001030',
    'MoveOriginatorMessageID': '00001031',
    'DialogReceiver': '00004000',
    'TerminalType': '00004010',
    'MessageSetID': '00005010',
    'EndMessageID': '00005020',
    'DisplayFormat': '00005110',
    'PagePositionID': '00005120',
    'TextFormatID': '00005130',
    'NormalReverse': '00005140',
    'AddGrayScale': '00005150',
    'Borders': '00005160',
    'Copies': '00005170',
    'CommandMagnificationType': '00005180',
    'Erase': '00005190',
    'Print': '000051A0',
    'Overlays': '000051B0',
    'FileMetaInformationGroupLength': '00020000',
    'FileMetaInformationVersion': '00020001',
    'MediaStorageSOPClassUID': '00020002',
    'MediaStorageSOPInstanceUID': '00020003',
    'TransferSyntaxUID': '00020010',
    'ImplementationClassUID': '00020012',
    'ImplementationVersionName': '00020013',
    'SourceApplicationEntityTitle': '00020016',
    'SendingApplicationEntityTitle': '00020017',
    'ReceivingApplicationEntityTitle': '00020018',
    'PrivateInformationCreatorUID': '00020100',
    'PrivateInformation': '00020102',
    'FileSetID': '00041130',
    'FileSetDescriptorFileID': '00041141',
    'SpecificCharacterSetOfFileSetDescriptorFile': '00041142',
    'OffsetOfTheFirstDirectoryRecordOfTheRootDirectoryEntity': '00041200',
    'OffsetOfTheLastDirectoryRecordOfTheRootDirectoryEntity': '00041202',
    'FileSetConsistencyFlag': '00041212',
    'DirectoryRecordSequence': '00041220',
    'OffsetOfTheNextDirectoryRecord': '00041400',
    'RecordInUseFlag': '00041410',
    'OffsetOfReferencedLowerLevelDirectoryEntity': '00041420',
    'DirectoryRecordType': '00041430',
    'PrivateRecordUID': '00041432',
    'ReferencedFileID': '00041500',
    'MRDRDirectoryRecordOffset': '00041504',
    'ReferencedSOPClassUIDInFile': '00041510',
    'ReferencedSOPInstanceUIDInFile': '00041511',
    'ReferencedTransferSyntaxUIDInFile': '00041512',
    'ReferencedRelatedGeneralSOPClassUIDInFile': '0004151A',
    'NumberOfReferences': '00041600',
    'LengthToEnd': '00080001',
    'SpecificCharacterSet': '00080005',
    'LanguageCodeSequence': '00080006',
    'ImageType': '00080008',
    'RecognitionCode': '00080010',
    'InstanceCreationDate': '00080012',
    'InstanceCreationTime': '00080013',
    'InstanceCreatorUID': '00080014',
    'InstanceCoercionDateTime': '00080015',
    'SOPClassUID': '00080016',
    'SOPInstanceUID': '00080018',
    'RelatedGeneralSOPClassUID': '0008001A',
    'OriginalSpecializedSOPClassUID': '0008001B',
    'StudyDate': '00080020',
    'SeriesDate': '00080021',
    'AcquisitionDate': '00080022',
    'ContentDate': '00080023',
    'OverlayDate': '00080024',
    'CurveDate': '00080025',
    'AcquisitionDateTime': '0008002A',
    'StudyTime': '00080030',
    'SeriesTime': '00080031',
    'AcquisitionTime': '00080032',
    'ContentTime': '00080033',
    'OverlayTime': '00080034',
    'CurveTime': '00080035',
    'DataSetType': '00080040',
    'DataSetSubtype': '00080041',
    'NuclearMedicineSeriesType': '00080042',
    'AccessionNumber': '00080050',
    'IssuerOfAccessionNumberSequence': '00080051',
    'QueryRetrieveLevel': '00080052',
    'QueryRetrieveView': '00080053',
    'RetrieveAETitle': '00080054',
    'StationAETitle': '00080055',
    'InstanceAvailability': '00080056',
    'FailedSOPInstanceUIDList': '00080058',
    'Modality': '00080060',
    'ModalitiesInStudy': '00080061',
    'SOPClassesInStudy': '00080062',
    'AnatomicRegionsInStudyCodeSequence': '00080063',
    'ConversionType': '00080064',
    'PresentationIntentType': '00080068',
    'Manufacturer': '00080070',
    'InstitutionName': '00080080',
    'InstitutionAddress': '00080081',
    'InstitutionCodeSequence': '00080082',
    'ReferringPhysicianName': '00080090',
    'ReferringPhysicianAddress': '00080092',
    'ReferringPhysicianTelephoneNumbers': '00080094',
    'ReferringPhysicianIdentificationSequence': '00080096',
    'ConsultingPhysicianName': '0008009C',
    'ConsultingPhysicianIdentificationSequence': '0008009D',
    'CodeValue': '00080100',
    'ExtendedCodeValue': '00080101',
    'CodingSchemeDesignator': '00080102',
    'CodingSchemeVersion': '00080103',
    'CodeMeaning': '00080104',
    'MappingResource': '00080105',
    'ContextGroupVersion': '00080106',
    'ContextGroupLocalVersion': '00080107',
    'ExtendedCodeMeaning': '00080108',
    'CodingSchemeResourcesSequence': '00080109',
    'CodingSchemeURLType': '0008010A',
    'ContextGroupExtensionFlag': '0008010B',
    'CodingSchemeUID': '0008010C',
    'ContextGroupExtensionCreatorUID': '0008010D',
    'CodingSchemeURL': '0008010E',
    'ContextIdentifier': '0008010F',
    'CodingSchemeIdentificationSequence': '00080110',
    'CodingSchemeRegistry': '00080112',
    'CodingSchemeExternalID': '00080114',
    'CodingSchemeName': '00080115',
    'CodingSchemeResponsibleOrganization': '00080116',
    'ContextUID': '00080117',
    'MappingResourceUID': '00080118',
    'LongCodeValue': '00080119',
    'URNCodeValue': '00080120',
    'EquivalentCodeSequence': '00080121',
    'MappingResourceName': '00080122',
    'ContextGroupIdentificationSequence': '00080123',
    'MappingResourceIdentificationSequence': '00080124',
    'TimezoneOffsetFromUTC': '00080201',
    'ResponsibleGroupCodeSequence': '00080220',
    'EquipmentModality': '00080221',
    'ManufacturerRelatedModelGroup': '00080222',
    'PrivateDataElementCharacteristicsSequence': '00080300',
    'PrivateGroupReference': '00080301',
    'PrivateCreatorReference': '00080302',
    'BlockIdentifyingInformationStatus': '00080303',
    'NonidentifyingPrivateElements': '00080304',
    'DeidentificationActionSequence': '00080305',
    'IdentifyingPrivateElements': '00080306',
    'DeidentificationAction': '00080307',
    'PrivateDataElement': '00080308',
    'PrivateDataElementValueMultiplicity': '00080309',
    'PrivateDataElementValueRepresentation': '0008030A',
    'PrivateDataElementNumberOfItems': '0008030B',
    'PrivateDataElementName': '0008030C',
    'PrivateDataElementKeyword': '0008030D',
    'PrivateDataElementDescription': '0008030E',
    'PrivateDataElementEncoding': '0008030F',
    'PrivateDataElementDefinitionSequence': '00080310',
    'NetworkID': '00081000',
    'StationName': '00081010',
    'StudyDescription': '00081030',
    'ProcedureCodeSequence': '00081032',
    'SeriesDescription': '0008103E',
    'SeriesDescriptionCodeSequence': '0008103F',
    'InstitutionalDepartmentName': '00081040',
    'PhysiciansOfRecord': '00081048',
    'PhysiciansOfRecordIdentificationSequence': '00081049',
    'PerformingPhysicianName': '00081050',
    'PerformingPhysicianIdentificationSequence': '00081052',
    'NameOfPhysiciansReadingStudy': '00081060',
    'PhysiciansReadingStudyIdentificationSequence': '00081062',
    'OperatorsName': '00081070',
    'OperatorIdentificationSequence': '00081072',
    'AdmittingDiagnosesDescription': '00081080',
    'AdmittingDiagnosesCodeSequence': '00081084',
    'ManufacturerModelName': '00081090',
    'ReferencedResultsSequence': '00081100',
    'ReferencedStudySequence': '00081110',
    'ReferencedPerformedProcedureStepSequence': '00081111',
    'ReferencedSeriesSequence': '00081115',
    'ReferencedPatientSequence': '00081120',
    'ReferencedVisitSequence': '00081125',
    'ReferencedOverlaySequence': '00081130',
    'ReferencedStereometricInstanceSequence': '00081134',
    'ReferencedWaveformSequence': '0008113A',
    'ReferencedImageSequence': '00081140',
    'ReferencedCurveSequence': '00081145',
    'ReferencedInstanceSequence': '0008114A',
    'ReferencedRealWorldValueMappingInstanceSequence': '0008114B',
    'ReferencedSOPClassUID': '00081150',
    'ReferencedSOPInstanceUID': '00081155',
    'DefinitionSourceSequence': '00081156',
    'SOPClassesSupported': '0008115A',
    'ReferencedFrameNumber': '00081160',
    'SimpleFrameList': '00081161',
    'CalculatedFrameList': '00081162',
    'TimeRange': '00081163',
    'FrameExtractionSequence': '00081164',
    'MultiFrameSourceSOPInstanceUID': '00081167',
    'RetrieveURL': '00081190',
    'TransactionUID': '00081195',
    'WarningReason': '00081196',
    'FailureReason': '00081197',
    'FailedSOPSequence': '00081198',
    'ReferencedSOPSequence': '00081199',
    'OtherFailuresSequence': '0008119A',
    'StudiesContainingOtherReferencedInstancesSequence': '00081200',
    'RelatedSeriesSequence': '00081250',
    'LossyImageCompressionRetired': '00082110',
    'DerivationDescription': '00082111',
    'SourceImageSequence': '00082112',
    'StageName': '00082120',
    'StageNumber': '00082122',
    'NumberOfStages': '00082124',
    'ViewName': '00082127',
    'ViewNumber': '00082128',
    'NumberOfEventTimers': '00082129',
    'NumberOfViewsInStage': '0008212A',
    'EventElapsedTimes': '00082130',
    'EventTimerNames': '00082132',
    'EventTimerSequence': '00082133',
    'EventTimeOffset': '00082134',
    'EventCodeSequence': '00082135',
    'StartTrim': '00082142',
    'StopTrim': '00082143',
    'RecommendedDisplayFrameRate': '00082144',
    'TransducerPosition': '00082200',
    'TransducerOrientation': '00082204',
    'AnatomicStructure': '00082208',
    'AnatomicRegionSequence': '00082218',
    'AnatomicRegionModifierSequence': '00082220',
    'PrimaryAnatomicStructureSequence': '00082228',
    'AnatomicStructureSpaceOrRegionSequence': '00082229',
    'PrimaryAnatomicStructureModifierSequence': '00082230',
    'TransducerPositionSequence': '00082240',
    'TransducerPositionModifierSequence': '00082242',
    'TransducerOrientationSequence': '00082244',
    'TransducerOrientationModifierSequence': '00082246',
    'AnatomicStructureSpaceOrRegionCodeSequenceTrial': '00082251',
    'AnatomicPortalOfEntranceCodeSequenceTrial': '00082253',
    'AnatomicApproachDirectionCodeSequenceTrial': '00082255',
    'AnatomicPerspectiveDescriptionTrial': '00082256',
    'AnatomicPerspectiveCodeSequenceTrial': '00082257',
    'AnatomicLocationOfExaminingInstrumentDescriptionTrial': '00082258',
    'AnatomicLocationOfExaminingInstrumentCodeSequenceTrial': '00082259',
    'AnatomicStructureSpaceOrRegionModifierCodeSequenceTrial': '0008225A',
    'OnAxisBackgroundAnatomicStructureCodeSequenceTrial': '0008225C',
    'AlternateRepresentationSequence': '00083001',
    'IrradiationEventUID': '00083010',
    'SourceIrradiationEventSequence': '00083011',
    'RadiopharmaceuticalAdministrationEventUID': '00083012',
    'IdentifyingComments': '00084000',
    'FrameType': '00089007',
    'ReferencedImageEvidenceSequence': '00089092',
    'ReferencedRawDataSequence': '00089121',
    'CreatorVersionUID': '00089123',
    'DerivationImageSequence': '00089124',
    'SourceImageEvidenceSequence': '00089154',
    'PixelPresentation': '00089205',
    'VolumetricProperties': '00089206',
    'VolumeBasedCalculationTechnique': '00089207',
    'ComplexImageComponent': '00089208',
    'AcquisitionContrast': '00089209',
    'DerivationCodeSequence': '00089215',
    'ReferencedPresentationStateSequence': '00089237',
    'ReferencedOtherPlaneSequence': '00089410',
    'FrameDisplaySequence': '00089458',
    'RecommendedDisplayFrameRateInFloat': '00089459',
    'SkipFrameRangeFlag': '00089460',
    'PatientName': '00100010',
    'PatientID': '00100020',
    'IssuerOfPatientID': '00100021',
    'TypeOfPatientID': '00100022',
    'IssuerOfPatientIDQualifiersSequence': '00100024',
    'SourcePatientGroupIdentificationSequence': '00100026',
    'GroupOfPatientsIdentificationSequence': '00100027',
    'SubjectRelativePositionInImage': '00100028',
    'PatientBirthDate': '00100030',
    'PatientBirthTime': '00100032',
    'PatientBirthDateInAlternativeCalendar': '00100033',
    'PatientDeathDateInAlternativeCalendar': '00100034',
    'PatientAlternativeCalendar': '00100035',
    'PatientSex': '00100040',
    'PatientInsurancePlanCodeSequence': '00100050',
    'PatientPrimaryLanguageCodeSequence': '00100101',
    'PatientPrimaryLanguageModifierCodeSequence': '00100102',
    'QualityControlSubject': '00100200',
    'QualityControlSubjectTypeCodeSequence': '00100201',
    'StrainDescription': '00100212',
    'StrainNomenclature': '00100213',
    'StrainStockNumber': '00100214',
    'StrainSourceRegistryCodeSequence': '00100215',
    'StrainStockSequence': '00100216',
    'StrainSource': '00100217',
    'StrainAdditionalInformation': '00100218',
    'StrainCodeSequence': '00100219',
    'GeneticModificationsSequence': '00100221',
    'GeneticModificationsDescription': '00100222',
    'GeneticModificationsNomenclature': '00100223',
    'GeneticModificationsCodeSequence': '00100229',
    'OtherPatientIDs': '00101000',
    'OtherPatientNames': '00101001',
    'OtherPatientIDsSequence': '00101002',
    'PatientBirthName': '00101005',
    'PatientAge': '00101010',
    'PatientSize': '00101020',
    'PatientSizeCodeSequence': '00101021',
    'PatientBodyMassIndex': '00101022',
    'MeasuredAPDimension': '00101023',
    'MeasuredLateralDimension': '00101024',
    'PatientWeight': '00101030',
    'PatientAddress': '00101040',
    'InsurancePlanIdentification': '00101050',
    'PatientMotherBirthName': '00101060',
    'MilitaryRank': '00101080',
    'BranchOfService': '00101081',
    'MedicalRecordLocator': '00101090',
    'ReferencedPatientPhotoSequence': '00101100',
    'MedicalAlerts': '00102000',
    'Allergies': '00102110',
    'CountryOfResidence': '00102150',
    'RegionOfResidence': '00102152',
    'PatientTelephoneNumbers': '00102154',
    'PatientTelecomInformation': '00102155',
    'EthnicGroup': '00102160',
    'Occupation': '00102180',
    'SmokingStatus': '001021A0',
    'AdditionalPatientHistory': '001021B0',
    'PregnancyStatus': '001021C0',
    'LastMenstrualDate': '001021D0',
    'PatientReligiousPreference': '001021F0',
    'PatientSpeciesDescription': '00102201',
    'PatientSpeciesCodeSequence': '00102202',
    'PatientSexNeutered': '00102203',
    'AnatomicalOrientationType': '00102210',
    'PatientBreedDescription': '00102292',
    'PatientBreedCodeSequence': '00102293',
    'BreedRegistrationSequence': '00102294',
    'BreedRegistrationNumber': '00102295',
    'BreedRegistryCodeSequence': '00102296',
    'ResponsiblePerson': '00102297',
    'ResponsiblePersonRole': '00102298',
    'ResponsibleOrganization': '00102299',
    'PatientComments': '00104000',
    'ExaminedBodyThickness': '00109431',
    'ClinicalTrialSponsorName': '00120010',
    'ClinicalTrialProtocolID': '00120020',
    'ClinicalTrialProtocolName': '00120021',
    'ClinicalTrialSiteID': '00120030',
    'ClinicalTrialSiteName': '00120031',
    'ClinicalTrialSubjectID': '00120040',
    'ClinicalTrialSubjectReadingID': '00120042',
    'ClinicalTrialTimePointID': '00120050',
    'ClinicalTrialTimePointDescription': '00120051',
    'LongitudinalTemporalOffsetFromEvent': '00120052',
    'LongitudinalTemporalEventType': '00120053',
    'ClinicalTrialCoordinatingCenterName': '00120060',
    'PatientIdentityRemoved': '00120062',
    'DeidentificationMethod': '00120063',
    'DeidentificationMethodCodeSequence': '00120064',
    'ClinicalTrialSeriesID': '00120071',
    'ClinicalTrialSeriesDescription': '00120072',
    'ClinicalTrialProtocolEthicsCommitteeName': '00120081',
    'ClinicalTrialProtocolEthicsCommitteeApprovalNumber': '00120082',
    'ConsentForClinicalTrialUseSequence': '00120083',
    'DistributionType': '00120084',
    'ConsentForDistributionFlag': '00120085',
    'EthicsCommitteeApprovalEffectivenessStartDate': '00120086',
    'EthicsCommitteeApprovalEffectivenessEndDate': '00120087',
    'CADFileFormat': '00140023',
    'ComponentReferenceSystem': '00140024',
    'ComponentManufacturingProcedure': '00140025',
    'ComponentManufacturer': '00140028',
    'MaterialThickness': '00140030',
    'MaterialPipeDiameter': '00140032',
    'MaterialIsolationDiameter': '00140034',
    'MaterialGrade': '00140042',
    'MaterialPropertiesDescription': '00140044',
    'MaterialPropertiesFileFormatRetired': '00140045',
    'MaterialNotes': '00140046',
    'ComponentShape': '00140050',
    'CurvatureType': '00140052',
    'OuterDiameter': '00140054',
    'InnerDiameter': '00140056',
    'ComponentWelderIDs': '00140100',
    'SecondaryApprovalStatus': '00140101',
    'SecondaryReviewDate': '00140102',
    'SecondaryReviewTime': '00140103',
    'SecondaryReviewerName': '00140104',
    'RepairID': '00140105',
    'MultipleComponentApprovalSequence': '00140106',
    'OtherApprovalStatus': '00140107',
    'OtherSecondaryApprovalStatus': '00140108',
    'ActualEnvironmentalConditions': '00141010',
    'ExpiryDate': '00141020',
    'EnvironmentalConditions': '00141040',
    'EvaluatorSequence': '00142002',
    'EvaluatorNumber': '00142004',
    'EvaluatorName': '00142006',
    'EvaluationAttempt': '00142008',
    'IndicationSequence': '00142012',
    'IndicationNumber': '00142014',
    'IndicationLabel': '00142016',
    'IndicationDescription': '00142018',
    'IndicationType': '0014201A',
    'IndicationDisposition': '0014201C',
    'IndicationROISequence': '0014201E',
    'IndicationPhysicalPropertySequence': '00142030',
    'PropertyLabel': '00142032',
    'CoordinateSystemNumberOfAxes': '00142202',
    'CoordinateSystemAxesSequence': '00142204',
    'CoordinateSystemAxisDescription': '00142206',
    'CoordinateSystemDataSetMapping': '00142208',
    'CoordinateSystemAxisNumber': '0014220A',
    'CoordinateSystemAxisType': '0014220C',
    'CoordinateSystemAxisUnits': '0014220E',
    'CoordinateSystemAxisValues': '00142210',
    'CoordinateSystemTransformSequence': '00142220',
    'TransformDescription': '00142222',
    'TransformNumberOfAxes': '00142224',
    'TransformOrderOfAxes': '00142226',
    'TransformedAxisUnits': '00142228',
    'CoordinateSystemTransformRotationAndScaleMatrix': '0014222A',
    'CoordinateSystemTransformTranslationMatrix': '0014222C',
    'InternalDetectorFrameTime': '00143011',
    'NumberOfFramesIntegrated': '00143012',
    'DetectorTemperatureSequence': '00143020',
    'SensorName': '00143022',
    'HorizontalOffsetOfSensor': '00143024',
    'VerticalOffsetOfSensor': '00143026',
    'SensorTemperature': '00143028',
    'DarkCurrentSequence': '00143040',
    'DarkCurrentCounts': '00143050',
    'GainCorrectionReferenceSequence': '00143060',
    'AirCounts': '00143070',
    'KVUsedInGainCalibration': '00143071',
    'MAUsedInGainCalibration': '00143072',
    'NumberOfFramesUsedForIntegration': '00143073',
    'FilterMaterialUsedInGainCalibration': '00143074',
    'FilterThicknessUsedInGainCalibration': '00143075',
    'DateOfGainCalibration': '00143076',
    'TimeOfGainCalibration': '00143077',
    'BadPixelImage': '00143080',
    'CalibrationNotes': '00143099',
    'PulserEquipmentSequence': '00144002',
    'PulserType': '00144004',
    'PulserNotes': '00144006',
    'ReceiverEquipmentSequence': '00144008',
    'AmplifierType': '0014400A',
    'ReceiverNotes': '0014400C',
    'PreAmplifierEquipmentSequence': '0014400E',
    'PreAmplifierNotes': '0014400F',
    'TransmitTransducerSequence': '00144010',
    'ReceiveTransducerSequence': '00144011',
    'NumberOfElements': '00144012',
    'ElementShape': '00144013',
    'ElementDimensionA': '00144014',
    'ElementDimensionB': '00144015',
    'ElementPitchA': '00144016',
    'MeasuredBeamDimensionA': '00144017',
    'MeasuredBeamDimensionB': '00144018',
    'LocationOfMeasuredBeamDiameter': '00144019',
    'NominalFrequency': '0014401A',
    'MeasuredCenterFrequency': '0014401B',
    'MeasuredBandwidth': '0014401C',
    'ElementPitchB': '0014401D',
    'PulserSettingsSequence': '00144020',
    'PulseWidth': '00144022',
    'ExcitationFrequency': '00144024',
    'ModulationType': '00144026',
    'Damping': '00144028',
    'ReceiverSettingsSequence': '00144030',
    'AcquiredSoundpathLength': '00144031',
    'AcquisitionCompressionType': '00144032',
    'AcquisitionSampleSize': '00144033',
    'RectifierSmoothing': '00144034',
    'DACSequence': '00144035',
    'DACType': '00144036',
    'DACGainPoints': '00144038',
    'DACTimePoints': '0014403A',
    'DACAmplitude': '0014403C',
    'PreAmplifierSettingsSequence': '00144040',
    'TransmitTransducerSettingsSequence': '00144050',
    'ReceiveTransducerSettingsSequence': '00144051',
    'IncidentAngle': '00144052',
    'CouplingTechnique': '00144054',
    'CouplingMedium': '00144056',
    'CouplingVelocity': '00144057',
    'ProbeCenterLocationX': '00144058',
    'ProbeCenterLocationZ': '00144059',
    'SoundPathLength': '0014405A',
    'DelayLawIdentifier': '0014405C',
    'GateSettingsSequence': '00144060',
    'GateThreshold': '00144062',
    'VelocityOfSound': '00144064',
    'CalibrationSettingsSequence': '00144070',
    'CalibrationProcedure': '00144072',
    'ProcedureVersion': '00144074',
    'ProcedureCreationDate': '00144076',
    'ProcedureExpirationDate': '00144078',
    'ProcedureLastModifiedDate': '0014407A',
    'CalibrationTime': '0014407C',
    'CalibrationDate': '0014407E',
    'ProbeDriveEquipmentSequence': '00144080',
    'DriveType': '00144081',
    'ProbeDriveNotes': '00144082',
    'DriveProbeSequence': '00144083',
    'ProbeInductance': '00144084',
    'ProbeResistance': '00144085',
    'ReceiveProbeSequence': '00144086',
    'ProbeDriveSettingsSequence': '00144087',
    'BridgeResistors': '00144088',
    'ProbeOrientationAngle': '00144089',
    'UserSelectedGainY': '0014408B',
    'UserSelectedPhase': '0014408C',
    'UserSelectedOffsetX': '0014408D',
    'UserSelectedOffsetY': '0014408E',
    'ChannelSettingsSequence': '00144091',
    'ChannelThreshold': '00144092',
    'ScannerSettingsSequence': '0014409A',
    'ScanProcedure': '0014409B',
    'TranslationRateX': '0014409C',
    'TranslationRateY': '0014409D',
    'ChannelOverlap': '0014409F',
    'ImageQualityIndicatorType': '001440A0',
    'ImageQualityIndicatorMaterial': '001440A1',
    'ImageQualityIndicatorSize': '001440A2',
    'LINACEnergy': '00145002',
    'LINACOutput': '00145004',
    'ActiveAperture': '00145100',
    'TotalAperture': '00145101',
    'ApertureElevation': '00145102',
    'MainLobeAngle': '00145103',
    'MainRoofAngle': '00145104',
    'ConnectorType': '00145105',
    'WedgeModelNumber': '00145106',
    'WedgeAngleFloat': '00145107',
    'WedgeRoofAngle': '00145108',
    '00145109': ('WedgeElement1Position'),
    'WedgeMaterialVelocity': '0014510A',
    'WedgeMaterial': '0014510B',
    'WedgeOffsetZ': '0014510C',
    'WedgeOriginOffsetX': '0014510D',
    'WedgeTimeDelay': '0014510E',
    'WedgeName': '0014510F',
    'WedgeManufacturerName': '00145110',
    'WedgeDescription': '00145111',
    'NominalBeamAngle': '00145112',
    'WedgeOffsetX': '00145113',
    'WedgeOffsetY': '00145114',
    'WedgeTotalLength': '00145115',
    'WedgeInContactLength': '00145116',
    'WedgeFrontGap': '00145117',
    'WedgeTotalHeight': '00145118',
    'WedgeFrontHeight': '00145119',
    'WedgeRearHeight': '0014511A',
    'WedgeTotalWidth': '0014511B',
    'WedgeInContactWidth': '0014511C',
    'WedgeChamferHeight': '0014511D',
    'WedgeCurve': '0014511E',
    'RadiusAlongWedge': '0014511F',
    'ContrastBolusAgent': '00180010',
    'ContrastBolusAgentSequence': '00180012',
    '00180013': ('ContrastBolusT1Relaxivity'),
    'ContrastBolusAdministrationRouteSequence': '00180014',
    'BodyPartExamined': '00180015',
    'ScanningSequence': '00180020',
    'SequenceVariant': '00180021',
    'ScanOptions': '00180022',
    'MRAcquisitionType': '00180023',
    'SequenceName': '00180024',
    'AngioFlag': '00180025',
    'InterventionDrugInformationSequence': '00180026',
    'InterventionDrugStopTime': '00180027',
    'InterventionDrugDose': '00180028',
    'InterventionDrugCodeSequence': '00180029',
    'AdditionalDrugSequence': '0018002A',
    'Radionuclide': '00180030',
    'Radiopharmaceutical': '00180031',
    'EnergyWindowCenterline': '00180032',
    'EnergyWindowTotalWidth': '00180033',
    'InterventionDrugName': '00180034',
    'InterventionDrugStartTime': '00180035',
    'InterventionSequence': '00180036',
    'TherapyType': '00180037',
    'InterventionStatus': '00180038',
    'TherapyDescription': '00180039',
    'InterventionDescription': '0018003A',
    'CineRate': '00180040',
    'InitialCineRunState': '00180042',
    'SliceThickness': '00180050',
    'KVP': '00180060',
    '': '00180061',
    'CountsAccumulated': '00180070',
    'AcquisitionTerminationCondition': '00180071',
    'EffectiveDuration': '00180072',
    'AcquisitionStartCondition': '00180073',
    'AcquisitionStartConditionData': '00180074',
    'AcquisitionTerminationConditionData': '00180075',
    'RepetitionTime': '00180080',
    'EchoTime': '00180081',
    'InversionTime': '00180082',
    'NumberOfAverages': '00180083',
    'ImagingFrequency': '00180084',
    'ImagedNucleus': '00180085',
    'EchoNumbers': '00180086',
    'MagneticFieldStrength': '00180087',
    'SpacingBetweenSlices': '00180088',
    'NumberOfPhaseEncodingSteps': '00180089',
    'DataCollectionDiameter': '00180090',
    'EchoTrainLength': '00180091',
    'PercentSampling': '00180093',
    'PercentPhaseFieldOfView': '00180094',
    'PixelBandwidth': '00180095',
    'DeviceSerialNumber': '00181000',
    'DeviceUID': '00181002',
    'DeviceID': '00181003',
    'PlateID': '00181004',
    'GeneratorID': '00181005',
    'GridID': '00181006',
    'CassetteID': '00181007',
    'GantryID': '00181008',
    'UniqueDeviceIdentifier': '00181009',
    'UDISequence': '0018100A',
    'SecondaryCaptureDeviceID': '00181010',
    'HardcopyCreationDeviceID': '00181011',
    'DateOfSecondaryCapture': '00181012',
    'TimeOfSecondaryCapture': '00181014',
    'SecondaryCaptureDeviceManufacturer': '00181016',
    'HardcopyDeviceManufacturer': '00181017',
    'SecondaryCaptureDeviceManufacturerModelName': '00181018',
    'SecondaryCaptureDeviceSoftwareVersions': '00181019',
    'HardcopyDeviceSoftwareVersion': '0018101A',
    'HardcopyDeviceManufacturerModelName': '0018101B',
    'SoftwareVersions': '00181020',
    'VideoImageFormatAcquired': '00181022',
    'DigitalImageFormatAcquired': '00181023',
    'ProtocolName': '00181030',
    'ContrastBolusRoute': '00181040',
    'ContrastBolusVolume': '00181041',
    'ContrastBolusStartTime': '00181042',
    'ContrastBolusStopTime': '00181043',
    'ContrastBolusTotalDose': '00181044',
    'SyringeCounts': '00181045',
    'ContrastFlowRate': '00181046',
    'ContrastFlowDuration': '00181047',
    'ContrastBolusIngredient': '00181048',
    'ContrastBolusIngredientConcentration': '00181049',
    'SpatialResolution': '00181050',
    'TriggerTime': '00181060',
    'TriggerSourceOrType': '00181061',
    'NominalInterval': '00181062',
    'FrameTime': '00181063',
    'CardiacFramingType': '00181064',
    'FrameTimeVector': '00181065',
    'FrameDelay': '00181066',
    'ImageTriggerDelay': '00181067',
    'MultiplexGroupTimeOffset': '00181068',
    'TriggerTimeOffset': '00181069',
    'SynchronizationTrigger': '0018106A',
    'SynchronizationChannel': '0018106C',
    'TriggerSamplePosition': '0018106E',
    'RadiopharmaceuticalRoute': '00181070',
    'RadiopharmaceuticalVolume': '00181071',
    'RadiopharmaceuticalStartTime': '00181072',
    'RadiopharmaceuticalStopTime': '00181073',
    'RadionuclideTotalDose': '00181074',
    'RadionuclideHalfLife': '00181075',
    'RadionuclidePositronFraction': '00181076',
    'RadiopharmaceuticalSpecificActivity': '00181077',
    'RadiopharmaceuticalStartDateTime': '00181078',
    'RadiopharmaceuticalStopDateTime': '00181079',
    'BeatRejectionFlag': '00181080',
    'LowRRValue': '00181081',
    'HighRRValue': '00181082',
    'IntervalsAcquired': '00181083',
    'IntervalsRejected': '00181084',
    'PVCRejection': '00181085',
    'SkipBeats': '00181086',
    'HeartRate': '00181088',
    'CardiacNumberOfImages': '00181090',
    'TriggerWindow': '00181094',
    'ReconstructionDiameter': '00181100',
    'DistanceSourceToDetector': '00181110',
    'DistanceSourceToPatient': '00181111',
    'EstimatedRadiographicMagnificationFactor': '00181114',
    'GantryDetectorTilt': '00181120',
    'GantryDetectorSlew': '00181121',
    'TableHeight': '00181130',
    'TableTraverse': '00181131',
    'TableMotion': '00181134',
    'TableVerticalIncrement': '00181135',
    'TableLateralIncrement': '00181136',
    'TableLongitudinalIncrement': '00181137',
    'TableAngle': '00181138',
    'TableType': '0018113A',
    'RotationDirection': '00181140',
    'AngularPosition': '00181141',
    'RadialPosition': '00181142',
    'ScanArc': '00181143',
    'AngularStep': '00181144',
    'CenterOfRotationOffset': '00181145',
    'RotationOffset': '00181146',
    'FieldOfViewShape': '00181147',
    'FieldOfViewDimensions': '00181149',
    'ExposureTime': '00181150',
    'XRayTubeCurrent': '00181151',
    'Exposure': '00181152',
    'ExposureInuAs': '00181153',
    'AveragePulseWidth': '00181154',
    'RadiationSetting': '00181155',
    'RectificationType': '00181156',
    'RadiationMode': '0018115A',
    'ImageAndFluoroscopyAreaDoseProduct': '0018115E',
    'FilterType': '00181160',
    'TypeOfFilters': '00181161',
    'IntensifierSize': '00181162',
    'ImagerPixelSpacing': '00181164',
    'Grid': '00181166',
    'GeneratorPower': '00181170',
    'CollimatorGridName': '00181180',
    'CollimatorType': '00181181',
    'FocalDistance': '00181182',
    'XFocusCenter': '00181183',
    'YFocusCenter': '00181184',
    'FocalSpots': '00181190',
    'AnodeTargetMaterial': '00181191',
    'BodyPartThickness': '001811A0',
    'CompressionForce': '001811A2',
    'CompressionPressure': '001811A3',
    'PaddleDescription': '001811A4',
    'CompressionContactArea': '001811A5',
    'DateOfLastCalibration': '00181200',
    'TimeOfLastCalibration': '00181201',
    'DateTimeOfLastCalibration': '00181202',
    'ConvolutionKernel': '00181210',
    'UpperLowerPixelValues': '00181240',
    'ActualFrameDuration': '00181242',
    'CountRate': '00181243',
    'PreferredPlaybackSequencing': '00181244',
    'ReceiveCoilName': '00181250',
    'TransmitCoilName': '00181251',
    'PlateType': '00181260',
    'PhosphorType': '00181261',
    'WaterEquivalentDiameter': '00181271',
    'WaterEquivalentDiameterCalculationMethodCodeSequence': '00181272',
    'ScanVelocity': '00181300',
    'WholeBodyTechnique': '00181301',
    'ScanLength': '00181302',
    'AcquisitionMatrix': '00181310',
    'InPlanePhaseEncodingDirection': '00181312',
    'FlipAngle': '00181314',
    'VariableFlipAngleFlag': '00181315',
    'SAR': '00181316',
    'dBdt': '00181318',
    '00181320': ('B1rms'),
    'AcquisitionDeviceProcessingDescription': '00181400',
    'AcquisitionDeviceProcessingCode': '00181401',
    'CassetteOrientation': '00181402',
    'CassetteSize': '00181403',
    'ExposuresOnPlate': '00181404',
    'RelativeXRayExposure': '00181405',
    'ExposureIndex': '00181411',
    'TargetExposureIndex': '00181412',
    'DeviationIndex': '00181413',
    'ColumnAngulation': '00181450',
    'TomoLayerHeight': '00181460',
    'TomoAngle': '00181470',
    'TomoTime': '00181480',
    'TomoType': '00181490',
    'TomoClass': '00181491',
    'NumberOfTomosynthesisSourceImages': '00181495',
    'PositionerMotion': '00181500',
    'PositionerType': '00181508',
    'PositionerPrimaryAngle': '00181510',
    'PositionerSecondaryAngle': '00181511',
    'PositionerPrimaryAngleIncrement': '00181520',
    'PositionerSecondaryAngleIncrement': '00181521',
    'DetectorPrimaryAngle': '00181530',
    'DetectorSecondaryAngle': '00181531',
    'ShutterShape': '00181600',
    'ShutterLeftVerticalEdge': '00181602',
    'ShutterRightVerticalEdge': '00181604',
    'ShutterUpperHorizontalEdge': '00181606',
    'ShutterLowerHorizontalEdge': '00181608',
    'CenterOfCircularShutter': '00181610',
    'RadiusOfCircularShutter': '00181612',
    'VerticesOfThePolygonalShutter': '00181620',
    'ShutterPresentationValue': '00181622',
    'ShutterOverlayGroup': '00181623',
    'ShutterPresentationColorCIELabValue': '00181624',
    'CollimatorShape': '00181700',
    'CollimatorLeftVerticalEdge': '00181702',
    'CollimatorRightVerticalEdge': '00181704',
    'CollimatorUpperHorizontalEdge': '00181706',
    'CollimatorLowerHorizontalEdge': '00181708',
    'CenterOfCircularCollimator': '00181710',
    'RadiusOfCircularCollimator': '00181712',
    'VerticesOfThePolygonalCollimator': '00181720',
    'AcquisitionTimeSynchronized': '00181800',
    'TimeSource': '00181801',
    'TimeDistributionProtocol': '00181802',
    'NTPSourceAddress': '00181803',
    'PageNumberVector': '00182001',
    'FrameLabelVector': '00182002',
    'FramePrimaryAngleVector': '00182003',
    'FrameSecondaryAngleVector': '00182004',
    'SliceLocationVector': '00182005',
    'DisplayWindowLabelVector': '00182006',
    'NominalScannedPixelSpacing': '00182010',
    'DigitizingDeviceTransportDirection': '00182020',
    'RotationOfScannedFilm': '00182030',
    'BiopsyTargetSequence': '00182041',
    'TargetUID': '00182042',
    'LocalizingCursorPosition': '00182043',
    'CalculatedTargetPosition': '00182044',
    'TargetLabel': '00182045',
    'DisplayedZValue': '00182046',
    'IVUSAcquisition': '00183100',
    'IVUSPullbackRate': '00183101',
    'IVUSGatedRate': '00183102',
    'IVUSPullbackStartFrameNumber': '00183103',
    'IVUSPullbackStopFrameNumber': '00183104',
    'LesionNumber': '00183105',
    'AcquisitionComments': '00184000',
    'OutputPower': '00185000',
    'TransducerData': '00185010',
    'FocusDepth': '00185012',
    'ProcessingFunction': '00185020',
    'PostprocessingFunction': '00185021',
    'MechanicalIndex': '00185022',
    'BoneThermalIndex': '00185024',
    'CranialThermalIndex': '00185026',
    'SoftTissueThermalIndex': '00185027',
    'SoftTissueFocusThermalIndex': '00185028',
    'SoftTissueSurfaceThermalIndex': '00185029',
    'DynamicRange': '00185030',
    'TotalGain': '00185040',
    'DepthOfScanField': '00185050',
    'PatientPosition': '00185100',
    'ViewPosition': '00185101',
    'ProjectionEponymousNameCodeSequence': '00185104',
    'ImageTransformationMatrix': '00185210',
    'ImageTranslationVector': '00185212',
    'Sensitivity': '00186000',
    'SequenceOfUltrasoundRegions': '00186011',
    'RegionSpatialFormat': '00186012',
    'RegionDataType': '00186014',
    'RegionFlags': '00186016',
    '00186018': ('RegionLocationMinX0'),
    '0018601A': ('RegionLocationMinY0'),
    '0018601C': ('RegionLocationMaxX1'),
    '0018601E': ('RegionLocationMaxY1'),
    '00186020': ('ReferencePixelX0'),
    '00186022': ('ReferencePixelY0'),
    'PhysicalUnitsXDirection': '00186024',
    'PhysicalUnitsYDirection': '00186026',
    'ReferencePixelPhysicalValueX': '00186028',
    'ReferencePixelPhysicalValueY': '0018602A',
    'PhysicalDeltaX': '0018602C',
    'PhysicalDeltaY': '0018602E',
    'TransducerFrequency': '00186030',
    'TransducerType': '00186031',
    'PulseRepetitionFrequency': '00186032',
    'DopplerCorrectionAngle': '00186034',
    'SteeringAngle': '00186036',
    'DopplerSampleVolumeXPositionRetired': '00186038',
    'DopplerSampleVolumeXPosition': '00186039',
    'DopplerSampleVolumeYPositionRetired': '0018603A',
    'DopplerSampleVolumeYPosition': '0018603B',
    '0018603C': ('TMLinePositionX0Retired'),
    '0018603D': ('TMLinePositionX0'),
    '0018603E': ('TMLinePositionY0Retired'),
    '0018603F': ('TMLinePositionY0'),
    '00186040': ('TMLinePositionX1Retired'),
    '00186041': ('TMLinePositionX1'),
    '00186042': ('TMLinePositionY1Retired'),
    '00186043': ('TMLinePositionY1'),
    'PixelComponentOrganization': '00186044',
    'PixelComponentMask': '00186046',
    'PixelComponentRangeStart': '00186048',
    'PixelComponentRangeStop': '0018604A',
    'PixelComponentPhysicalUnits': '0018604C',
    'PixelComponentDataType': '0018604E',
    'NumberOfTableBreakPoints': '00186050',
    'TableOfXBreakPoints': '00186052',
    'TableOfYBreakPoints': '00186054',
    'NumberOfTableEntries': '00186056',
    'TableOfPixelValues': '00186058',
    'TableOfParameterValues': '0018605A',
    'RWaveTimeVector': '00186060',
    'DetectorConditionsNominalFlag': '00187000',
    'DetectorTemperature': '00187001',
    'DetectorType': '00187004',
    'DetectorConfiguration': '00187005',
    'DetectorDescription': '00187006',
    'DetectorMode': '00187008',
    'DetectorID': '0018700A',
    'DateOfLastDetectorCalibration': '0018700C',
    'TimeOfLastDetectorCalibration': '0018700E',
    'ExposuresOnDetectorSinceLastCalibration': '00187010',
    'ExposuresOnDetectorSinceManufactured': '00187011',
    'DetectorTimeSinceLastExposure': '00187012',
    'DetectorActiveTime': '00187014',
    'DetectorActivationOffsetFromExposure': '00187016',
    'DetectorBinning': '0018701A',
    'DetectorElementPhysicalSize': '00187020',
    'DetectorElementSpacing': '00187022',
    'DetectorActiveShape': '00187024',
    'DetectorActiveDimensions': '00187026',
    'DetectorActiveOrigin': '00187028',
    'DetectorManufacturerName': '0018702A',
    'DetectorManufacturerModelName': '0018702B',
    'FieldOfViewOrigin': '00187030',
    'FieldOfViewRotation': '00187032',
    'FieldOfViewHorizontalFlip': '00187034',
    'PixelDataAreaOriginRelativeToFOV': '00187036',
    'PixelDataAreaRotationAngleRelativeToFOV': '00187038',
    'GridAbsorbingMaterial': '00187040',
    'GridSpacingMaterial': '00187041',
    'GridThickness': '00187042',
    'GridPitch': '00187044',
    'GridAspectRatio': '00187046',
    'GridPeriod': '00187048',
    'GridFocalDistance': '0018704C',
    'FilterMaterial': '00187050',
    'FilterThicknessMinimum': '00187052',
    'FilterThicknessMaximum': '00187054',
    'FilterBeamPathLengthMinimum': '00187056',
    'FilterBeamPathLengthMaximum': '00187058',
    'ExposureControlMode': '00187060',
    'ExposureControlModeDescription': '00187062',
    'ExposureStatus': '00187064',
    'PhototimerSetting': '00187065',
    'ExposureTimeInuS': '00188150',
    'XRayTubeCurrentInuA': '00188151',
    'ContentQualification': '00189004',
    'PulseSequenceName': '00189005',
    'MRImagingModifierSequence': '00189006',
    'EchoPulseSequence': '00189008',
    'InversionRecovery': '00189009',
    'FlowCompensation': '00189010',
    'MultipleSpinEcho': '00189011',
    'MultiPlanarExcitation': '00189012',
    'PhaseContrast': '00189014',
    'TimeOfFlightContrast': '00189015',
    'Spoiling': '00189016',
    'SteadyStatePulseSequence': '00189017',
    'EchoPlanarPulseSequence': '00189018',
    'TagAngleFirstAxis': '00189019',
    'MagnetizationTransfer': '00189020',
    '00189021': ('T2Preparation'),
    'BloodSignalNulling': '00189022',
    'SaturationRecovery': '00189024',
    'SpectrallySelectedSuppression': '00189025',
    'SpectrallySelectedExcitation': '00189026',
    'SpatialPresaturation': '00189027',
    'Tagging': '00189028',
    'OversamplingPhase': '00189029',
    'TagSpacingFirstDimension': '00189030',
    'GeometryOfKSpaceTraversal': '00189032',
    'SegmentedKSpaceTraversal': '00189033',
    'RectilinearPhaseEncodeReordering': '00189034',
    'TagThickness': '00189035',
    'PartialFourierDirection': '00189036',
    'CardiacSynchronizationTechnique': '00189037',
    'ReceiveCoilManufacturerName': '00189041',
    'MRReceiveCoilSequence': '00189042',
    'ReceiveCoilType': '00189043',
    'QuadratureReceiveCoil': '00189044',
    'MultiCoilDefinitionSequence': '00189045',
    'MultiCoilConfiguration': '00189046',
    'MultiCoilElementName': '00189047',
    'MultiCoilElementUsed': '00189048',
    'MRTransmitCoilSequence': '00189049',
    'TransmitCoilManufacturerName': '00189050',
    'TransmitCoilType': '00189051',
    'SpectralWidth': '00189052',
    'ChemicalShiftReference': '00189053',
    'VolumeLocalizationTechnique': '00189054',
    'MRAcquisitionFrequencyEncodingSteps': '00189058',
    'Decoupling': '00189059',
    'DecoupledNucleus': '00189060',
    'DecouplingFrequency': '00189061',
    'DecouplingMethod': '00189062',
    'DecouplingChemicalShiftReference': '00189063',
    'KSpaceFiltering': '00189064',
    'TimeDomainFiltering': '00189065',
    'NumberOfZeroFills': '00189066',
    'BaselineCorrection': '00189067',
    'ParallelReductionFactorInPlane': '00189069',
    'CardiacRRIntervalSpecified': '00189070',
    'AcquisitionDuration': '00189073',
    'FrameAcquisitionDateTime': '00189074',
    'DiffusionDirectionality': '00189075',
    'DiffusionGradientDirectionSequence': '00189076',
    'ParallelAcquisition': '00189077',
    'ParallelAcquisitionTechnique': '00189078',
    'InversionTimes': '00189079',
    'MetaboliteMapDescription': '00189080',
    'PartialFourier': '00189081',
    'EffectiveEchoTime': '00189082',
    'MetaboliteMapCodeSequence': '00189083',
    'ChemicalShiftSequence': '00189084',
    'CardiacSignalSource': '00189085',
    'DiffusionBValue': '00189087',
    'DiffusionGradientOrientation': '00189089',
    'VelocityEncodingDirection': '00189090',
    'VelocityEncodingMinimumValue': '00189091',
    'VelocityEncodingAcquisitionSequence': '00189092',
    'NumberOfKSpaceTrajectories': '00189093',
    'CoverageOfKSpace': '00189094',
    'SpectroscopyAcquisitionPhaseRows': '00189095',
    'ParallelReductionFactorInPlaneRetired': '00189096',
    'TransmitterFrequency': '00189098',
    'ResonantNucleus': '00189100',
    'FrequencyCorrection': '00189101',
    'MRSpectroscopyFOVGeometrySequence': '00189103',
    'SlabThickness': '00189104',
    'SlabOrientation': '00189105',
    'MidSlabPosition': '00189106',
    'MRSpatialSaturationSequence': '00189107',
    'MRTimingAndRelatedParametersSequence': '00189112',
    'MREchoSequence': '00189114',
    'MRModifierSequence': '00189115',
    'MRDiffusionSequence': '00189117',
    'CardiacSynchronizationSequence': '00189118',
    'MRAveragesSequence': '00189119',
    'MRFOVGeometrySequence': '00189125',
    'VolumeLocalizationSequence': '00189126',
    'SpectroscopyAcquisitionDataColumns': '00189127',
    'DiffusionAnisotropyType': '00189147',
    'FrameReferenceDateTime': '00189151',
    'MRMetaboliteMapSequence': '00189152',
    'ParallelReductionFactorOutOfPlane': '00189155',
    'SpectroscopyAcquisitionOutOfPlanePhaseSteps': '00189159',
    'BulkMotionStatus': '00189166',
    'ParallelReductionFactorSecondInPlane': '00189168',
    'CardiacBeatRejectionTechnique': '00189169',
    'RespiratoryMotionCompensationTechnique': '00189170',
    'RespiratorySignalSource': '00189171',
    'BulkMotionCompensationTechnique': '00189172',
    'BulkMotionSignalSource': '00189173',
    'ApplicableSafetyStandardAgency': '00189174',
    'ApplicableSafetyStandardDescription': '00189175',
    'OperatingModeSequence': '00189176',
    'OperatingModeType': '00189177',
    'OperatingMode': '00189178',
    'SpecificAbsorptionRateDefinition': '00189179',
    'GradientOutputType': '00189180',
    'SpecificAbsorptionRateValue': '00189181',
    'GradientOutput': '00189182',
    'FlowCompensationDirection': '00189183',
    'TaggingDelay': '00189184',
    'RespiratoryMotionCompensationTechniqueDescription': '00189185',
    'RespiratorySignalSourceID': '00189186',
    'ChemicalShiftMinimumIntegrationLimitInHz': '00189195',
    'ChemicalShiftMaximumIntegrationLimitInHz': '00189196',
    'MRVelocityEncodingSequence': '00189197',
    'FirstOrderPhaseCorrection': '00189198',
    'WaterReferencedPhaseCorrection': '00189199',
    'MRSpectroscopyAcquisitionType': '00189200',
    'RespiratoryCyclePosition': '00189214',
    'VelocityEncodingMaximumValue': '00189217',
    'TagSpacingSecondDimension': '00189218',
    'TagAngleSecondAxis': '00189219',
    'FrameAcquisitionDuration': '00189220',
    'MRImageFrameTypeSequence': '00189226',
    'MRSpectroscopyFrameTypeSequence': '00189227',
    'MRAcquisitionPhaseEncodingStepsInPlane': '00189231',
    'MRAcquisitionPhaseEncodingStepsOutOfPlane': '00189232',
    'SpectroscopyAcquisitionPhaseColumns': '00189234',
    'CardiacCyclePosition': '00189236',
    'SpecificAbsorptionRateSequence': '00189239',
    'RFEchoTrainLength': '00189240',
    'GradientEchoTrainLength': '00189241',
    'ArterialSpinLabelingContrast': '00189250',
    'MRArterialSpinLabelingSequence': '00189251',
    'ASLTechniqueDescription': '00189252',
    'ASLSlabNumber': '00189253',
    'ASLSlabThickness': '00189254',
    'ASLSlabOrientation': '00189255',
    'ASLMidSlabPosition': '00189256',
    'ASLContext': '00189257',
    'ASLPulseTrainDuration': '00189258',
    'ASLCrusherFlag': '00189259',
    'ASLCrusherFlowLimit': '0018925A',
    'ASLCrusherDescription': '0018925B',
    'ASLBolusCutoffFlag': '0018925C',
    'ASLBolusCutoffTimingSequence': '0018925D',
    'ASLBolusCutoffTechnique': '0018925E',
    'ASLBolusCutoffDelayTime': '0018925F',
    'ASLSlabSequence': '00189260',
    'ChemicalShiftMinimumIntegrationLimitInppm': '00189295',
    'ChemicalShiftMaximumIntegrationLimitInppm': '00189296',
    'WaterReferenceAcquisition': '00189297',
    'EchoPeakPosition': '00189298',
    'CTAcquisitionTypeSequence': '00189301',
    'AcquisitionType': '00189302',
    'TubeAngle': '00189303',
    'CTAcquisitionDetailsSequence': '00189304',
    'RevolutionTime': '00189305',
    'SingleCollimationWidth': '00189306',
    'TotalCollimationWidth': '00189307',
    'CTTableDynamicsSequence': '00189308',
    'TableSpeed': '00189309',
    'TableFeedPerRotation': '00189310',
    'SpiralPitchFactor': '00189311',
    'CTGeometrySequence': '00189312',
    'DataCollectionCenterPatient': '00189313',
    'CTReconstructionSequence': '00189314',
    'ReconstructionAlgorithm': '00189315',
    'ConvolutionKernelGroup': '00189316',
    'ReconstructionFieldOfView': '00189317',
    'ReconstructionTargetCenterPatient': '00189318',
    'ReconstructionAngle': '00189319',
    'ImageFilter': '00189320',
    'CTExposureSequence': '00189321',
    'ReconstructionPixelSpacing': '00189322',
    'ExposureModulationType': '00189323',
    'EstimatedDoseSaving': '00189324',
    'CTXRayDetailsSequence': '00189325',
    'CTPositionSequence': '00189326',
    'TablePosition': '00189327',
    'ExposureTimeInms': '00189328',
    'CTImageFrameTypeSequence': '00189329',
    'XRayTubeCurrentInmA': '00189330',
    'ExposureInmAs': '00189332',
    'ConstantVolumeFlag': '00189333',
    'FluoroscopyFlag': '00189334',
    'DistanceSourceToDataCollectionCenter': '00189335',
    'ContrastBolusAgentNumber': '00189337',
    'ContrastBolusIngredientCodeSequence': '00189338',
    'ContrastAdministrationProfileSequence': '00189340',
    'ContrastBolusUsageSequence': '00189341',
    'ContrastBolusAgentAdministered': '00189342',
    'ContrastBolusAgentDetected': '00189343',
    'ContrastBolusAgentPhase': '00189344',
    'CTDIvol': '00189345',
    'CTDIPhantomTypeCodeSequence': '00189346',
    'CalciumScoringMassFactorPatient': '00189351',
    'CalciumScoringMassFactorDevice': '00189352',
    'EnergyWeightingFactor': '00189353',
    'CTAdditionalXRaySourceSequence': '00189360',
    'ProjectionPixelCalibrationSequence': '00189401',
    'DistanceSourceToIsocenter': '00189402',
    'DistanceObjectToTableTop': '00189403',
    'ObjectPixelSpacingInCenterOfBeam': '00189404',
    'PositionerPositionSequence': '00189405',
    'TablePositionSequence': '00189406',
    'CollimatorShapeSequence': '00189407',
    'PlanesInAcquisition': '00189410',
    'XAXRFFrameCharacteristicsSequence': '00189412',
    'FrameAcquisitionSequence': '00189417',
    'XRayReceptorType': '00189420',
    'AcquisitionProtocolName': '00189423',
    'AcquisitionProtocolDescription': '00189424',
    'ContrastBolusIngredientOpaque': '00189425',
    'DistanceReceptorPlaneToDetectorHousing': '00189426',
    'IntensifierActiveShape': '00189427',
    'IntensifierActiveDimensions': '00189428',
    'PhysicalDetectorSize': '00189429',
    'PositionOfIsocenterProjection': '00189430',
    'FieldOfViewSequence': '00189432',
    'FieldOfViewDescription': '00189433',
    'ExposureControlSensingRegionsSequence': '00189434',
    'ExposureControlSensingRegionShape': '00189435',
    'ExposureControlSensingRegionLeftVerticalEdge': '00189436',
    'ExposureControlSensingRegionRightVerticalEdge': '00189437',
    'ExposureControlSensingRegionUpperHorizontalEdge': '00189438',
    'ExposureControlSensingRegionLowerHorizontalEdge': '00189439',
    'CenterOfCircularExposureControlSensingRegion': '00189440',
    'RadiusOfCircularExposureControlSensingRegion': '00189441',
    'VerticesOfThePolygonalExposureControlSensingRegion': '00189442',
    '': '00189445',
    'ColumnAngulationPatient': '00189447',
    'BeamAngle': '00189449',
    'FrameDetectorParametersSequence': '00189451',
    'CalculatedAnatomyThickness': '00189452',
    'CalibrationSequence': '00189455',
    'ObjectThicknessSequence': '00189456',
    'PlaneIdentification': '00189457',
    'FieldOfViewDimensionsInFloat': '00189461',
    'IsocenterReferenceSystemSequence': '00189462',
    'PositionerIsocenterPrimaryAngle': '00189463',
    'PositionerIsocenterSecondaryAngle': '00189464',
    'PositionerIsocenterDetectorRotationAngle': '00189465',
    'TableXPositionToIsocenter': '00189466',
    'TableYPositionToIsocenter': '00189467',
    'TableZPositionToIsocenter': '00189468',
    'TableHorizontalRotationAngle': '00189469',
    'TableHeadTiltAngle': '00189470',
    'TableCradleTiltAngle': '00189471',
    'FrameDisplayShutterSequence': '00189472',
    'AcquiredImageAreaDoseProduct': '00189473',
    'CArmPositionerTabletopRelationship': '00189474',
    'XRayGeometrySequence': '00189476',
    'IrradiationEventIdentificationSequence': '00189477',
    '00189504': ('XRay3DFrameTypeSequence'),
    'ContributingSourcesSequence': '00189506',
    '00189507': ('XRay3DAcquisitionSequence'),
    'PrimaryPositionerScanArc': '00189508',
    'SecondaryPositionerScanArc': '00189509',
    'PrimaryPositionerScanStartAngle': '00189510',
    'SecondaryPositionerScanStartAngle': '00189511',
    'PrimaryPositionerIncrement': '00189514',
    'SecondaryPositionerIncrement': '00189515',
    'StartAcquisitionDateTime': '00189516',
    'EndAcquisitionDateTime': '00189517',
    'PrimaryPositionerIncrementSign': '00189518',
    'SecondaryPositionerIncrementSign': '00189519',
    'ApplicationName': '00189524',
    'ApplicationVersion': '00189525',
    'ApplicationManufacturer': '00189526',
    'AlgorithmType': '00189527',
    'AlgorithmDescription': '00189528',
    '00189530': ('XRay3DReconstructionSequence'),
    'ReconstructionDescription': '00189531',
    'PerProjectionAcquisitionSequence': '00189538',
    'DetectorPositionSequence': '00189541',
    'XRayAcquisitionDoseSequence': '00189542',
    'XRaySourceIsocenterPrimaryAngle': '00189543',
    'XRaySourceIsocenterSecondaryAngle': '00189544',
    'BreastSupportIsocenterPrimaryAngle': '00189545',
    'BreastSupportIsocenterSecondaryAngle': '00189546',
    'BreastSupportXPositionToIsocenter': '00189547',
    'BreastSupportYPositionToIsocenter': '00189548',
    'BreastSupportZPositionToIsocenter': '00189549',
    'DetectorIsocenterPrimaryAngle': '00189550',
    'DetectorIsocenterSecondaryAngle': '00189551',
    'DetectorXPositionToIsocenter': '00189552',
    'DetectorYPositionToIsocenter': '00189553',
    'DetectorZPositionToIsocenter': '00189554',
    'XRayGridSequence': '00189555',
    'XRayFilterSequence': '00189556',
    'DetectorActiveAreaTLHCPosition': '00189557',
    'DetectorActiveAreaOrientation': '00189558',
    'PositionerPrimaryAngleDirection': '00189559',
    'DiffusionBMatrixSequence': '00189601',
    'DiffusionBValueXX': '00189602',
    'DiffusionBValueXY': '00189603',
    'DiffusionBValueXZ': '00189604',
    'DiffusionBValueYY': '00189605',
    'DiffusionBValueYZ': '00189606',
    'DiffusionBValueZZ': '00189607',
    'FunctionalMRSequence': '00189621',
    'FunctionalSettlingPhaseFramesPresent': '00189622',
    'FunctionalSyncPulse': '00189623',
    'SettlingPhaseFrame': '00189624',
    'DecayCorrectionDateTime': '00189701',
    'StartDensityThreshold': '00189715',
    'StartRelativeDensityDifferenceThreshold': '00189716',
    'StartCardiacTriggerCountThreshold': '00189717',
    'StartRespiratoryTriggerCountThreshold': '00189718',
    'TerminationCountsThreshold': '00189719',
    'TerminationDensityThreshold': '00189720',
    'TerminationRelativeDensityThreshold': '00189721',
    'TerminationTimeThreshold': '00189722',
    'TerminationCardiacTriggerCountThreshold': '00189723',
    'TerminationRespiratoryTriggerCountThreshold': '00189724',
    'DetectorGeometry': '00189725',
    'TransverseDetectorSeparation': '00189726',
    'AxialDetectorDimension': '00189727',
    'RadiopharmaceuticalAgentNumber': '00189729',
    'PETFrameAcquisitionSequence': '00189732',
    'PETDetectorMotionDetailsSequence': '00189733',
    'PETTableDynamicsSequence': '00189734',
    'PETPositionSequence': '00189735',
    'PETFrameCorrectionFactorsSequence': '00189736',
    'RadiopharmaceuticalUsageSequence': '00189737',
    'AttenuationCorrectionSource': '00189738',
    'NumberOfIterations': '00189739',
    'NumberOfSubsets': '00189740',
    'PETReconstructionSequence': '00189749',
    'PETFrameTypeSequence': '00189751',
    'TimeOfFlightInformationUsed': '00189755',
    'ReconstructionType': '00189756',
    'DecayCorrected': '00189758',
    'AttenuationCorrected': '00189759',
    'ScatterCorrected': '00189760',
    'DeadTimeCorrected': '00189761',
    'GantryMotionCorrected': '00189762',
    'PatientMotionCorrected': '00189763',
    'CountLossNormalizationCorrected': '00189764',
    'RandomsCorrected': '00189765',
    'NonUniformRadialSamplingCorrected': '00189766',
    'SensitivityCalibrated': '00189767',
    'DetectorNormalizationCorrection': '00189768',
    'IterativeReconstructionMethod': '00189769',
    'AttenuationCorrectionTemporalRelationship': '00189770',
    'PatientPhysiologicalStateSequence': '00189771',
    'PatientPhysiologicalStateCodeSequence': '00189772',
    'DepthsOfFocus': '00189801',
    'ExcludedIntervalsSequence': '00189803',
    'ExclusionStartDateTime': '00189804',
    'ExclusionDuration': '00189805',
    'USImageDescriptionSequence': '00189806',
    'ImageDataTypeSequence': '00189807',
    'DataType': '00189808',
    'TransducerScanPatternCodeSequence': '00189809',
    'AliasedDataType': '0018980B',
    'PositionMeasuringDeviceUsed': '0018980C',
    'TransducerGeometryCodeSequence': '0018980D',
    'TransducerBeamSteeringCodeSequence': '0018980E',
    'TransducerApplicationCodeSequence': '0018980F',
    'ZeroVelocityPixelValue': '00189810',
    'ReferenceLocationLabel': '00189900',
    'ReferenceLocationDescription': '00189901',
    'ReferenceBasisCodeSequence': '00189902',
    'ReferenceGeometryCodeSequence': '00189903',
    'OffsetDistance': '00189904',
    'OffsetDirection': '00189905',
    'PotentialScheduledProtocolCodeSequence': '00189906',
    'PotentialRequestedProcedureCodeSequence': '00189907',
    'PotentialReasonsForProcedure': '00189908',
    'PotentialReasonsForProcedureCodeSequence': '00189909',
    'PotentialDiagnosticTasks': '0018990A',
    'ContraindicationsCodeSequence': '0018990B',
    'ReferencedDefinedProtocolSequence': '0018990C',
    'ReferencedPerformedProtocolSequence': '0018990D',
    'PredecessorProtocolSequence': '0018990E',
    'ProtocolPlanningInformation': '0018990F',
    'ProtocolDesignRationale': '00189910',
    'PatientSpecificationSequence': '00189911',
    'ModelSpecificationSequence': '00189912',
    'ParametersSpecificationSequence': '00189913',
    'InstructionSequence': '00189914',
    'InstructionIndex': '00189915',
    'InstructionText': '00189916',
    'InstructionDescription': '00189917',
    'InstructionPerformedFlag': '00189918',
    'InstructionPerformedDateTime': '00189919',
    'InstructionPerformanceComment': '0018991A',
    'PatientPositioningInstructionSequence': '0018991B',
    'PositioningMethodCodeSequence': '0018991C',
    'PositioningLandmarkSequence': '0018991D',
    'TargetFrameOfReferenceUID': '0018991E',
    'AcquisitionProtocolElementSpecificationSequence': '0018991F',
    'AcquisitionProtocolElementSequence': '00189920',
    'ProtocolElementNumber': '00189921',
    'ProtocolElementName': '00189922',
    'ProtocolElementCharacteristicsSummary': '00189923',
    'ProtocolElementPurpose': '00189924',
    'AcquisitionMotion': '00189930',
    'AcquisitionStartLocationSequence': '00189931',
    'AcquisitionEndLocationSequence': '00189932',
    'ReconstructionProtocolElementSpecificationSequence': '00189933',
    'ReconstructionProtocolElementSequence': '00189934',
    'StorageProtocolElementSpecificationSequence': '00189935',
    'StorageProtocolElementSequence': '00189936',
    'RequestedSeriesDescription': '00189937',
    'SourceAcquisitionProtocolElementNumber': '00189938',
    'SourceAcquisitionBeamNumber': '00189939',
    'SourceReconstructionProtocolElementNumber': '0018993A',
    'ReconstructionStartLocationSequence': '0018993B',
    'ReconstructionEndLocationSequence': '0018993C',
    'ReconstructionAlgorithmSequence': '0018993D',
    'ReconstructionTargetCenterLocationSequence': '0018993E',
    'ImageFilterDescription': '00189941',
    'CTDIvolNotificationTrigger': '00189942',
    'DLPNotificationTrigger': '00189943',
    'AutoKVPSelectionType': '00189944',
    'AutoKVPUpperBound': '00189945',
    'AutoKVPLowerBound': '00189946',
    'ProtocolDefinedPatientPosition': '00189947',
    'ContributingEquipmentSequence': '0018A001',
    'ContributionDateTime': '0018A002',
    'ContributionDescription': '0018A003',
    'StudyInstanceUID': '0020000D',
    'SeriesInstanceUID': '0020000E',
    'StudyID': '00200010',
    'SeriesNumber': '00200011',
    'AcquisitionNumber': '00200012',
    'InstanceNumber': '00200013',
    'IsotopeNumber': '00200014',
    'PhaseNumber': '00200015',
    'IntervalNumber': '00200016',
    'TimeSlotNumber': '00200017',
    'AngleNumber': '00200018',
    'ItemNumber': '00200019',
    'PatientOrientation': '00200020',
    'OverlayNumber': '00200022',
    'CurveNumber': '00200024',
    'LUTNumber': '00200026',
    'ImagePosition': '00200030',
    'ImagePositionPatient': '00200032',
    'ImageOrientation': '00200035',
    'ImageOrientationPatient': '00200037',
    'Location': '00200050',
    'FrameOfReferenceUID': '00200052',
    'Laterality': '00200060',
    'ImageLaterality': '00200062',
    'ImageGeometryType': '00200070',
    'MaskingImage': '00200080',
    'ReportNumber': '002000AA',
    'TemporalPositionIdentifier': '00200100',
    'NumberOfTemporalPositions': '00200105',
    'TemporalResolution': '00200110',
    'SynchronizationFrameOfReferenceUID': '00200200',
    'SOPInstanceUIDOfConcatenationSource': '00200242',
    'SeriesInStudy': '00201000',
    'AcquisitionsInSeries': '00201001',
    'ImagesInAcquisition': '00201002',
    'ImagesInSeries': '00201003',
    'AcquisitionsInStudy': '00201004',
    'ImagesInStudy': '00201005',
    'Reference': '00201020',
    'TargetPositionReferenceIndicator': '0020103F',
    'PositionReferenceIndicator': '00201040',
    'SliceLocation': '00201041',
    'OtherStudyNumbers': '00201070',
    'NumberOfPatientRelatedStudies': '00201200',
    'NumberOfPatientRelatedSeries': '00201202',
    'NumberOfPatientRelatedInstances': '00201204',
    'NumberOfStudyRelatedSeries': '00201206',
    'NumberOfStudyRelatedInstances': '00201208',
    'NumberOfSeriesRelatedInstances': '00201209',
    'ModifyingDeviceID': '00203401',
    'ModifiedImageID': '00203402',
    'ModifiedImageDate': '00203403',
    'ModifyingDeviceManufacturer': '00203404',
    'ModifiedImageTime': '00203405',
    'ModifiedImageDescription': '00203406',
    'ImageComments': '00204000',
    'OriginalImageIdentification': '00205000',
    'OriginalImageIdentificationNomenclature': '00205002',
    'StackID': '00209056',
    'InStackPositionNumber': '00209057',
    'FrameAnatomySequence': '00209071',
    'FrameLaterality': '00209072',
    'FrameContentSequence': '00209111',
    'PlanePositionSequence': '00209113',
    'PlaneOrientationSequence': '00209116',
    'TemporalPositionIndex': '00209128',
    'NominalCardiacTriggerDelayTime': '00209153',
    'NominalCardiacTriggerTimePriorToRPeak': '00209154',
    'ActualCardiacTriggerTimePriorToRPeak': '00209155',
    'FrameAcquisitionNumber': '00209156',
    'DimensionIndexValues': '00209157',
    'FrameComments': '00209158',
    'ConcatenationUID': '00209161',
    'InConcatenationNumber': '00209162',
    'InConcatenationTotalNumber': '00209163',
    'DimensionOrganizationUID': '00209164',
    'DimensionIndexPointer': '00209165',
    'FunctionalGroupPointer': '00209167',
    'UnassignedSharedConvertedAttributesSequence': '00209170',
    'UnassignedPerFrameConvertedAttributesSequence': '00209171',
    'ConversionSourceAttributesSequence': '00209172',
    'DimensionIndexPrivateCreator': '00209213',
    'DimensionOrganizationSequence': '00209221',
    'DimensionIndexSequence': '00209222',
    'ConcatenationFrameOffsetNumber': '00209228',
    'FunctionalGroupPrivateCreator': '00209238',
    'NominalPercentageOfCardiacPhase': '00209241',
    'NominalPercentageOfRespiratoryPhase': '00209245',
    'StartingRespiratoryAmplitude': '00209246',
    'StartingRespiratoryPhase': '00209247',
    'EndingRespiratoryAmplitude': '00209248',
    'EndingRespiratoryPhase': '00209249',
    'RespiratoryTriggerType': '00209250',
    'RRIntervalTimeNominal': '00209251',
    'ActualCardiacTriggerDelayTime': '00209252',
    'RespiratorySynchronizationSequence': '00209253',
    'RespiratoryIntervalTime': '00209254',
    'NominalRespiratoryTriggerDelayTime': '00209255',
    'RespiratoryTriggerDelayThreshold': '00209256',
    'ActualRespiratoryTriggerDelayTime': '00209257',
    'ImagePositionVolume': '00209301',
    'ImageOrientationVolume': '00209302',
    'UltrasoundAcquisitionGeometry': '00209307',
    'ApexPosition': '00209308',
    'VolumeToTransducerMappingMatrix': '00209309',
    'VolumeToTableMappingMatrix': '0020930A',
    'VolumeToTransducerRelationship': '0020930B',
    'PatientFrameOfReferenceSource': '0020930C',
    'TemporalPositionTimeOffset': '0020930D',
    'PlanePositionVolumeSequence': '0020930E',
    'PlaneOrientationVolumeSequence': '0020930F',
    'TemporalPositionSequence': '00209310',
    'DimensionOrganizationType': '00209311',
    'VolumeFrameOfReferenceUID': '00209312',
    'TableFrameOfReferenceUID': '00209313',
    'DimensionDescriptionLabel': '00209421',
    'PatientOrientationInFrameSequence': '00209450',
    'FrameLabel': '00209453',
    'AcquisitionIndex': '00209518',
    'ContributingSOPInstancesReferenceSequence': '00209529',
    'ReconstructionIndex': '00209536',
    'LightPathFilterPassThroughWavelength': '00220001',
    'LightPathFilterPassBand': '00220002',
    'ImagePathFilterPassThroughWavelength': '00220003',
    'ImagePathFilterPassBand': '00220004',
    'PatientEyeMovementCommanded': '00220005',
    'PatientEyeMovementCommandCodeSequence': '00220006',
    'SphericalLensPower': '00220007',
    'CylinderLensPower': '00220008',
    'CylinderAxis': '00220009',
    'EmmetropicMagnification': '0022000A',
    'IntraOcularPressure': '0022000B',
    'HorizontalFieldOfView': '0022000C',
    'PupilDilated': '0022000D',
    'DegreeOfDilation': '0022000E',
    'StereoBaselineAngle': '00220010',
    'StereoBaselineDisplacement': '00220011',
    'StereoHorizontalPixelOffset': '00220012',
    'StereoVerticalPixelOffset': '00220013',
    'StereoRotation': '00220014',
    'AcquisitionDeviceTypeCodeSequence': '00220015',
    'IlluminationTypeCodeSequence': '00220016',
    'LightPathFilterTypeStackCodeSequence': '00220017',
    'ImagePathFilterTypeStackCodeSequence': '00220018',
    'LensesCodeSequence': '00220019',
    'ChannelDescriptionCodeSequence': '0022001A',
    'RefractiveStateSequence': '0022001B',
    'MydriaticAgentCodeSequence': '0022001C',
    'RelativeImagePositionCodeSequence': '0022001D',
    'CameraAngleOfView': '0022001E',
    'StereoPairsSequence': '00220020',
    'LeftImageSequence': '00220021',
    'RightImageSequence': '00220022',
    'StereoPairsPresent': '00220028',
    'AxialLengthOfTheEye': '00220030',
    'OphthalmicFrameLocationSequence': '00220031',
    'ReferenceCoordinates': '00220032',
    'DepthSpatialResolution': '00220035',
    'MaximumDepthDistortion': '00220036',
    'AlongScanSpatialResolution': '00220037',
    'MaximumAlongScanDistortion': '00220038',
    'OphthalmicImageOrientation': '00220039',
    'DepthOfTransverseImage': '00220041',
    'MydriaticAgentConcentrationUnitsSequence': '00220042',
    'AcrossScanSpatialResolution': '00220048',
    'MaximumAcrossScanDistortion': '00220049',
    'MydriaticAgentConcentration': '0022004E',
    'IlluminationWaveLength': '00220055',
    'IlluminationPower': '00220056',
    'IlluminationBandwidth': '00220057',
    'MydriaticAgentSequence': '00220058',
    'OphthalmicAxialMeasurementsRightEyeSequence': '00221007',
    'OphthalmicAxialMeasurementsLeftEyeSequence': '00221008',
    'OphthalmicAxialMeasurementsDeviceType': '00221009',
    'OphthalmicAxialLengthMeasurementsType': '00221010',
    'OphthalmicAxialLengthSequence': '00221012',
    'OphthalmicAxialLength': '00221019',
    'LensStatusCodeSequence': '00221024',
    'VitreousStatusCodeSequence': '00221025',
    'IOLFormulaCodeSequence': '00221028',
    'IOLFormulaDetail': '00221029',
    'KeratometerIndex': '00221033',
    'SourceOfOphthalmicAxialLengthCodeSequence': '00221035',
    'TargetRefraction': '00221037',
    'RefractiveProcedureOccurred': '00221039',
    'RefractiveSurgeryTypeCodeSequence': '00221040',
    'OphthalmicUltrasoundMethodCodeSequence': '00221044',
    'OphthalmicAxialLengthMeasurementsSequence': '00221050',
    'IOLPower': '00221053',
    'PredictedRefractiveError': '00221054',
    'OphthalmicAxialLengthVelocity': '00221059',
    'LensStatusDescription': '00221065',
    'VitreousStatusDescription': '00221066',
    'IOLPowerSequence': '00221090',
    'LensConstantSequence': '00221092',
    'IOLManufacturer': '00221093',
    'LensConstantDescription': '00221094',
    'ImplantName': '00221095',
    'KeratometryMeasurementTypeCodeSequence': '00221096',
    'ImplantPartNumber': '00221097',
    'ReferencedOphthalmicAxialMeasurementsSequence': '00221100',
    'OphthalmicAxialLengthMeasurementsSegmentNameCodeSequence': '00221101',
    'RefractiveErrorBeforeRefractiveSurgeryCodeSequence': '00221103',
    'IOLPowerForExactEmmetropia': '00221121',
    'IOLPowerForExactTargetRefraction': '00221122',
    'AnteriorChamberDepthDefinitionCodeSequence': '00221125',
    'LensThicknessSequence': '00221127',
    'AnteriorChamberDepthSequence': '00221128',
    'LensThickness': '00221130',
    'AnteriorChamberDepth': '00221131',
    'SourceOfLensThicknessDataCodeSequence': '00221132',
    'SourceOfAnteriorChamberDepthDataCodeSequence': '00221133',
    'SourceOfRefractiveMeasurementsSequence': '00221134',
    'SourceOfRefractiveMeasurementsCodeSequence': '00221135',
    'OphthalmicAxialLengthMeasurementModified': '00221140',
    'OphthalmicAxialLengthDataSourceCodeSequence': '00221150',
    'OphthalmicAxialLengthAcquisitionMethodCodeSequence': '00221153',
    'SignalToNoiseRatio': '00221155',
    'OphthalmicAxialLengthDataSourceDescription': '00221159',
    'OphthalmicAxialLengthMeasurementsTotalLengthSequence': '00221210',
    'OphthalmicAxialLengthMeasurementsSegmentalLengthSequence': '00221211',
    'OphthalmicAxialLengthMeasurementsLengthSummationSequence': '00221212',
    'UltrasoundOphthalmicAxialLengthMeasurementsSequence': '00221220',
    'OpticalOphthalmicAxialLengthMeasurementsSequence': '00221225',
    'UltrasoundSelectedOphthalmicAxialLengthSequence': '00221230',
    'OphthalmicAxialLengthSelectionMethodCodeSequence': '00221250',
    'OpticalSelectedOphthalmicAxialLengthSequence': '00221255',
    'SelectedSegmentalOphthalmicAxialLengthSequence': '00221257',
    'SelectedTotalOphthalmicAxialLengthSequence': '00221260',
    'OphthalmicAxialLengthQualityMetricSequence': '00221262',
    'OphthalmicAxialLengthQualityMetricTypeCodeSequence': '00221265',
    'OphthalmicAxialLengthQualityMetricTypeDescription': '00221273',
    'IntraocularLensCalculationsRightEyeSequence': '00221300',
    'IntraocularLensCalculationsLeftEyeSequence': '00221310',
    'ReferencedOphthalmicAxialLengthMeasurementQCImageSequence': '00221330',
    'OphthalmicMappingDeviceType': '00221415',
    'AcquisitionMethodCodeSequence': '00221420',
    'AcquisitionMethodAlgorithmSequence': '00221423',
    'OphthalmicThicknessMapTypeCodeSequence': '00221436',
    'OphthalmicThicknessMappingNormalsSequence': '00221443',
    'RetinalThicknessDefinitionCodeSequence': '00221445',
    'PixelValueMappingToCodedConceptSequence': '00221450',
    'MappedPixelValue': '00221452',
    'PixelValueMappingExplanation': '00221454',
    'OphthalmicThicknessMapQualityThresholdSequence': '00221458',
    'OphthalmicThicknessMapThresholdQualityRating': '00221460',
    'AnatomicStructureReferencePoint': '00221463',
    'RegistrationToLocalizerSequence': '00221465',
    'RegisteredLocalizerUnits': '00221466',
    'RegisteredLocalizerTopLeftHandCorner': '00221467',
    'RegisteredLocalizerBottomRightHandCorner': '00221468',
    'OphthalmicThicknessMapQualityRatingSequence': '00221470',
    'RelevantOPTAttributesSequence': '00221472',
    'TransformationMethodCodeSequence': '00221512',
    'TransformationAlgorithmSequence': '00221513',
    'OphthalmicAxialLengthMethod': '00221515',
    'OphthalmicFOV': '00221517',
    'TwoDimensionalToThreeDimensionalMapSequence': '00221518',
    'WideFieldOphthalmicPhotographyQualityRatingSequence': '00221525',
    'WideFieldOphthalmicPhotographyQualityThresholdSequence': '00221526',
    'WideFieldOphthalmicPhotographyThresholdQualityRating': '00221527',
    'XCoordinatesCenterPixelViewAngle': '00221528',
    'YCoordinatesCenterPixelViewAngle': '00221529',
    'NumberOfMapPoints': '00221530',
    'TwoDimensionalToThreeDimensionalMapData': '00221531',
    'DerivationAlgorithmSequence': '00221612',
    'OphthalmicImageTypeCodeSequence': '00221615',
    'OphthalmicImageTypeDescription': '00221616',
    'ScanPatternTypeCodeSequence': '00221618',
    'ReferencedSurfaceMeshIdentificationSequence': '00221620',
    'OphthalmicVolumetricPropertiesFlag': '00221622',
    'OphthalmicAnatomicReferencePointXCoordinate': '00221624',
    'OphthalmicAnatomicReferencePointYCoordinate': '00221626',
    'OphthalmicEnFaceImageQualityRatingSequence': '00221628',
    'QualityThreshold': '00221630',
    'OCTBscanAnalysisAcquisitionParametersSequence': '00221640',
    'NumberofBscansPerFrame': '00221642',
    'BscanSlabThickness': '00221643',
    'DistanceBetweenBscanSlabs': '00221644',
    'BscanCycleTime': '00221645',
    'BscanCycleTimeVector': '00221646',
    'AscanRate': '00221649',
    'BscanRate': '00221650',
    'SurfaceMeshZPixelOffset': '00221658',
    'VisualFieldHorizontalExtent': '00240010',
    'VisualFieldVerticalExtent': '00240011',
    'VisualFieldShape': '00240012',
    'ScreeningTestModeCodeSequence': '00240016',
    'MaximumStimulusLuminance': '00240018',
    'BackgroundLuminance': '00240020',
    'StimulusColorCodeSequence': '00240021',
    'BackgroundIlluminationColorCodeSequence': '00240024',
    'StimulusArea': '00240025',
    'StimulusPresentationTime': '00240028',
    'FixationSequence': '00240032',
    'FixationMonitoringCodeSequence': '00240033',
    'VisualFieldCatchTrialSequence': '00240034',
    'FixationCheckedQuantity': '00240035',
    'PatientNotProperlyFixatedQuantity': '00240036',
    'PresentedVisualStimuliDataFlag': '00240037',
    'NumberOfVisualStimuli': '00240038',
    'ExcessiveFixationLossesDataFlag': '00240039',
    'ExcessiveFixationLosses': '00240040',
    'StimuliRetestingQuantity': '00240042',
    'CommentsOnPatientPerformanceOfVisualField': '00240044',
    'FalseNegativesEstimateFlag': '00240045',
    'FalseNegativesEstimate': '00240046',
    'NegativeCatchTrialsQuantity': '00240048',
    'FalseNegativesQuantity': '00240050',
    'ExcessiveFalseNegativesDataFlag': '00240051',
    'ExcessiveFalseNegatives': '00240052',
    'FalsePositivesEstimateFlag': '00240053',
    'FalsePositivesEstimate': '00240054',
    'CatchTrialsDataFlag': '00240055',
    'PositiveCatchTrialsQuantity': '00240056',
    'TestPointNormalsDataFlag': '00240057',
    'TestPointNormalsSequence': '00240058',
    'GlobalDeviationProbabilityNormalsFlag': '00240059',
    'FalsePositivesQuantity': '00240060',
    'ExcessiveFalsePositivesDataFlag': '00240061',
    'ExcessiveFalsePositives': '00240062',
    'VisualFieldTestNormalsFlag': '00240063',
    'ResultsNormalsSequence': '00240064',
    'AgeCorrectedSensitivityDeviationAlgorithmSequence': '00240065',
    'GlobalDeviationFromNormal': '00240066',
    'GeneralizedDefectSensitivityDeviationAlgorithmSequence': '00240067',
    'LocalizedDeviationFromNormal': '00240068',
    'PatientReliabilityIndicator': '00240069',
    'VisualFieldMeanSensitivity': '00240070',
    'GlobalDeviationProbability': '00240071',
    'LocalDeviationProbabilityNormalsFlag': '00240072',
    'LocalizedDeviationProbability': '00240073',
    'ShortTermFluctuationCalculated': '00240074',
    'ShortTermFluctuation': '00240075',
    'ShortTermFluctuationProbabilityCalculated': '00240076',
    'ShortTermFluctuationProbability': '00240077',
    'CorrectedLocalizedDeviationFromNormalCalculated': '00240078',
    'CorrectedLocalizedDeviationFromNormal': '00240079',
    'CorrectedLocalizedDeviationFromNormalProbabilityCalculated': '00240080',
    'CorrectedLocalizedDeviationFromNormalProbability': '00240081',
    'GlobalDeviationProbabilitySequence': '00240083',
    'LocalizedDeviationProbabilitySequence': '00240085',
    'FovealSensitivityMeasured': '00240086',
    'FovealSensitivity': '00240087',
    'VisualFieldTestDuration': '00240088',
    'VisualFieldTestPointSequence': '00240089',
    'VisualFieldTestPointXCoordinate': '00240090',
    'VisualFieldTestPointYCoordinate': '00240091',
    'AgeCorrectedSensitivityDeviationValue': '00240092',
    'StimulusResults': '00240093',
    'SensitivityValue': '00240094',
    'RetestStimulusSeen': '00240095',
    'RetestSensitivityValue': '00240096',
    'VisualFieldTestPointNormalsSequence': '00240097',
    'QuantifiedDefect': '00240098',
    'AgeCorrectedSensitivityDeviationProbabilityValue': '00240100',
    'GeneralizedDefectCorrectedSensitivityDeviationFlag': '00240102',
    'GeneralizedDefectCorrectedSensitivityDeviationValue': '00240103',
    'GeneralizedDefectCorrectedSensitivityDeviationProbabilityValue': '00240104',
    'MinimumSensitivityValue': '00240105',
    'BlindSpotLocalized': '00240106',
    'BlindSpotXCoordinate': '00240107',
    'BlindSpotYCoordinate': '00240108',
    'VisualAcuityMeasurementSequence': '00240110',
    'RefractiveParametersUsedOnPatientSequence': '00240112',
    'MeasurementLaterality': '00240113',
    'OphthalmicPatientClinicalInformationLeftEyeSequence': '00240114',
    'OphthalmicPatientClinicalInformationRightEyeSequence': '00240115',
    'FovealPointNormativeDataFlag': '00240117',
    'FovealPointProbabilityValue': '00240118',
    'ScreeningBaselineMeasured': '00240120',
    'ScreeningBaselineMeasuredSequence': '00240122',
    'ScreeningBaselineType': '00240124',
    'ScreeningBaselineValue': '00240126',
    'AlgorithmSource': '00240202',
    'DataSetName': '00240306',
    'DataSetVersion': '00240307',
    'DataSetSource': '00240308',
    'DataSetDescription': '00240309',
    'VisualFieldTestReliabilityGlobalIndexSequence': '00240317',
    'VisualFieldGlobalResultsIndexSequence': '00240320',
    'DataObservationSequence': '00240325',
    'IndexNormalsFlag': '00240338',
    'IndexProbability': '00240341',
    'IndexProbabilitySequence': '00240344',
    'SamplesPerPixel': '00280002',
    'SamplesPerPixelUsed': '00280003',
    'PhotometricInterpretation': '00280004',
    'ImageDimensions': '00280005',
    'PlanarConfiguration': '00280006',
    'NumberOfFrames': '00280008',
    'FrameIncrementPointer': '00280009',
    'FrameDimensionPointer': '0028000A',
    'Rows': '00280010',
    'Columns': '00280011',
    'Planes': '00280012',
    'UltrasoundColorDataPresent': '00280014',
    '': '00280020',
    'PixelSpacing': '00280030',
    'ZoomFactor': '00280031',
    'ZoomCenter': '00280032',
    'PixelAspectRatio': '00280034',
    'ImageFormat': '00280040',
    'ManipulatedImage': '00280050',
    'CorrectedImage': '00280051',
    'CompressionRecognitionCode': '0028005F',
    'CompressionCode': '00280060',
    'CompressionOriginator': '00280061',
    'CompressionLabel': '00280062',
    'CompressionDescription': '00280063',
    'CompressionSequence': '00280065',
    'CompressionStepPointers': '00280066',
    'RepeatInterval': '00280068',
    'BitsGrouped': '00280069',
    'PerimeterTable': '00280070',
    'PerimeterValue': '00280071',
    'PredictorRows': '00280080',
    'PredictorColumns': '00280081',
    'PredictorConstants': '00280082',
    'BlockedPixels': '00280090',
    'BlockRows': '00280091',
    'BlockColumns': '00280092',
    'RowOverlap': '00280093',
    'ColumnOverlap': '00280094',
    'BitsAllocated': '00280100',
    'BitsStored': '00280101',
    'HighBit': '00280102',
    'PixelRepresentation': '00280103',
    'SmallestValidPixelValue': '00280104',
    'LargestValidPixelValue': '00280105',
    'SmallestImagePixelValue': '00280106',
    'LargestImagePixelValue': '00280107',
    'SmallestPixelValueInSeries': '00280108',
    'LargestPixelValueInSeries': '00280109',
    'SmallestImagePixelValueInPlane': '00280110',
    'LargestImagePixelValueInPlane': '00280111',
    'PixelPaddingValue': '00280120',
    'PixelPaddingRangeLimit': '00280121',
    'FloatPixelPaddingValue': '00280122',
    'DoubleFloatPixelPaddingValue': '00280123',
    'FloatPixelPaddingRangeLimit': '00280124',
    'DoubleFloatPixelPaddingRangeLimit': '00280125',
    'ImageLocation': '00280200',
    'QualityControlImage': '00280300',
    'BurnedInAnnotation': '00280301',
    'RecognizableVisualFeatures': '00280302',
    'LongitudinalTemporalInformationModified': '00280303',
    'ReferencedColorPaletteInstanceUID': '00280304',
    'TransformLabel': '00280400',
    'TransformVersionNumber': '00280401',
    'NumberOfTransformSteps': '00280402',
    'SequenceOfCompressedData': '00280403',
    'DetailsOfCoefficients': '00280404',
    'DCTLabel': '00280700',
    'DataBlockDescription': '00280701',
    'DataBlock': '00280702',
    'NormalizationFactorFormat': '00280710',
    'ZonalMapNumberFormat': '00280720',
    'ZonalMapLocation': '00280721',
    'ZonalMapFormat': '00280722',
    'AdaptiveMapFormat': '00280730',
    'CodeNumberFormat': '00280740',
    'PixelSpacingCalibrationType': '00280A02',
    'PixelSpacingCalibrationDescription': '00280A04',
    'PixelIntensityRelationship': '00281040',
    'PixelIntensityRelationshipSign': '00281041',
    'WindowCenter': '00281050',
    'WindowWidth': '00281051',
    'RescaleIntercept': '00281052',
    'RescaleSlope': '00281053',
    'RescaleType': '00281054',
    'WindowCenterWidthExplanation': '00281055',
    'VOILUTFunction': '00281056',
    'GrayScale': '00281080',
    'RecommendedViewingMode': '00281090',
    'GrayLookupTableDescriptor': '00281100',
    'RedPaletteColorLookupTableDescriptor': '00281101',
    'GreenPaletteColorLookupTableDescriptor': '00281102',
    'BluePaletteColorLookupTableDescriptor': '00281103',
    'AlphaPaletteColorLookupTableDescriptor': '00281104',
    'LargeRedPaletteColorLookupTableDescriptor': '00281111',
    'LargeGreenPaletteColorLookupTableDescriptor': '00281112',
    'LargeBluePaletteColorLookupTableDescriptor': '00281113',
    'PaletteColorLookupTableUID': '00281199',
    'GrayLookupTableData': '00281200',
    'RedPaletteColorLookupTableData': '00281201',
    'GreenPaletteColorLookupTableData': '00281202',
    'BluePaletteColorLookupTableData': '00281203',
    'AlphaPaletteColorLookupTableData': '00281204',
    'LargeRedPaletteColorLookupTableData': '00281211',
    'LargeGreenPaletteColorLookupTableData': '00281212',
    'LargeBluePaletteColorLookupTableData': '00281213',
    'LargePaletteColorLookupTableUID': '00281214',
    'SegmentedRedPaletteColorLookupTableData': '00281221',
    'SegmentedGreenPaletteColorLookupTableData': '00281222',
    'SegmentedBluePaletteColorLookupTableData': '00281223',
    'SegmentedAlphaPaletteColorLookupTableData': '00281224',
    'StoredValueColorRangeSequence': '00281230',
    'MinimumStoredValueMapped': '00281231',
    'MaximumStoredValueMapped': '00281232',
    'BreastImplantPresent': '00281300',
    'PartialView': '00281350',
    'PartialViewDescription': '00281351',
    'PartialViewCodeSequence': '00281352',
    'SpatialLocationsPreserved': '0028135A',
    'DataFrameAssignmentSequence': '00281401',
    'DataPathAssignment': '00281402',
    'BitsMappedToColorLookupTable': '00281403',
    '00281404': ('BlendingLUT1Sequence'),
    '00281405': ('BlendingLUT1TransferFunction'),
    'BlendingWeightConstant': '00281406',
    'BlendingLookupTableDescriptor': '00281407',
    'BlendingLookupTableData': '00281408',
    'EnhancedPaletteColorLookupTableSequence': '0028140B',
    '0028140C': ('BlendingLUT2Sequence'),
    '0028140D': ('BlendingLUT2TransferFunction'),
    'DataPathID': '0028140E',
    'RGBLUTTransferFunction': '0028140F',
    'AlphaLUTTransferFunction': '00281410',
    'ICCProfile': '00282000',
    'ColorSpace': '00282002',
    'LossyImageCompression': '00282110',
    'LossyImageCompressionRatio': '00282112',
    'LossyImageCompressionMethod': '00282114',
    'ModalityLUTSequence': '00283000',
    'LUTDescriptor': '00283002',
    'LUTExplanation': '00283003',
    'ModalityLUTType': '00283004',
    'LUTData': '00283006',
    'VOILUTSequence': '00283010',
    'SoftcopyVOILUTSequence': '00283110',
    'ImagePresentationComments': '00284000',
    'BiPlaneAcquisitionSequence': '00285000',
    'RepresentativeFrameNumber': '00286010',
    'FrameNumbersOfInterest': '00286020',
    'FrameOfInterestDescription': '00286022',
    'FrameOfInterestType': '00286023',
    'MaskPointers': '00286030',
    'RWavePointer': '00286040',
    'MaskSubtractionSequence': '00286100',
    'MaskOperation': '00286101',
    'ApplicableFrameRange': '00286102',
    'MaskFrameNumbers': '00286110',
    'ContrastFrameAveraging': '00286112',
    'MaskSubPixelShift': '00286114',
    'TIDOffset': '00286120',
    'MaskOperationExplanation': '00286190',
    'EquipmentAdministratorSequence': '00287000',
    'NumberOfDisplaySubsystems': '00287001',
    'CurrentConfigurationID': '00287002',
    'DisplaySubsystemID': '00287003',
    'DisplaySubsystemName': '00287004',
    'DisplaySubsystemDescription': '00287005',
    'SystemStatus': '00287006',
    'SystemStatusComment': '00287007',
    'TargetLuminanceCharacteristicsSequence': '00287008',
    'LuminanceCharacteristicsID': '00287009',
    'DisplaySubsystemConfigurationSequence': '0028700A',
    'ConfigurationID': '0028700B',
    'ConfigurationName': '0028700C',
    'ConfigurationDescription': '0028700D',
    'ReferencedTargetLuminanceCharacteristicsID': '0028700E',
    'QAResultsSequence': '0028700F',
    'DisplaySubsystemQAResultsSequence': '00287010',
    'ConfigurationQAResultsSequence': '00287011',
    'MeasurementEquipmentSequence': '00287012',
    'MeasurementFunctions': '00287013',
    'MeasurementEquipmentType': '00287014',
    'VisualEvaluationResultSequence': '00287015',
    'DisplayCalibrationResultSequence': '00287016',
    'DDLValue': '00287017',
    'CIExyWhitePoint': '00287018',
    'DisplayFunctionType': '00287019',
    'GammaValue': '0028701A',
    'NumberOfLuminancePoints': '0028701B',
    'LuminanceResponseSequence': '0028701C',
    'TargetMinimumLuminance': '0028701D',
    'TargetMaximumLuminance': '0028701E',
    'LuminanceValue': '0028701F',
    'LuminanceResponseDescription': '00287020',
    'WhitePointFlag': '00287021',
    'DisplayDeviceTypeCodeSequence': '00287022',
    'DisplaySubsystemSequence': '00287023',
    'LuminanceResultSequence': '00287024',
    'AmbientLightValueSource': '00287025',
    'MeasuredCharacteristics': '00287026',
    'LuminanceUniformityResultSequence': '00287027',
    'VisualEvaluationTestSequence': '00287028',
    'TestResult': '00287029',
    'TestResultComment': '0028702A',
    'TestImageValidation': '0028702B',
    'TestPatternCodeSequence': '0028702C',
    'MeasurementPatternCodeSequence': '0028702D',
    'VisualEvaluationMethodCodeSequence': '0028702E',
    'PixelDataProviderURL': '00287FE0',
    'DataPointRows': '00289001',
    'DataPointColumns': '00289002',
    'SignalDomainColumns': '00289003',
    'LargestMonochromePixelValue': '00289099',
    'DataRepresentation': '00289108',
    'PixelMeasuresSequence': '00289110',
    'FrameVOILUTSequence': '00289132',
    'PixelValueTransformationSequence': '00289145',
    'SignalDomainRows': '00289235',
    'DisplayFilterPercentage': '00289411',
    'FramePixelShiftSequence': '00289415',
    'SubtractionItemID': '00289416',
    'PixelIntensityRelationshipLUTSequence': '00289422',
    'FramePixelDataPropertiesSequence': '00289443',
    'GeometricalProperties': '00289444',
    'GeometricMaximumDistortion': '00289445',
    'ImageProcessingApplied': '00289446',
    'MaskSelectionMode': '00289454',
    'LUTFunction': '00289474',
    'MaskVisibilityPercentage': '00289478',
    'PixelShiftSequence': '00289501',
    'RegionPixelShiftSequence': '00289502',
    'VerticesOfTheRegion': '00289503',
    'MultiFramePresentationSequence': '00289505',
    'PixelShiftFrameRange': '00289506',
    'LUTFrameRange': '00289507',
    'ImageToEquipmentMappingMatrix': '00289520',
    'EquipmentCoordinateSystemIdentification': '00289537',
    'StudyStatusID': '0032000A',
    'StudyPriorityID': '0032000C',
    'StudyIDIssuer': '00320012',
    'StudyVerifiedDate': '00320032',
    'StudyVerifiedTime': '00320033',
    'StudyReadDate': '00320034',
    'StudyReadTime': '00320035',
    'ScheduledStudyStartDate': '00321000',
    'ScheduledStudyStartTime': '00321001',
    'ScheduledStudyStopDate': '00321010',
    'ScheduledStudyStopTime': '00321011',
    'ScheduledStudyLocation': '00321020',
    'ScheduledStudyLocationAETitle': '00321021',
    'ReasonForStudy': '00321030',
    'RequestingPhysicianIdentificationSequence': '00321031',
    'RequestingPhysician': '00321032',
    'RequestingService': '00321033',
    'RequestingServiceCodeSequence': '00321034',
    'StudyArrivalDate': '00321040',
    'StudyArrivalTime': '00321041',
    'StudyCompletionDate': '00321050',
    'StudyCompletionTime': '00321051',
    'StudyComponentStatusID': '00321055',
    'RequestedProcedureDescription': '00321060',
    'RequestedProcedureCodeSequence': '00321064',
    'RequestedContrastAgent': '00321070',
    'StudyComments': '00324000',
    'ReferencedPatientAliasSequence': '00380004',
    'VisitStatusID': '00380008',
    'AdmissionID': '00380010',
    'IssuerOfAdmissionID': '00380011',
    'IssuerOfAdmissionIDSequence': '00380014',
    'RouteOfAdmissions': '00380016',
    'ScheduledAdmissionDate': '0038001A',
    'ScheduledAdmissionTime': '0038001B',
    'ScheduledDischargeDate': '0038001C',
    'ScheduledDischargeTime': '0038001D',
    'ScheduledPatientInstitutionResidence': '0038001E',
    'AdmittingDate': '00380020',
    'AdmittingTime': '00380021',
    'DischargeDate': '00380030',
    'DischargeTime': '00380032',
    'DischargeDiagnosisDescription': '00380040',
    'DischargeDiagnosisCodeSequence': '00380044',
    'SpecialNeeds': '00380050',
    'ServiceEpisodeID': '00380060',
    'IssuerOfServiceEpisodeID': '00380061',
    'ServiceEpisodeDescription': '00380062',
    'IssuerOfServiceEpisodeIDSequence': '00380064',
    'PertinentDocumentsSequence': '00380100',
    'PertinentResourcesSequence': '00380101',
    'ResourceDescription': '00380102',
    'CurrentPatientLocation': '00380300',
    'PatientInstitutionResidence': '00380400',
    'PatientState': '00380500',
    'PatientClinicalTrialParticipationSequence': '00380502',
    'VisitComments': '00384000',
    'WaveformOriginality': '003A0004',
    'NumberOfWaveformChannels': '003A0005',
    'NumberOfWaveformSamples': '003A0010',
    'SamplingFrequency': '003A001A',
    'MultiplexGroupLabel': '003A0020',
    'ChannelDefinitionSequence': '003A0200',
    'WaveformChannelNumber': '003A0202',
    'ChannelLabel': '003A0203',
    'ChannelStatus': '003A0205',
    'ChannelSourceSequence': '003A0208',
    'ChannelSourceModifiersSequence': '003A0209',
    'SourceWaveformSequence': '003A020A',
    'ChannelDerivationDescription': '003A020C',
    'ChannelSensitivity': '003A0210',
    'ChannelSensitivityUnitsSequence': '003A0211',
    'ChannelSensitivityCorrectionFactor': '003A0212',
    'ChannelBaseline': '003A0213',
    'ChannelTimeSkew': '003A0214',
    'ChannelSampleSkew': '003A0215',
    'ChannelOffset': '003A0218',
    'WaveformBitsStored': '003A021A',
    'FilterLowFrequency': '003A0220',
    'FilterHighFrequency': '003A0221',
    'NotchFilterFrequency': '003A0222',
    'NotchFilterBandwidth': '003A0223',
    'WaveformDataDisplayScale': '003A0230',
    'WaveformDisplayBackgroundCIELabValue': '003A0231',
    'WaveformPresentationGroupSequence': '003A0240',
    'PresentationGroupNumber': '003A0241',
    'ChannelDisplaySequence': '003A0242',
    'ChannelRecommendedDisplayCIELabValue': '003A0244',
    'ChannelPosition': '003A0245',
    'DisplayShadingFlag': '003A0246',
    'FractionalChannelDisplayScale': '003A0247',
    'AbsoluteChannelDisplayScale': '003A0248',
    'MultiplexedAudioChannelsDescriptionCodeSequence': '003A0300',
    'ChannelIdentificationCode': '003A0301',
    'ChannelMode': '003A0302',
    'ScheduledStationAETitle': '00400001',
    'ScheduledProcedureStepStartDate': '00400002',
    'ScheduledProcedureStepStartTime': '00400003',
    'ScheduledProcedureStepEndDate': '00400004',
    'ScheduledProcedureStepEndTime': '00400005',
    'ScheduledPerformingPhysicianName': '00400006',
    'ScheduledProcedureStepDescription': '00400007',
    'ScheduledProtocolCodeSequence': '00400008',
    'ScheduledProcedureStepID': '00400009',
    'StageCodeSequence': '0040000A',
    'ScheduledPerformingPhysicianIdentificationSequence': '0040000B',
    'ScheduledStationName': '00400010',
    'ScheduledProcedureStepLocation': '00400011',
    'PreMedication': '00400012',
    'ScheduledProcedureStepStatus': '00400020',
    'OrderPlacerIdentifierSequence': '00400026',
    'OrderFillerIdentifierSequence': '00400027',
    'LocalNamespaceEntityID': '00400031',
    'UniversalEntityID': '00400032',
    'UniversalEntityIDType': '00400033',
    'IdentifierTypeCode': '00400035',
    'AssigningFacilitySequence': '00400036',
    'AssigningJurisdictionCodeSequence': '00400039',
    'AssigningAgencyOrDepartmentCodeSequence': '0040003A',
    'ScheduledProcedureStepSequence': '00400100',
    'ReferencedNonImageCompositeSOPInstanceSequence': '00400220',
    'PerformedStationAETitle': '00400241',
    'PerformedStationName': '00400242',
    'PerformedLocation': '00400243',
    'PerformedProcedureStepStartDate': '00400244',
    'PerformedProcedureStepStartTime': '00400245',
    'PerformedProcedureStepEndDate': '00400250',
    'PerformedProcedureStepEndTime': '00400251',
    'PerformedProcedureStepStatus': '00400252',
    'PerformedProcedureStepID': '00400253',
    'PerformedProcedureStepDescription': '00400254',
    'PerformedProcedureTypeDescription': '00400255',
    'PerformedProtocolCodeSequence': '00400260',
    'PerformedProtocolType': '00400261',
    'ScheduledStepAttributesSequence': '00400270',
    'RequestAttributesSequence': '00400275',
    'CommentsOnThePerformedProcedureStep': '00400280',
    'PerformedProcedureStepDiscontinuationReasonCodeSequence': '00400281',
    'QuantitySequence': '00400293',
    'Quantity': '00400294',
    'MeasuringUnitsSequence': '00400295',
    'BillingItemSequence': '00400296',
    'TotalTimeOfFluoroscopy': '00400300',
    'TotalNumberOfExposures': '00400301',
    'EntranceDose': '00400302',
    'ExposedArea': '00400303',
    'DistanceSourceToEntrance': '00400306',
    'DistanceSourceToSupport': '00400307',
    'ExposureDoseSequence': '0040030E',
    'CommentsOnRadiationDose': '00400310',
    'XRayOutput': '00400312',
    'HalfValueLayer': '00400314',
    'OrganDose': '00400316',
    'OrganExposed': '00400318',
    'BillingProcedureStepSequence': '00400320',
    'FilmConsumptionSequence': '00400321',
    'BillingSuppliesAndDevicesSequence': '00400324',
    'ReferencedProcedureStepSequence': '00400330',
    'PerformedSeriesSequence': '00400340',
    'CommentsOnTheScheduledProcedureStep': '00400400',
    'ProtocolContextSequence': '00400440',
    'ContentItemModifierSequence': '00400441',
    'ScheduledSpecimenSequence': '00400500',
    'SpecimenAccessionNumber': '0040050A',
    'ContainerIdentifier': '00400512',
    'IssuerOfTheContainerIdentifierSequence': '00400513',
    'AlternateContainerIdentifierSequence': '00400515',
    'ContainerTypeCodeSequence': '00400518',
    'ContainerDescription': '0040051A',
    'ContainerComponentSequence': '00400520',
    'SpecimenSequence': '00400550',
    'SpecimenIdentifier': '00400551',
    'SpecimenDescriptionSequenceTrial': '00400552',
    'SpecimenDescriptionTrial': '00400553',
    'SpecimenUID': '00400554',
    'AcquisitionContextSequence': '00400555',
    'AcquisitionContextDescription': '00400556',
    'SpecimenDescriptionSequence': '00400560',
    'IssuerOfTheSpecimenIdentifierSequence': '00400562',
    'SpecimenTypeCodeSequence': '0040059A',
    'SpecimenShortDescription': '00400600',
    'SpecimenDetailedDescription': '00400602',
    'SpecimenPreparationSequence': '00400610',
    'SpecimenPreparationStepContentItemSequence': '00400612',
    'SpecimenLocalizationContentItemSequence': '00400620',
    'SlideIdentifier': '004006FA',
    'WholeSlideMicroscopyImageFrameTypeSequence': '00400710',
    'ImageCenterPointCoordinatesSequence': '0040071A',
    'XOffsetInSlideCoordinateSystem': '0040072A',
    'YOffsetInSlideCoordinateSystem': '0040073A',
    'ZOffsetInSlideCoordinateSystem': '0040074A',
    'PixelSpacingSequence': '004008D8',
    'CoordinateSystemAxisCodeSequence': '004008DA',
    'MeasurementUnitsCodeSequence': '004008EA',
    'VitalStainCodeSequenceTrial': '004009F8',
    'RequestedProcedureID': '00401001',
    'ReasonForTheRequestedProcedure': '00401002',
    'RequestedProcedurePriority': '00401003',
    'PatientTransportArrangements': '00401004',
    'RequestedProcedureLocation': '00401005',
    'PlacerOrderNumberProcedure': '00401006',
    'FillerOrderNumberProcedure': '00401007',
    'ConfidentialityCode': '00401008',
    'ReportingPriority': '00401009',
    'ReasonForRequestedProcedureCodeSequence': '0040100A',
    'NamesOfIntendedRecipientsOfResults': '00401010',
    'IntendedRecipientsOfResultsIdentificationSequence': '00401011',
    'ReasonForPerformedProcedureCodeSequence': '00401012',
    'RequestedProcedureDescriptionTrial': '00401060',
    'PersonIdentificationCodeSequence': '00401101',
    'PersonAddress': '00401102',
    'PersonTelephoneNumbers': '00401103',
    'PersonTelecomInformation': '00401104',
    'RequestedProcedureComments': '00401400',
    'ReasonForTheImagingServiceRequest': '00402001',
    'IssueDateOfImagingServiceRequest': '00402004',
    'IssueTimeOfImagingServiceRequest': '00402005',
    'PlacerOrderNumberImagingServiceRequestRetired': '00402006',
    'FillerOrderNumberImagingServiceRequestRetired': '00402007',
    'OrderEnteredBy': '00402008',
    'OrderEntererLocation': '00402009',
    'OrderCallbackPhoneNumber': '00402010',
    'OrderCallbackTelecomInformation': '00402011',
    'PlacerOrderNumberImagingServiceRequest': '00402016',
    'FillerOrderNumberImagingServiceRequest': '00402017',
    'ImagingServiceRequestComments': '00402400',
    'ConfidentialityConstraintOnPatientDataDescription': '00403001',
    'GeneralPurposeScheduledProcedureStepStatus': '00404001',
    'GeneralPurposePerformedProcedureStepStatus': '00404002',
    'GeneralPurposeScheduledProcedureStepPriority': '00404003',
    'ScheduledProcessingApplicationsCodeSequence': '00404004',
    'ScheduledProcedureStepStartDateTime': '00404005',
    'MultipleCopiesFlag': '00404006',
    'PerformedProcessingApplicationsCodeSequence': '00404007',
    'ScheduledProcedureStepExpirationDateTime': '00404008',
    'HumanPerformerCodeSequence': '00404009',
    'ScheduledProcedureStepModificationDateTime': '00404010',
    'ExpectedCompletionDateTime': '00404011',
    'ResultingGeneralPurposePerformedProcedureStepsSequence': '00404015',
    'ReferencedGeneralPurposeScheduledProcedureStepSequence': '00404016',
    'ScheduledWorkitemCodeSequence': '00404018',
    'PerformedWorkitemCodeSequence': '00404019',
    'InputAvailabilityFlag': '00404020',
    'InputInformationSequence': '00404021',
    'RelevantInformationSequence': '00404022',
    'ReferencedGeneralPurposeScheduledProcedureStepTransactionUID': '00404023',
    'ScheduledStationNameCodeSequence': '00404025',
    'ScheduledStationClassCodeSequence': '00404026',
    'ScheduledStationGeographicLocationCodeSequence': '00404027',
    'PerformedStationNameCodeSequence': '00404028',
    'PerformedStationClassCodeSequence': '00404029',
    'PerformedStationGeographicLocationCodeSequence': '00404030',
    'RequestedSubsequentWorkitemCodeSequence': '00404031',
    'NonDICOMOutputCodeSequence': '00404032',
    'OutputInformationSequence': '00404033',
    'ScheduledHumanPerformersSequence': '00404034',
    'ActualHumanPerformersSequence': '00404035',
    'HumanPerformerOrganization': '00404036',
    'HumanPerformerName': '00404037',
    'RawDataHandling': '00404040',
    'InputReadinessState': '00404041',
    'PerformedProcedureStepStartDateTime': '00404050',
    'PerformedProcedureStepEndDateTime': '00404051',
    'ProcedureStepCancellationDateTime': '00404052',
    'OutputDestinationSequence': '00404070',
    'DICOMStorageSequence': '00404071',
    'STOWRSStorageSequence': '00404072',
    'StorageURL': '00404073',
    'XDSStorageSequence': '00404074',
    'EntranceDoseInmGy': '00408302',
    'EntranceDoseDerivation': '00408303',
    'ParametricMapFrameTypeSequence': '00409092',
    'ReferencedImageRealWorldValueMappingSequence': '00409094',
    'RealWorldValueMappingSequence': '00409096',
    'PixelValueMappingCodeSequence': '00409098',
    'LUTLabel': '00409210',
    'RealWorldValueLastValueMapped': '00409211',
    'RealWorldValueLUTData': '00409212',
    'DoubleFloatRealWorldValueLastValueMapped': '00409213',
    'DoubleFloatRealWorldValueFirstValueMapped': '00409214',
    'RealWorldValueFirstValueMapped': '00409216',
    'QuantityDefinitionSequence': '00409220',
    'RealWorldValueIntercept': '00409224',
    'RealWorldValueSlope': '00409225',
    'FindingsFlagTrial': '0040A007',
    'RelationshipType': '0040A010',
    'FindingsSequenceTrial': '0040A020',
    'FindingsGroupUIDTrial': '0040A021',
    'ReferencedFindingsGroupUIDTrial': '0040A022',
    'FindingsGroupRecordingDateTrial': '0040A023',
    'FindingsGroupRecordingTimeTrial': '0040A024',
    'FindingsSourceCategoryCodeSequenceTrial': '0040A026',
    'VerifyingOrganization': '0040A027',
    'DocumentingOrganizationIdentifierCodeSequenceTrial': '0040A028',
    'VerificationDateTime': '0040A030',
    'ObservationDateTime': '0040A032',
    'ValueType': '0040A040',
    'ConceptNameCodeSequence': '0040A043',
    'MeasurementPrecisionDescriptionTrial': '0040A047',
    'ContinuityOfContent': '0040A050',
    'UrgencyOrPriorityAlertsTrial': '0040A057',
    'SequencingIndicatorTrial': '0040A060',
    'DocumentIdentifierCodeSequenceTrial': '0040A066',
    'DocumentAuthorTrial': '0040A067',
    'DocumentAuthorIdentifierCodeSequenceTrial': '0040A068',
    'IdentifierCodeSequenceTrial': '0040A070',
    'VerifyingObserverSequence': '0040A073',
    'ObjectBinaryIdentifierTrial': '0040A074',
    'VerifyingObserverName': '0040A075',
    'DocumentingObserverIdentifierCodeSequenceTrial': '0040A076',
    'AuthorObserverSequence': '0040A078',
    'ParticipantSequence': '0040A07A',
    'CustodialOrganizationSequence': '0040A07C',
    'ParticipationType': '0040A080',
    'ParticipationDateTime': '0040A082',
    'ObserverType': '0040A084',
    'ProcedureIdentifierCodeSequenceTrial': '0040A085',
    'VerifyingObserverIdentificationCodeSequence': '0040A088',
    'ObjectDirectoryBinaryIdentifierTrial': '0040A089',
    'EquivalentCDADocumentSequence': '0040A090',
    'ReferencedWaveformChannels': '0040A0B0',
    'DateOfDocumentOrVerbalTransactionTrial': '0040A110',
    'TimeOfDocumentCreationOrVerbalTransactionTrial': '0040A112',
    'DateTime': '0040A120',
    'Date': '0040A121',
    'Time': '0040A122',
    'PersonName': '0040A123',
    'UID': '0040A124',
    'ReportStatusIDTrial': '0040A125',
    'TemporalRangeType': '0040A130',
    'ReferencedSamplePositions': '0040A132',
    'ReferencedFrameNumbers': '0040A136',
    'ReferencedTimeOffsets': '0040A138',
    'ReferencedDateTime': '0040A13A',
    'TextValue': '0040A160',
    'FloatingPointValue': '0040A161',
    'RationalNumeratorValue': '0040A162',
    'RationalDenominatorValue': '0040A163',
    'ObservationCategoryCodeSequenceTrial': '0040A167',
    'ConceptCodeSequence': '0040A168',
    'BibliographicCitationTrial': '0040A16A',
    'PurposeOfReferenceCodeSequence': '0040A170',
    'ObservationUID': '0040A171',
    'ReferencedObservationUIDTrial': '0040A172',
    'ReferencedObservationClassTrial': '0040A173',
    'ReferencedObjectObservationClassTrial': '0040A174',
    'AnnotationGroupNumber': '0040A180',
    'ObservationDateTrial': '0040A192',
    'ObservationTimeTrial': '0040A193',
    'MeasurementAutomationTrial': '0040A194',
    'ModifierCodeSequence': '0040A195',
    'IdentificationDescriptionTrial': '0040A224',
    'CoordinatesSetGeometricTypeTrial': '0040A290',
    'AlgorithmCodeSequenceTrial': '0040A296',
    'AlgorithmDescriptionTrial': '0040A297',
    'PixelCoordinatesSetTrial': '0040A29A',
    'MeasuredValueSequence': '0040A300',
    'NumericValueQualifierCodeSequence': '0040A301',
    'CurrentObserverTrial': '0040A307',
    'NumericValue': '0040A30A',
    'ReferencedAccessionSequenceTrial': '0040A313',
    'ReportStatusCommentTrial': '0040A33A',
    'ProcedureContextSequenceTrial': '0040A340',
    'VerbalSourceTrial': '0040A352',
    'AddressTrial': '0040A353',
    'TelephoneNumberTrial': '0040A354',
    'VerbalSourceIdentifierCodeSequenceTrial': '0040A358',
    'PredecessorDocumentsSequence': '0040A360',
    'ReferencedRequestSequence': '0040A370',
    'PerformedProcedureCodeSequence': '0040A372',
    'CurrentRequestedProcedureEvidenceSequence': '0040A375',
    'ReportDetailSequenceTrial': '0040A380',
    'PertinentOtherEvidenceSequence': '0040A385',
    '0040A390': ('HL7StructuredDocumentReferenceSequence'),
    'ObservationSubjectUIDTrial': '0040A402',
    'ObservationSubjectClassTrial': '0040A403',
    'ObservationSubjectTypeCodeSequenceTrial': '0040A404',
    'CompletionFlag': '0040A491',
    'CompletionFlagDescription': '0040A492',
    'VerificationFlag': '0040A493',
    'ArchiveRequested': '0040A494',
    'PreliminaryFlag': '0040A496',
    'ContentTemplateSequence': '0040A504',
    'IdenticalDocumentsSequence': '0040A525',
    'ObservationSubjectContextFlagTrial': '0040A600',
    'ObserverContextFlagTrial': '0040A601',
    'ProcedureContextFlagTrial': '0040A603',
    'ContentSequence': '0040A730',
    'RelationshipSequenceTrial': '0040A731',
    'RelationshipTypeCodeSequenceTrial': '0040A732',
    'LanguageCodeSequenceTrial': '0040A744',
    'UniformResourceLocatorTrial': '0040A992',
    'WaveformAnnotationSequence': '0040B020',
    'TemplateIdentifier': '0040DB00',
    'TemplateVersion': '0040DB06',
    'TemplateLocalVersion': '0040DB07',
    'TemplateExtensionFlag': '0040DB0B',
    'TemplateExtensionOrganizationUID': '0040DB0C',
    'TemplateExtensionCreatorUID': '0040DB0D',
    'ReferencedContentItemIdentifier': '0040DB73',
    '0040E001': ('HL7InstanceIdentifier'),
    '0040E004': ('HL7DocumentEffectiveTime'),
    '0040E006': ('HL7DocumentTypeCodeSequence'),
    'DocumentClassCodeSequence': '0040E008',
    'RetrieveURI': '0040E010',
    'RetrieveLocationUID': '0040E011',
    'TypeOfInstances': '0040E020',
    'DICOMRetrievalSequence': '0040E021',
    'DICOMMediaRetrievalSequence': '0040E022',
    'WADORetrievalSequence': '0040E023',
    'XDSRetrievalSequence': '0040E024',
    'WADORSRetrievalSequence': '0040E025',
    'RepositoryUniqueID': '0040E030',
    'HomeCommunityID': '0040E031',
    'DocumentTitle': '00420010',
    'EncapsulatedDocument': '00420011',
    'MIMETypeOfEncapsulatedDocument': '00420012',
    'SourceInstanceSequence': '00420013',
    'ListOfMIMETypes': '00420014',
    'ProductPackageIdentifier': '00440001',
    'SubstanceAdministrationApproval': '00440002',
    'ApprovalStatusFurtherDescription': '00440003',
    'ApprovalStatusDateTime': '00440004',
    'ProductTypeCodeSequence': '00440007',
    'ProductName': '00440008',
    'ProductDescription': '00440009',
    'ProductLotIdentifier': '0044000A',
    'ProductExpirationDateTime': '0044000B',
    'SubstanceAdministrationDateTime': '00440010',
    'SubstanceAdministrationNotes': '00440011',
    'SubstanceAdministrationDeviceID': '00440012',
    'ProductParameterSequence': '00440013',
    'SubstanceAdministrationParameterSequence': '00440019',
    'ApprovalSequence': '00440100',
    'AssertionCodeSequence': '00440101',
    'AssertionUID': '00440102',
    'AsserterIdentificationSequence': '00440103',
    'AssertionDateTime': '00440104',
    'AssertionExpirationDateTime': '00440105',
    'AssertionComments': '00440106',
    'RelatedAssertionSequence': '00440107',
    'ReferencedAssertionUID': '00440108',
    'ApprovalSubjectSequence': '00440109',
    'OrganizationalRoleCodeSequence': '0044010A',
    'LensDescription': '00460012',
    'RightLensSequence': '00460014',
    'LeftLensSequence': '00460015',
    'UnspecifiedLateralityLensSequence': '00460016',
    'CylinderSequence': '00460018',
    'PrismSequence': '00460028',
    'HorizontalPrismPower': '00460030',
    'HorizontalPrismBase': '00460032',
    'VerticalPrismPower': '00460034',
    'VerticalPrismBase': '00460036',
    'LensSegmentType': '00460038',
    'OpticalTransmittance': '00460040',
    'ChannelWidth': '00460042',
    'PupilSize': '00460044',
    'CornealSize': '00460046',
    'AutorefractionRightEyeSequence': '00460050',
    'AutorefractionLeftEyeSequence': '00460052',
    'DistancePupillaryDistance': '00460060',
    'NearPupillaryDistance': '00460062',
    'IntermediatePupillaryDistance': '00460063',
    'OtherPupillaryDistance': '00460064',
    'KeratometryRightEyeSequence': '00460070',
    'KeratometryLeftEyeSequence': '00460071',
    'SteepKeratometricAxisSequence': '00460074',
    'RadiusOfCurvature': '00460075',
    'KeratometricPower': '00460076',
    'KeratometricAxis': '00460077',
    'FlatKeratometricAxisSequence': '00460080',
    'BackgroundColor': '00460092',
    'Optotype': '00460094',
    'OptotypePresentation': '00460095',
    'SubjectiveRefractionRightEyeSequence': '00460097',
    'SubjectiveRefractionLeftEyeSequence': '00460098',
    'AddNearSequence': '00460100',
    'AddIntermediateSequence': '00460101',
    'AddOtherSequence': '00460102',
    'AddPower': '00460104',
    'ViewingDistance': '00460106',
    'VisualAcuityTypeCodeSequence': '00460121',
    'VisualAcuityRightEyeSequence': '00460122',
    'VisualAcuityLeftEyeSequence': '00460123',
    'VisualAcuityBothEyesOpenSequence': '00460124',
    'ViewingDistanceType': '00460125',
    'VisualAcuityModifiers': '00460135',
    'DecimalVisualAcuity': '00460137',
    'OptotypeDetailedDefinition': '00460139',
    'ReferencedRefractiveMeasurementsSequence': '00460145',
    'SpherePower': '00460146',
    'CylinderPower': '00460147',
    'CornealTopographySurface': '00460201',
    'CornealVertexLocation': '00460202',
    'PupilCentroidXCoordinate': '00460203',
    'PupilCentroidYCoordinate': '00460204',
    'EquivalentPupilRadius': '00460205',
    'CornealTopographyMapTypeCodeSequence': '00460207',
    'VerticesOfTheOutlineOfPupil': '00460208',
    'CornealTopographyMappingNormalsSequence': '00460210',
    'MaximumCornealCurvatureSequence': '00460211',
    'MaximumCornealCurvature': '00460212',
    'MaximumCornealCurvatureLocation': '00460213',
    'MinimumKeratometricSequence': '00460215',
    'SimulatedKeratometricCylinderSequence': '00460218',
    'AverageCornealPower': '00460220',
    'CornealISValue': '00460224',
    'AnalyzedArea': '00460227',
    'SurfaceRegularityIndex': '00460230',
    'SurfaceAsymmetryIndex': '00460232',
    'CornealEccentricityIndex': '00460234',
    'KeratoconusPredictionIndex': '00460236',
    'DecimalPotentialVisualAcuity': '00460238',
    'CornealTopographyMapQualityEvaluation': '00460242',
    'SourceImageCornealProcessedDataSequence': '00460244',
    'CornealPointLocation': '00460247',
    'CornealPointEstimated': '00460248',
    'AxialPower': '00460249',
    'TangentialPower': '00460250',
    'RefractivePower': '00460251',
    'RelativeElevation': '00460252',
    'CornealWavefront': '00460253',
    'ImagedVolumeWidth': '00480001',
    'ImagedVolumeHeight': '00480002',
    'ImagedVolumeDepth': '00480003',
    'TotalPixelMatrixColumns': '00480006',
    'TotalPixelMatrixRows': '00480007',
    'TotalPixelMatrixOriginSequence': '00480008',
    'SpecimenLabelInImage': '00480010',
    'FocusMethod': '00480011',
    'ExtendedDepthOfField': '00480012',
    'NumberOfFocalPlanes': '00480013',
    'DistanceBetweenFocalPlanes': '00480014',
    'RecommendedAbsentPixelCIELabValue': '00480015',
    'IlluminatorTypeCodeSequence': '00480100',
    'ImageOrientationSlide': '00480102',
    'OpticalPathSequence': '00480105',
    'OpticalPathIdentifier': '00480106',
    'OpticalPathDescription': '00480107',
    'IlluminationColorCodeSequence': '00480108',
    'SpecimenReferenceSequence': '00480110',
    'CondenserLensPower': '00480111',
    'ObjectiveLensPower': '00480112',
    'ObjectiveLensNumericalAperture': '00480113',
    'PaletteColorLookupTableSequence': '00480120',
    'ReferencedImageNavigationSequence': '00480200',
    'TopLeftHandCornerOfLocalizerArea': '00480201',
    'BottomRightHandCornerOfLocalizerArea': '00480202',
    'OpticalPathIdentificationSequence': '00480207',
    'PlanePositionSlideSequence': '0048021A',
    'ColumnPositionInTotalImagePixelMatrix': '0048021E',
    'RowPositionInTotalImagePixelMatrix': '0048021F',
    'PixelOriginInterpretation': '00480301',
    'NumberOfOpticalPaths': '00480302',
    'TotalPixelMatrixFocalPlanes': '00480303',
    'CalibrationImage': '00500004',
    'DeviceSequence': '00500010',
    'ContainerComponentTypeCodeSequence': '00500012',
    'ContainerComponentThickness': '00500013',
    'DeviceLength': '00500014',
    'ContainerComponentWidth': '00500015',
    'DeviceDiameter': '00500016',
    'DeviceDiameterUnits': '00500017',
    'DeviceVolume': '00500018',
    'InterMarkerDistance': '00500019',
    'ContainerComponentMaterial': '0050001A',
    'ContainerComponentID': '0050001B',
    'ContainerComponentLength': '0050001C',
    'ContainerComponentDiameter': '0050001D',
    'ContainerComponentDescription': '0050001E',
    'DeviceDescription': '00500020',
    'ContrastBolusIngredientPercentByVolume': '00520001',
    'OCTFocalDistance': '00520002',
    'BeamSpotSize': '00520003',
    'EffectiveRefractiveIndex': '00520004',
    'OCTAcquisitionDomain': '00520006',
    'OCTOpticalCenterWavelength': '00520007',
    'AxialResolution': '00520008',
    'RangingDepth': '00520009',
    'ALineRate': '00520011',
    'ALinesPerFrame': '00520012',
    'CatheterRotationalRate': '00520013',
    'ALinePixelSpacing': '00520014',
    'ModeOfPercutaneousAccessSequence': '00520016',
    'IntravascularOCTFrameTypeSequence': '00520025',
    'OCTZOffsetApplied': '00520026',
    'IntravascularFrameContentSequence': '00520027',
    'IntravascularLongitudinalDistance': '00520028',
    'IntravascularOCTFrameContentSequence': '00520029',
    'OCTZOffsetCorrection': '00520030',
    'CatheterDirectionOfRotation': '00520031',
    'SeamLineLocation': '00520033',
    'FirstALineLocation': '00520034',
    'SeamLineIndex': '00520036',
    'NumberOfPaddedALines': '00520038',
    'InterpolationType': '00520039',
    'RefractiveIndexApplied': '0052003A',
    'EnergyWindowVector': '00540010',
    'NumberOfEnergyWindows': '00540011',
    'EnergyWindowInformationSequence': '00540012',
    'EnergyWindowRangeSequence': '00540013',
    'EnergyWindowLowerLimit': '00540014',
    'EnergyWindowUpperLimit': '00540015',
    'RadiopharmaceuticalInformationSequence': '00540016',
    'ResidualSyringeCounts': '00540017',
    'EnergyWindowName': '00540018',
    'DetectorVector': '00540020',
    'NumberOfDetectors': '00540021',
    'DetectorInformationSequence': '00540022',
    'PhaseVector': '00540030',
    'NumberOfPhases': '00540031',
    'PhaseInformationSequence': '00540032',
    'NumberOfFramesInPhase': '00540033',
    'PhaseDelay': '00540036',
    'PauseBetweenFrames': '00540038',
    'PhaseDescription': '00540039',
    'RotationVector': '00540050',
    'NumberOfRotations': '00540051',
    'RotationInformationSequence': '00540052',
    'NumberOfFramesInRotation': '00540053',
    'RRIntervalVector': '00540060',
    'NumberOfRRIntervals': '00540061',
    'GatedInformationSequence': '00540062',
    'DataInformationSequence': '00540063',
    'TimeSlotVector': '00540070',
    'NumberOfTimeSlots': '00540071',
    'TimeSlotInformationSequence': '00540072',
    'TimeSlotTime': '00540073',
    'SliceVector': '00540080',
    'NumberOfSlices': '00540081',
    'AngularViewVector': '00540090',
    'TimeSliceVector': '00540100',
    'NumberOfTimeSlices': '00540101',
    'StartAngle': '00540200',
    'TypeOfDetectorMotion': '00540202',
    'TriggerVector': '00540210',
    'NumberOfTriggersInPhase': '00540211',
    'ViewCodeSequence': '00540220',
    'ViewModifierCodeSequence': '00540222',
    'RadionuclideCodeSequence': '00540300',
    'AdministrationRouteCodeSequence': '00540302',
    'RadiopharmaceuticalCodeSequence': '00540304',
    'CalibrationDataSequence': '00540306',
    'EnergyWindowNumber': '00540308',
    'ImageID': '00540400',
    'PatientOrientationCodeSequence': '00540410',
    'PatientOrientationModifierCodeSequence': '00540412',
    'PatientGantryRelationshipCodeSequence': '00540414',
    'SliceProgressionDirection': '00540500',
    'ScanProgressionDirection': '00540501',
    'SeriesType': '00541000',
    'Units': '00541001',
    'CountsSource': '00541002',
    'ReprojectionMethod': '00541004',
    'SUVType': '00541006',
    'RandomsCorrectionMethod': '00541100',
    'AttenuationCorrectionMethod': '00541101',
    'DecayCorrection': '00541102',
    'ReconstructionMethod': '00541103',
    'DetectorLinesOfResponseUsed': '00541104',
    'ScatterCorrectionMethod': '00541105',
    'AxialAcceptance': '00541200',
    'AxialMash': '00541201',
    'TransverseMash': '00541202',
    'DetectorElementSize': '00541203',
    'CoincidenceWindowWidth': '00541210',
    'SecondaryCountsType': '00541220',
    'FrameReferenceTime': '00541300',
    'PrimaryPromptsCountsAccumulated': '00541310',
    'SecondaryCountsAccumulated': '00541311',
    'SliceSensitivityFactor': '00541320',
    'DecayFactor': '00541321',
    'DoseCalibrationFactor': '00541322',
    'ScatterFractionFactor': '00541323',
    'DeadTimeFactor': '00541324',
    'ImageIndex': '00541330',
    'CountsIncluded': '00541400',
    'DeadTimeCorrectionFlag': '00541401',
    'HistogramSequence': '00603000',
    'HistogramNumberOfBins': '00603002',
    'HistogramFirstBinValue': '00603004',
    'HistogramLastBinValue': '00603006',
    'HistogramBinWidth': '00603008',
    'HistogramExplanation': '00603010',
    'HistogramData': '00603020',
    'SegmentationType': '00620001',
    'SegmentSequence': '00620002',
    'SegmentedPropertyCategoryCodeSequence': '00620003',
    'SegmentNumber': '00620004',
    'SegmentLabel': '00620005',
    'SegmentDescription': '00620006',
    'SegmentationAlgorithmIdentificationSequence': '00620007',
    'SegmentAlgorithmType': '00620008',
    'SegmentAlgorithmName': '00620009',
    'SegmentIdentificationSequence': '0062000A',
    'ReferencedSegmentNumber': '0062000B',
    'RecommendedDisplayGrayscaleValue': '0062000C',
    'RecommendedDisplayCIELabValue': '0062000D',
    'MaximumFractionalValue': '0062000E',
    'SegmentedPropertyTypeCodeSequence': '0062000F',
    'SegmentationFractionalType': '00620010',
    'SegmentedPropertyTypeModifierCodeSequence': '00620011',
    'UsedSegmentsSequence': '00620012',
    'TrackingID': '00620020',
    'TrackingUID': '00620021',
    'DeformableRegistrationSequence': '00640002',
    'SourceFrameOfReferenceUID': '00640003',
    'DeformableRegistrationGridSequence': '00640005',
    'GridDimensions': '00640007',
    'GridResolution': '00640008',
    'VectorGridData': '00640009',
    'PreDeformationMatrixRegistrationSequence': '0064000F',
    'PostDeformationMatrixRegistrationSequence': '00640010',
    'NumberOfSurfaces': '00660001',
    'SurfaceSequence': '00660002',
    'SurfaceNumber': '00660003',
    'SurfaceComments': '00660004',
    'SurfaceProcessing': '00660009',
    'SurfaceProcessingRatio': '0066000A',
    'SurfaceProcessingDescription': '0066000B',
    'RecommendedPresentationOpacity': '0066000C',
    'RecommendedPresentationType': '0066000D',
    'FiniteVolume': '0066000E',
    'Manifold': '00660010',
    'SurfacePointsSequence': '00660011',
    'SurfacePointsNormalsSequence': '00660012',
    'SurfaceMeshPrimitivesSequence': '00660013',
    'NumberOfSurfacePoints': '00660015',
    'PointCoordinatesData': '00660016',
    'PointPositionAccuracy': '00660017',
    'MeanPointDistance': '00660018',
    'MaximumPointDistance': '00660019',
    'PointsBoundingBoxCoordinates': '0066001A',
    'AxisOfRotation': '0066001B',
    'CenterOfRotation': '0066001C',
    'NumberOfVectors': '0066001E',
    'VectorDimensionality': '0066001F',
    'VectorAccuracy': '00660020',
    'VectorCoordinateData': '00660021',
    'TrianglePointIndexList': '00660023',
    'EdgePointIndexList': '00660024',
    'VertexPointIndexList': '00660025',
    'TriangleStripSequence': '00660026',
    'TriangleFanSequence': '00660027',
    'LineSequence': '00660028',
    'PrimitivePointIndexList': '00660029',
    'SurfaceCount': '0066002A',
    'ReferencedSurfaceSequence': '0066002B',
    'ReferencedSurfaceNumber': '0066002C',
    'SegmentSurfaceGenerationAlgorithmIdentificationSequence': '0066002D',
    'SegmentSurfaceSourceInstanceSequence': '0066002E',
    'AlgorithmFamilyCodeSequence': '0066002F',
    'AlgorithmNameCodeSequence': '00660030',
    'AlgorithmVersion': '00660031',
    'AlgorithmParameters': '00660032',
    'FacetSequence': '00660034',
    'SurfaceProcessingAlgorithmIdentificationSequence': '00660035',
    'AlgorithmName': '00660036',
    'RecommendedPointRadius': '00660037',
    'RecommendedLineThickness': '00660038',
    'LongPrimitivePointIndexList': '00660040',
    'LongTrianglePointIndexList': '00660041',
    'LongEdgePointIndexList': '00660042',
    'LongVertexPointIndexList': '00660043',
    'TrackSetSequence': '00660101',
    'TrackSequence': '00660102',
    'RecommendedDisplayCIELabValueList': '00660103',
    'TrackingAlgorithmIdentificationSequence': '00660104',
    'TrackSetNumber': '00660105',
    'TrackSetLabel': '00660106',
    'TrackSetDescription': '00660107',
    'TrackSetAnatomicalTypeCodeSequence': '00660108',
    'MeasurementsSequence': '00660121',
    'TrackSetStatisticsSequence': '00660124',
    'FloatingPointValues': '00660125',
    'TrackPointIndexList': '00660129',
    'TrackStatisticsSequence': '00660130',
    'MeasurementValuesSequence': '00660132',
    'DiffusionAcquisitionCodeSequence': '00660133',
    'DiffusionModelCodeSequence': '00660134',
    'ImplantSize': '00686210',
    'ImplantTemplateVersion': '00686221',
    'ReplacedImplantTemplateSequence': '00686222',
    'ImplantType': '00686223',
    'DerivationImplantTemplateSequence': '00686224',
    'OriginalImplantTemplateSequence': '00686225',
    'EffectiveDateTime': '00686226',
    'ImplantTargetAnatomySequence': '00686230',
    'InformationFromManufacturerSequence': '00686260',
    'NotificationFromManufacturerSequence': '00686265',
    'InformationIssueDateTime': '00686270',
    'InformationSummary': '00686280',
    'ImplantRegulatoryDisapprovalCodeSequence': '006862A0',
    'OverallTemplateSpatialTolerance': '006862A5',
    'HPGLDocumentSequence': '006862C0',
    'HPGLDocumentID': '006862D0',
    'HPGLDocumentLabel': '006862D5',
    'ViewOrientationCodeSequence': '006862E0',
    'ViewOrientationModifierCodeSequence': '006862F0',
    'HPGLDocumentScaling': '006862F2',
    'HPGLDocument': '00686300',
    'HPGLContourPenNumber': '00686310',
    'HPGLPenSequence': '00686320',
    'HPGLPenNumber': '00686330',
    'HPGLPenLabel': '00686340',
    'HPGLPenDescription': '00686345',
    'RecommendedRotationPoint': '00686346',
    'BoundingRectangle': '00686347',
    '00686350': ('ImplantTemplate3DModelSurfaceNumber'),
    'SurfaceModelDescriptionSequence': '00686360',
    'SurfaceModelLabel': '00686380',
    'SurfaceModelScalingFactor': '00686390',
    'MaterialsCodeSequence': '006863A0',
    'CoatingMaterialsCodeSequence': '006863A4',
    'ImplantTypeCodeSequence': '006863A8',
    'FixationMethodCodeSequence': '006863AC',
    'MatingFeatureSetsSequence': '006863B0',
    'MatingFeatureSetID': '006863C0',
    'MatingFeatureSetLabel': '006863D0',
    'MatingFeatureSequence': '006863E0',
    'MatingFeatureID': '006863F0',
    'MatingFeatureDegreeOfFreedomSequence': '00686400',
    'DegreeOfFreedomID': '00686410',
    'DegreeOfFreedomType': '00686420',
    'TwoDMatingFeatureCoordinatesSequence': '00686430',
    'ReferencedHPGLDocumentID': '00686440',
    'TwoDMatingPoint': '00686450',
    'TwoDMatingAxes': '00686460',
    'TwoDDegreeOfFreedomSequence': '00686470',
    'ThreeDDegreeOfFreedomAxis': '00686490',
    'RangeOfFreedom': '006864A0',
    'ThreeDMatingPoint': '006864C0',
    'ThreeDMatingAxes': '006864D0',
    'TwoDDegreeOfFreedomAxis': '006864F0',
    'PlanningLandmarkPointSequence': '00686500',
    'PlanningLandmarkLineSequence': '00686510',
    'PlanningLandmarkPlaneSequence': '00686520',
    'PlanningLandmarkID': '00686530',
    'PlanningLandmarkDescription': '00686540',
    'PlanningLandmarkIdentificationCodeSequence': '00686545',
    'TwoDPointCoordinatesSequence': '00686550',
    'TwoDPointCoordinates': '00686560',
    'ThreeDPointCoordinates': '00686590',
    'TwoDLineCoordinatesSequence': '006865A0',
    'TwoDLineCoordinates': '006865B0',
    'ThreeDLineCoordinates': '006865D0',
    'TwoDPlaneCoordinatesSequence': '006865E0',
    'TwoDPlaneIntersection': '006865F0',
    'ThreeDPlaneOrigin': '00686610',
    'ThreeDPlaneNormal': '00686620',
    'ModelModification': '00687001',
    'ModelMirroring': '00687002',
    'ModelUsageCodeSequence': '00687003',
    'GraphicAnnotationSequence': '00700001',
    'GraphicLayer': '00700002',
    'BoundingBoxAnnotationUnits': '00700003',
    'AnchorPointAnnotationUnits': '00700004',
    'GraphicAnnotationUnits': '00700005',
    'UnformattedTextValue': '00700006',
    'TextObjectSequence': '00700008',
    'GraphicObjectSequence': '00700009',
    'BoundingBoxTopLeftHandCorner': '00700010',
    'BoundingBoxBottomRightHandCorner': '00700011',
    'BoundingBoxTextHorizontalJustification': '00700012',
    'AnchorPoint': '00700014',
    'AnchorPointVisibility': '00700015',
    'GraphicDimensions': '00700020',
    'NumberOfGraphicPoints': '00700021',
    'GraphicData': '00700022',
    'GraphicType': '00700023',
    'GraphicFilled': '00700024',
    'ImageRotationRetired': '00700040',
    'ImageHorizontalFlip': '00700041',
    'ImageRotation': '00700042',
    'DisplayedAreaTopLeftHandCornerTrial': '00700050',
    'DisplayedAreaBottomRightHandCornerTrial': '00700051',
    'DisplayedAreaTopLeftHandCorner': '00700052',
    'DisplayedAreaBottomRightHandCorner': '00700053',
    'DisplayedAreaSelectionSequence': '0070005A',
    'GraphicLayerSequence': '00700060',
    'GraphicLayerOrder': '00700062',
    'GraphicLayerRecommendedDisplayGrayscaleValue': '00700066',
    'GraphicLayerRecommendedDisplayRGBValue': '00700067',
    'GraphicLayerDescription': '00700068',
    'ContentLabel': '00700080',
    'ContentDescription': '00700081',
    'PresentationCreationDate': '00700082',
    'PresentationCreationTime': '00700083',
    'ContentCreatorName': '00700084',
    'ContentCreatorIdentificationCodeSequence': '00700086',
    'AlternateContentDescriptionSequence': '00700087',
    'PresentationSizeMode': '00700100',
    'PresentationPixelSpacing': '00700101',
    'PresentationPixelAspectRatio': '00700102',
    'PresentationPixelMagnificationRatio': '00700103',
    'GraphicGroupLabel': '00700207',
    'GraphicGroupDescription': '00700208',
    'CompoundGraphicSequence': '00700209',
    'CompoundGraphicInstanceID': '00700226',
    'FontName': '00700227',
    'FontNameType': '00700228',
    'CSSFontName': '00700229',
    'RotationAngle': '00700230',
    'TextStyleSequence': '00700231',
    'LineStyleSequence': '00700232',
    'FillStyleSequence': '00700233',
    'GraphicGroupSequence': '00700234',
    'TextColorCIELabValue': '00700241',
    'HorizontalAlignment': '00700242',
    'VerticalAlignment': '00700243',
    'ShadowStyle': '00700244',
    'ShadowOffsetX': '00700245',
    'ShadowOffsetY': '00700246',
    'ShadowColorCIELabValue': '00700247',
    'Underlined': '00700248',
    'Bold': '00700249',
    'Italic': '00700250',
    'PatternOnColorCIELabValue': '00700251',
    'PatternOffColorCIELabValue': '00700252',
    'LineThickness': '00700253',
    'LineDashingStyle': '00700254',
    'LinePattern': '00700255',
    'FillPattern': '00700256',
    'FillMode': '00700257',
    'ShadowOpacity': '00700258',
    'GapLength': '00700261',
    'DiameterOfVisibility': '00700262',
    'RotationPoint': '00700273',
    'TickAlignment': '00700274',
    'ShowTickLabel': '00700278',
    'TickLabelAlignment': '00700279',
    'CompoundGraphicUnits': '00700282',
    'PatternOnOpacity': '00700284',
    'PatternOffOpacity': '00700285',
    'MajorTicksSequence': '00700287',
    'TickPosition': '00700288',
    'TickLabel': '00700289',
    'CompoundGraphicType': '00700294',
    'GraphicGroupID': '00700295',
    'ShapeType': '00700306',
    'RegistrationSequence': '00700308',
    'MatrixRegistrationSequence': '00700309',
    'MatrixSequence': '0070030A',
    'FrameOfReferenceToDisplayedCoordinateSystemTransformationMatrix': '0070030B',
    'FrameOfReferenceTransformationMatrixType': '0070030C',
    'RegistrationTypeCodeSequence': '0070030D',
    'FiducialDescription': '0070030F',
    'FiducialIdentifier': '00700310',
    'FiducialIdentifierCodeSequence': '00700311',
    'ContourUncertaintyRadius': '00700312',
    'UsedFiducialsSequence': '00700314',
    'GraphicCoordinatesDataSequence': '00700318',
    'FiducialUID': '0070031A',
    'ReferencedFiducialUID': '0070031B',
    'FiducialSetSequence': '0070031C',
    'FiducialSequence': '0070031E',
    'FiducialsPropertyCategoryCodeSequence': '0070031F',
    'GraphicLayerRecommendedDisplayCIELabValue': '00700401',
    'BlendingSequence': '00700402',
    'RelativeOpacity': '00700403',
    'ReferencedSpatialRegistrationSequence': '00700404',
    'BlendingPosition': '00700405',
    'PresentationDisplayCollectionUID': '00701101',
    'PresentationSequenceCollectionUID': '00701102',
    'PresentationSequencePositionIndex': '00701103',
    'RenderedImageReferenceSequence': '00701104',
    'VolumetricPresentationStateInputSequence': '00701201',
    'PresentationInputType': '00701202',
    'InputSequencePositionIndex': '00701203',
    'Crop': '00701204',
    'CroppingSpecificationIndex': '00701205',
    'CompositingMethod': '00701206',
    'VolumetricPresentationInputNumber': '00701207',
    'ImageVolumeGeometry': '00701208',
    'VolumetricPresentationInputSetUID': '00701209',
    'VolumetricPresentationInputSetSequence': '0070120A',
    'GlobalCrop': '0070120B',
    'GlobalCroppingSpecificationIndex': '0070120C',
    'RenderingMethod': '0070120D',
    'VolumeCroppingSequence': '00701301',
    'VolumeCroppingMethod': '00701302',
    'BoundingBoxCrop': '00701303',
    'ObliqueCroppingPlaneSequence': '00701304',
    'Plane': '00701305',
    'PlaneNormal': '00701306',
    'CroppingSpecificationNumber': '00701309',
    'MultiPlanarReconstructionStyle': '00701501',
    'MPRThicknessType': '00701502',
    'MPRSlabThickness': '00701503',
    'MPRTopLeftHandCorner': '00701505',
    'MPRViewWidthDirection': '00701507',
    'MPRViewWidth': '00701508',
    'NumberOfVolumetricCurvePoints': '0070150C',
    'VolumetricCurvePoints': '0070150D',
    'MPRViewHeightDirection': '00701511',
    'MPRViewHeight': '00701512',
    'RenderProjection': '00701602',
    'ViewpointPosition': '00701603',
    'ViewpointLookAtPoint': '00701604',
    'ViewpointUpDirection': '00701605',
    'RenderFieldOfView': '00701606',
    'SamplingStepSize': '00701607',
    'ShadingStyle': '00701701',
    'AmbientReflectionIntensity': '00701702',
    'LightDirection': '00701703',
    'DiffuseReflectionIntensity': '00701704',
    'SpecularReflectionIntensity': '00701705',
    'Shininess': '00701706',
    'PresentationStateClassificationComponentSequence': '00701801',
    'ComponentType': '00701802',
    'ComponentInputSequence': '00701803',
    'VolumetricPresentationInputIndex': '00701804',
    'PresentationStateCompositorComponentSequence': '00701805',
    'WeightingTransferFunctionSequence': '00701806',
    'WeightingLookupTableDescriptor': '00701807',
    'WeightingLookupTableData': '00701808',
    'VolumetricAnnotationSequence': '00701901',
    'ReferencedStructuredContextSequence': '00701903',
    'ReferencedContentItem': '00701904',
    'VolumetricPresentationInputAnnotationSequence': '00701905',
    'AnnotationClipping': '00701907',
    'PresentationAnimationStyle': '00701A01',
    'RecommendedAnimationRate': '00701A03',
    'AnimationCurveSequence': '00701A04',
    'AnimationStepSize': '00701A05',
    'SwivelRange': '00701A06',
    'VolumetricCurveUpDirections': '00701A07',
    'VolumeStreamSequence': '00701A08',
    'RGBATransferFunctionDescription': '00701A09',
    'AdvancedBlendingSequence': '00701B01',
    'BlendingInputNumber': '00701B02',
    'BlendingDisplayInputSequence': '00701B03',
    'BlendingDisplaySequence': '00701B04',
    'BlendingMode': '00701B06',
    'TimeSeriesBlending': '00701B07',
    'GeometryForDisplay': '00701B08',
    'ThresholdSequence': '00701B11',
    'ThresholdValueSequence': '00701B12',
    'ThresholdType': '00701B13',
    'ThresholdValue': '00701B14',
    'HangingProtocolName': '00720002',
    'HangingProtocolDescription': '00720004',
    'HangingProtocolLevel': '00720006',
    'HangingProtocolCreator': '00720008',
    'HangingProtocolCreationDateTime': '0072000A',
    'HangingProtocolDefinitionSequence': '0072000C',
    'HangingProtocolUserIdentificationCodeSequence': '0072000E',
    'HangingProtocolUserGroupName': '00720010',
    'SourceHangingProtocolSequence': '00720012',
    'NumberOfPriorsReferenced': '00720014',
    'ImageSetsSequence': '00720020',
    'ImageSetSelectorSequence': '00720022',
    'ImageSetSelectorUsageFlag': '00720024',
    'SelectorAttribute': '00720026',
    'SelectorValueNumber': '00720028',
    'TimeBasedImageSetsSequence': '00720030',
    'ImageSetNumber': '00720032',
    'ImageSetSelectorCategory': '00720034',
    'RelativeTime': '00720038',
    'RelativeTimeUnits': '0072003A',
    'AbstractPriorValue': '0072003C',
    'AbstractPriorCodeSequence': '0072003E',
    'ImageSetLabel': '00720040',
    'SelectorAttributeVR': '00720050',
    'SelectorSequencePointer': '00720052',
    'SelectorSequencePointerPrivateCreator': '00720054',
    'SelectorAttributePrivateCreator': '00720056',
    'SelectorAEValue': '0072005E',
    'SelectorASValue': '0072005F',
    'SelectorATValue': '00720060',
    'SelectorDAValue': '00720061',
    'SelectorCSValue': '00720062',
    'SelectorDTValue': '00720063',
    'SelectorISValue': '00720064',
    'SelectorOBValue': '00720065',
    'SelectorLOValue': '00720066',
    'SelectorOFValue': '00720067',
    'SelectorLTValue': '00720068',
    'SelectorOWValue': '00720069',
    'SelectorPNValue': '0072006A',
    'SelectorTMValue': '0072006B',
    'SelectorSHValue': '0072006C',
    'SelectorUNValue': '0072006D',
    'SelectorSTValue': '0072006E',
    'SelectorUCValue': '0072006F',
    'SelectorUTValue': '00720070',
    'SelectorURValue': '00720071',
    'SelectorDSValue': '00720072',
    'SelectorODValue': '00720073',
    'SelectorFDValue': '00720074',
    'SelectorOLValue': '00720075',
    'SelectorFLValue': '00720076',
    'SelectorULValue': '00720078',
    'SelectorUSValue': '0072007A',
    'SelectorSLValue': '0072007C',
    'SelectorSSValue': '0072007E',
    'SelectorUIValue': '0072007F',
    'SelectorCodeSequenceValue': '00720080',
    'NumberOfScreens': '00720100',
    'NominalScreenDefinitionSequence': '00720102',
    'NumberOfVerticalPixels': '00720104',
    'NumberOfHorizontalPixels': '00720106',
    'DisplayEnvironmentSpatialPosition': '00720108',
    'ScreenMinimumGrayscaleBitDepth': '0072010A',
    'ScreenMinimumColorBitDepth': '0072010C',
    'ApplicationMaximumRepaintTime': '0072010E',
    'DisplaySetsSequence': '00720200',
    'DisplaySetNumber': '00720202',
    'DisplaySetLabel': '00720203',
    'DisplaySetPresentationGroup': '00720204',
    'DisplaySetPresentationGroupDescription': '00720206',
    'PartialDataDisplayHandling': '00720208',
    'SynchronizedScrollingSequence': '00720210',
    'DisplaySetScrollingGroup': '00720212',
    'NavigationIndicatorSequence': '00720214',
    'NavigationDisplaySet': '00720216',
    'ReferenceDisplaySets': '00720218',
    'ImageBoxesSequence': '00720300',
    'ImageBoxNumber': '00720302',
    'ImageBoxLayoutType': '00720304',
    'ImageBoxTileHorizontalDimension': '00720306',
    'ImageBoxTileVerticalDimension': '00720308',
    'ImageBoxScrollDirection': '00720310',
    'ImageBoxSmallScrollType': '00720312',
    'ImageBoxSmallScrollAmount': '00720314',
    'ImageBoxLargeScrollType': '00720316',
    'ImageBoxLargeScrollAmount': '00720318',
    'ImageBoxOverlapPriority': '00720320',
    'CineRelativeToRealTime': '00720330',
    'FilterOperationsSequence': '00720400',
    'FilterByCategory': '00720402',
    'FilterByAttributePresence': '00720404',
    'FilterByOperator': '00720406',
    'StructuredDisplayBackgroundCIELabValue': '00720420',
    'EmptyImageBoxCIELabValue': '00720421',
    'StructuredDisplayImageBoxSequence': '00720422',
    'StructuredDisplayTextBoxSequence': '00720424',
    'ReferencedFirstFrameSequence': '00720427',
    'ImageBoxSynchronizationSequence': '00720430',
    'SynchronizedImageBoxList': '00720432',
    'TypeOfSynchronization': '00720434',
    'BlendingOperationType': '00720500',
    'ReformattingOperationType': '00720510',
    'ReformattingThickness': '00720512',
    'ReformattingInterval': '00720514',
    'ReformattingOperationInitialViewDirection': '00720516',
    'ThreeDRenderingType': '00720520',
    'SortingOperationsSequence': '00720600',
    'SortByCategory': '00720602',
    'SortingDirection': '00720604',
    'DisplaySetPatientOrientation': '00720700',
    'VOIType': '00720702',
    'PseudoColorType': '00720704',
    'PseudoColorPaletteInstanceReferenceSequence': '00720705',
    'ShowGrayscaleInverted': '00720706',
    'ShowImageTrueSizeFlag': '00720710',
    'ShowGraphicAnnotationFlag': '00720712',
    'ShowPatientDemographicsFlag': '00720714',
    'ShowAcquisitionTechniquesFlag': '00720716',
    'DisplaySetHorizontalJustification': '00720717',
    'DisplaySetVerticalJustification': '00720718',
    'ContinuationStartMeterset': '00740120',
    'ContinuationEndMeterset': '00740121',
    'ProcedureStepState': '00741000',
    'ProcedureStepProgressInformationSequence': '00741002',
    'ProcedureStepProgress': '00741004',
    'ProcedureStepProgressDescription': '00741006',
    'ProcedureStepProgressParametersSequence': '00741007',
    'ProcedureStepCommunicationsURISequence': '00741008',
    'ContactURI': '0074100A',
    'ContactDisplayName': '0074100C',
    'ProcedureStepDiscontinuationReasonCodeSequence': '0074100E',
    'BeamTaskSequence': '00741020',
    'BeamTaskType': '00741022',
    'BeamOrderIndexTrial': '00741024',
    'AutosequenceFlag': '00741025',
    'TableTopVerticalAdjustedPosition': '00741026',
    'TableTopLongitudinalAdjustedPosition': '00741027',
    'TableTopLateralAdjustedPosition': '00741028',
    'PatientSupportAdjustedAngle': '0074102A',
    'TableTopEccentricAdjustedAngle': '0074102B',
    'TableTopPitchAdjustedAngle': '0074102C',
    'TableTopRollAdjustedAngle': '0074102D',
    'DeliveryVerificationImageSequence': '00741030',
    'VerificationImageTiming': '00741032',
    'DoubleExposureFlag': '00741034',
    'DoubleExposureOrdering': '00741036',
    'DoubleExposureMetersetTrial': '00741038',
    'DoubleExposureFieldDeltaTrial': '0074103A',
    'RelatedReferenceRTImageSequence': '00741040',
    'GeneralMachineVerificationSequence': '00741042',
    'ConventionalMachineVerificationSequence': '00741044',
    'IonMachineVerificationSequence': '00741046',
    'FailedAttributesSequence': '00741048',
    'OverriddenAttributesSequence': '0074104A',
    'ConventionalControlPointVerificationSequence': '0074104C',
    'IonControlPointVerificationSequence': '0074104E',
    'AttributeOccurrenceSequence': '00741050',
    'AttributeOccurrencePointer': '00741052',
    'AttributeItemSelector': '00741054',
    'AttributeOccurrencePrivateCreator': '00741056',
    'SelectorSequencePointerItems': '00741057',
    'ScheduledProcedureStepPriority': '00741200',
    'WorklistLabel': '00741202',
    'ProcedureStepLabel': '00741204',
    'ScheduledProcessingParametersSequence': '00741210',
    'PerformedProcessingParametersSequence': '00741212',
    'UnifiedProcedureStepPerformedProcedureSequence': '00741216',
    'RelatedProcedureStepSequence': '00741220',
    'ProcedureStepRelationshipType': '00741222',
    'ReplacedProcedureStepSequence': '00741224',
    'DeletionLock': '00741230',
    'ReceivingAE': '00741234',
    'RequestingAE': '00741236',
    'ReasonForCancellation': '00741238',
    'SCPStatus': '00741242',
    'SubscriptionListStatus': '00741244',
    'UnifiedProcedureStepListStatus': '00741246',
    'BeamOrderIndex': '00741324',
    'DoubleExposureMeterset': '00741338',
    'DoubleExposureFieldDelta': '0074133A',
    'BrachyTaskSequence': '00741401',
    'ContinuationStartTotalReferenceAirKerma': '00741402',
    'ContinuationEndTotalReferenceAirKerma': '00741403',
    'ContinuationPulseNumber': '00741404',
    'ChannelDeliveryOrderSequence': '00741405',
    'ReferencedChannelNumber': '00741406',
    'StartCumulativeTimeWeight': '00741407',
    'EndCumulativeTimeWeight': '00741408',
    'OmittedChannelSequence': '00741409',
    'ReasonForChannelOmission': '0074140A',
    'ReasonForChannelOmissionDescription': '0074140B',
    'ChannelDeliveryOrderIndex': '0074140C',
    'ChannelDeliveryContinuationSequence': '0074140D',
    'OmittedApplicationSetupSequence': '0074140E',
    'ImplantAssemblyTemplateName': '00760001',
    'ImplantAssemblyTemplateIssuer': '00760003',
    'ImplantAssemblyTemplateVersion': '00760006',
    'ReplacedImplantAssemblyTemplateSequence': '00760008',
    'ImplantAssemblyTemplateType': '0076000A',
    'OriginalImplantAssemblyTemplateSequence': '0076000C',
    'DerivationImplantAssemblyTemplateSequence': '0076000E',
    'ImplantAssemblyTemplateTargetAnatomySequence': '00760010',
    'ProcedureTypeCodeSequence': '00760020',
    'SurgicalTechnique': '00760030',
    'ComponentTypesSequence': '00760032',
    'ComponentTypeCodeSequence': '00760034',
    'ExclusiveComponentType': '00760036',
    'MandatoryComponentType': '00760038',
    'ComponentSequence': '00760040',
    'ComponentID': '00760055',
    'ComponentAssemblySequence': '00760060',
    '00760070': ('Component1ReferencedID'),
    '00760080': ('Component1ReferencedMatingFeatureSetID'),
    '00760090': ('Component1ReferencedMatingFeatureID'),
    '007600A0': ('Component2ReferencedID'),
    '007600B0': ('Component2ReferencedMatingFeatureSetID'),
    '007600C0': ('Component2ReferencedMatingFeatureID'),
    'ImplantTemplateGroupName': '00780001',
    'ImplantTemplateGroupDescription': '00780010',
    'ImplantTemplateGroupIssuer': '00780020',
    'ImplantTemplateGroupVersion': '00780024',
    'ReplacedImplantTemplateGroupSequence': '00780026',
    'ImplantTemplateGroupTargetAnatomySequence': '00780028',
    'ImplantTemplateGroupMembersSequence': '0078002A',
    'ImplantTemplateGroupMemberID': '0078002E',
    'ThreeDImplantTemplateGroupMemberMatchingPoint': '00780050',
    'ThreeDImplantTemplateGroupMemberMatchingAxes': '00780060',
    '00780070': ('ImplantTemplateGroupMemberMatching2DCoordinatesSequence'),
    'TwoDImplantTemplateGroupMemberMatchingPoint': '00780090',
    'TwoDImplantTemplateGroupMemberMatchingAxes': '007800A0',
    'ImplantTemplateGroupVariationDimensionSequence': '007800B0',
    'ImplantTemplateGroupVariationDimensionName': '007800B2',
    'ImplantTemplateGroupVariationDimensionRankSequence': '007800B4',
    'ReferencedImplantTemplateGroupMemberID': '007800B6',
    'ImplantTemplateGroupVariationDimensionRank': '007800B8',
    'SurfaceScanAcquisitionTypeCodeSequence': '00800001',
    'SurfaceScanModeCodeSequence': '00800002',
    'RegistrationMethodCodeSequence': '00800003',
    'ShotDurationTime': '00800004',
    'ShotOffsetTime': '00800005',
    'SurfacePointPresentationValueData': '00800006',
    'SurfacePointColorCIELabValueData': '00800007',
    'UVMappingSequence': '00800008',
    'TextureLabel': '00800009',
    'UValueData': '00800010',
    'VValueData': '00800011',
    'ReferencedTextureSequence': '00800012',
    'ReferencedSurfaceDataSequence': '00800013',
    'AssessmentSummary': '00820001',
    'AssessmentSummaryDescription': '00820003',
    'AssessedSOPInstanceSequence': '00820004',
    'ReferencedComparisonSOPInstanceSequence': '00820005',
    'NumberOfAssessmentObservations': '00820006',
    'AssessmentObservationsSequence': '00820007',
    'ObservationSignificance': '00820008',
    'ObservationDescription': '0082000A',
    'StructuredConstraintObservationSequence': '0082000C',
    'AssessedAttributeValueSequence': '00820010',
    'AssessmentSetID': '00820016',
    'AssessmentRequesterSequence': '00820017',
    'SelectorAttributeName': '00820018',
    'SelectorAttributeKeyword': '00820019',
    'AssessmentTypeCodeSequence': '00820021',
    'ObservationBasisCodeSequence': '00820022',
    'AssessmentLabel': '00820023',
    'ConstraintType': '00820032',
    'SpecificationSelectionGuidance': '00820033',
    'ConstraintValueSequence': '00820034',
    'RecommendedDefaultValueSequence': '00820035',
    'ConstraintViolationSignificance': '00820036',
    'ConstraintViolationCondition': '00820037',
    'ModifiableConstraintFlag': '00820038',
    'StorageMediaFileSetID': '00880130',
    'StorageMediaFileSetUID': '00880140',
    'IconImageSequence': '00880200',
    'TopicTitle': '00880904',
    'TopicSubject': '00880906',
    'TopicAuthor': '00880910',
    'TopicKeywords': '00880912',
    'SOPInstanceStatus': '01000410',
    'SOPAuthorizationDateTime': '01000420',
    'SOPAuthorizationComment': '01000424',
    'AuthorizationEquipmentCertificationNumber': '01000426',
    'MACIDNumber': '04000005',
    'MACCalculationTransferSyntaxUID': '04000010',
    'MACAlgorithm': '04000015',
    'DataElementsSigned': '04000020',
    'DigitalSignatureUID': '04000100',
    'DigitalSignatureDateTime': '04000105',
    'CertificateType': '04000110',
    'CertificateOfSigner': '04000115',
    'Signature': '04000120',
    'CertifiedTimestampType': '04000305',
    'CertifiedTimestamp': '04000310',
    '': '04000315',
    'DigitalSignaturePurposeCodeSequence': '04000401',
    'ReferencedDigitalSignatureSequence': '04000402',
    'ReferencedSOPInstanceMACSequence': '04000403',
    'MAC': '04000404',
    'EncryptedAttributesSequence': '04000500',
    'EncryptedContentTransferSyntaxUID': '04000510',
    'EncryptedContent': '04000520',
    'ModifiedAttributesSequence': '04000550',
    'OriginalAttributesSequence': '04000561',
    'AttributeModificationDateTime': '04000562',
    'ModifyingSystem': '04000563',
    'SourceOfPreviousValues': '04000564',
    'ReasonForTheAttributeModification': '04000565',
    'InstanceOriginStatus': '04000600',
    'NumberOfCopies': '20000010',
    'PrinterConfigurationSequence': '2000001E',
    'PrintPriority': '20000020',
    'MediumType': '20000030',
    'FilmDestination': '20000040',
    'FilmSessionLabel': '20000050',
    'MemoryAllocation': '20000060',
    'MaximumMemoryAllocation': '20000061',
    'ColorImagePrintingFlag': '20000062',
    'CollationFlag': '20000063',
    'AnnotationFlag': '20000065',
    'ImageOverlayFlag': '20000067',
    'PresentationLUTFlag': '20000069',
    'ImageBoxPresentationLUTFlag': '2000006A',
    'MemoryBitDepth': '200000A0',
    'PrintingBitDepth': '200000A1',
    'MediaInstalledSequence': '200000A2',
    'OtherMediaAvailableSequence': '200000A4',
    'SupportedImageDisplayFormatsSequence': '200000A8',
    'ReferencedFilmBoxSequence': '20000500',
    'ReferencedStoredPrintSequence': '20000510',
    'ImageDisplayFormat': '20100010',
    'AnnotationDisplayFormatID': '20100030',
    'FilmOrientation': '20100040',
    'FilmSizeID': '20100050',
    'PrinterResolutionID': '20100052',
    'DefaultPrinterResolutionID': '20100054',
    'MagnificationType': '20100060',
    'SmoothingType': '20100080',
    'DefaultMagnificationType': '201000A6',
    'OtherMagnificationTypesAvailable': '201000A7',
    'DefaultSmoothingType': '201000A8',
    'OtherSmoothingTypesAvailable': '201000A9',
    'BorderDensity': '20100100',
    'EmptyImageDensity': '20100110',
    'MinDensity': '20100120',
    'MaxDensity': '20100130',
    'Trim': '20100140',
    'ConfigurationInformation': '20100150',
    'ConfigurationInformationDescription': '20100152',
    'MaximumCollatedFilms': '20100154',
    'Illumination': '2010015E',
    'ReflectedAmbientLight': '20100160',
    'PrinterPixelSpacing': '20100376',
    'ReferencedFilmSessionSequence': '20100500',
    'ReferencedImageBoxSequence': '20100510',
    'ReferencedBasicAnnotationBoxSequence': '20100520',
    'ImageBoxPosition': '20200010',
    'Polarity': '20200020',
    'RequestedImageSize': '20200030',
    'RequestedDecimateCropBehavior': '20200040',
    'RequestedResolutionID': '20200050',
    'RequestedImageSizeFlag': '202000A0',
    'DecimateCropResult': '202000A2',
    'BasicGrayscaleImageSequence': '20200110',
    'BasicColorImageSequence': '20200111',
    'ReferencedImageOverlayBoxSequence': '20200130',
    'ReferencedVOILUTBoxSequence': '20200140',
    'AnnotationPosition': '20300010',
    'TextString': '20300020',
    'ReferencedOverlayPlaneSequence': '20400010',
    'ReferencedOverlayPlaneGroups': '20400011',
    'OverlayPixelDataSequence': '20400020',
    'OverlayMagnificationType': '20400060',
    'OverlaySmoothingType': '20400070',
    'OverlayOrImageMagnification': '20400072',
    'MagnifyToNumberOfColumns': '20400074',
    'OverlayForegroundDensity': '20400080',
    'OverlayBackgroundDensity': '20400082',
    'OverlayMode': '20400090',
    'ThresholdDensity': '20400100',
    'ReferencedImageBoxSequenceRetired': '20400500',
    'PresentationLUTSequence': '20500010',
    'PresentationLUTShape': '20500020',
    'ReferencedPresentationLUTSequence': '20500500',
    'PrintJobID': '21000010',
    'ExecutionStatus': '21000020',
    'ExecutionStatusInfo': '21000030',
    'CreationDate': '21000040',
    'CreationTime': '21000050',
    'Originator': '21000070',
    'DestinationAE': '21000140',
    'OwnerID': '21000160',
    'NumberOfFilms': '21000170',
    'ReferencedPrintJobSequencePullStoredPrint': '21000500',
    'PrinterStatus': '21100010',
    'PrinterStatusInfo': '21100020',
    'PrinterName': '21100030',
    'PrintQueueID': '21100099',
    'QueueStatus': '21200010',
    'PrintJobDescriptionSequence': '21200050',
    'ReferencedPrintJobSequence': '21200070',
    'PrintManagementCapabilitiesSequence': '21300010',
    'PrinterCharacteristicsSequence': '21300015',
    'FilmBoxContentSequence': '21300030',
    'ImageBoxContentSequence': '21300040',
    'AnnotationContentSequence': '21300050',
    'ImageOverlayBoxContentSequence': '21300060',
    'PresentationLUTContentSequence': '21300080',
    'ProposedStudySequence': '213000A0',
    'OriginalImageSequence': '213000C0',
    'LabelUsingInformationExtractedFromInstances': '22000001',
    'LabelText': '22000002',
    'LabelStyleSelection': '22000003',
    'MediaDisposition': '22000004',
    'BarcodeValue': '22000005',
    'BarcodeSymbology': '22000006',
    'AllowMediaSplitting': '22000007',
    'IncludeNonDICOMObjects': '22000008',
    'IncludeDisplayApplication': '22000009',
    'PreserveCompositeInstancesAfterMediaCreation': '2200000A',
    'TotalNumberOfPiecesOfMediaCreated': '2200000B',
    'RequestedMediaApplicationProfile': '2200000C',
    'ReferencedStorageMediaSequence': '2200000D',
    'FailureAttributes': '2200000E',
    'AllowLossyCompression': '2200000F',
    'RequestPriority': '22000020',
    'RTImageLabel': '30020002',
    'RTImageName': '30020003',
    'RTImageDescription': '30020004',
    'ReportedValuesOrigin': '3002000A',
    'RTImagePlane': '3002000C',
    'XRayImageReceptorTranslation': '3002000D',
    'XRayImageReceptorAngle': '3002000E',
    'RTImageOrientation': '30020010',
    'ImagePlanePixelSpacing': '30020011',
    'RTImagePosition': '30020012',
    'RadiationMachineName': '30020020',
    'RadiationMachineSAD': '30020022',
    'RadiationMachineSSD': '30020024',
    'RTImageSID': '30020026',
    'SourceToReferenceObjectDistance': '30020028',
    'FractionNumber': '30020029',
    'ExposureSequence': '30020030',
    'MetersetExposure': '30020032',
    'DiaphragmPosition': '30020034',
    'FluenceMapSequence': '30020040',
    'FluenceDataSource': '30020041',
    'FluenceDataScale': '30020042',
    'PrimaryFluenceModeSequence': '30020050',
    'FluenceMode': '30020051',
    'FluenceModeID': '30020052',
    'DVHType': '30040001',
    'DoseUnits': '30040002',
    'DoseType': '30040004',
    'SpatialTransformOfDose': '30040005',
    'DoseComment': '30040006',
    'NormalizationPoint': '30040008',
    'DoseSummationType': '3004000A',
    'GridFrameOffsetVector': '3004000C',
    'DoseGridScaling': '3004000E',
    'RTDoseROISequence': '30040010',
    'DoseValue': '30040012',
    'TissueHeterogeneityCorrection': '30040014',
    'DVHNormalizationPoint': '30040040',
    'DVHNormalizationDoseValue': '30040042',
    'DVHSequence': '30040050',
    'DVHDoseScaling': '30040052',
    'DVHVolumeUnits': '30040054',
    'DVHNumberOfBins': '30040056',
    'DVHData': '30040058',
    'DVHReferencedROISequence': '30040060',
    'DVHROIContributionType': '30040062',
    'DVHMinimumDose': '30040070',
    'DVHMaximumDose': '30040072',
    'DVHMeanDose': '30040074',
    'StructureSetLabel': '30060002',
    'StructureSetName': '30060004',
    'StructureSetDescription': '30060006',
    'StructureSetDate': '30060008',
    'StructureSetTime': '30060009',
    'ReferencedFrameOfReferenceSequence': '30060010',
    'RTReferencedStudySequence': '30060012',
    'RTReferencedSeriesSequence': '30060014',
    'ContourImageSequence': '30060016',
    'PredecessorStructureSetSequence': '30060018',
    'StructureSetROISequence': '30060020',
    'ROINumber': '30060022',
    'ReferencedFrameOfReferenceUID': '30060024',
    'ROIName': '30060026',
    'ROIDescription': '30060028',
    'ROIDisplayColor': '3006002A',
    'ROIVolume': '3006002C',
    'RTRelatedROISequence': '30060030',
    'RTROIRelationship': '30060033',
    'ROIGenerationAlgorithm': '30060036',
    'ROIGenerationDescription': '30060038',
    'ROIContourSequence': '30060039',
    'ContourSequence': '30060040',
    'ContourGeometricType': '30060042',
    'ContourSlabThickness': '30060044',
    'ContourOffsetVector': '30060045',
    'NumberOfContourPoints': '30060046',
    'ContourNumber': '30060048',
    'AttachedContours': '30060049',
    'ContourData': '30060050',
    'RTROIObservationsSequence': '30060080',
    'ObservationNumber': '30060082',
    'ReferencedROINumber': '30060084',
    'ROIObservationLabel': '30060085',
    'RTROIIdentificationCodeSequence': '30060086',
    'ROIObservationDescription': '30060088',
    'RelatedRTROIObservationsSequence': '300600A0',
    'RTROIInterpretedType': '300600A4',
    'ROIInterpreter': '300600A6',
    'ROIPhysicalPropertiesSequence': '300600B0',
    'ROIPhysicalProperty': '300600B2',
    'ROIPhysicalPropertyValue': '300600B4',
    'ROIElementalCompositionSequence': '300600B6',
    'ROIElementalCompositionAtomicNumber': '300600B7',
    'ROIElementalCompositionAtomicMassFraction': '300600B8',
    'AdditionalRTROIIdentificationCodeSequence': '300600B9',
    'FrameOfReferenceRelationshipSequence': '300600C0',
    'RelatedFrameOfReferenceUID': '300600C2',
    'FrameOfReferenceTransformationType': '300600C4',
    'FrameOfReferenceTransformationMatrix': '300600C6',
    'FrameOfReferenceTransformationComment': '300600C8',
    'MeasuredDoseReferenceSequence': '30080010',
    'MeasuredDoseDescription': '30080012',
    'MeasuredDoseType': '30080014',
    'MeasuredDoseValue': '30080016',
    'TreatmentSessionBeamSequence': '30080020',
    'TreatmentSessionIonBeamSequence': '30080021',
    'CurrentFractionNumber': '30080022',
    'TreatmentControlPointDate': '30080024',
    'TreatmentControlPointTime': '30080025',
    'TreatmentTerminationStatus': '3008002A',
    'TreatmentTerminationCode': '3008002B',
    'TreatmentVerificationStatus': '3008002C',
    'ReferencedTreatmentRecordSequence': '30080030',
    'SpecifiedPrimaryMeterset': '30080032',
    'SpecifiedSecondaryMeterset': '30080033',
    'DeliveredPrimaryMeterset': '30080036',
    'DeliveredSecondaryMeterset': '30080037',
    'SpecifiedTreatmentTime': '3008003A',
    'DeliveredTreatmentTime': '3008003B',
    'ControlPointDeliverySequence': '30080040',
    'IonControlPointDeliverySequence': '30080041',
    'SpecifiedMeterset': '30080042',
    'DeliveredMeterset': '30080044',
    'MetersetRateSet': '30080045',
    'MetersetRateDelivered': '30080046',
    'ScanSpotMetersetsDelivered': '30080047',
    'DoseRateDelivered': '30080048',
    'TreatmentSummaryCalculatedDoseReferenceSequence': '30080050',
    'CumulativeDoseToDoseReference': '30080052',
    'FirstTreatmentDate': '30080054',
    'MostRecentTreatmentDate': '30080056',
    'NumberOfFractionsDelivered': '3008005A',
    'OverrideSequence': '30080060',
    'ParameterSequencePointer': '30080061',
    'OverrideParameterPointer': '30080062',
    'ParameterItemIndex': '30080063',
    'MeasuredDoseReferenceNumber': '30080064',
    'ParameterPointer': '30080065',
    'OverrideReason': '30080066',
    'ParameterValueNumber': '30080067',
    'CorrectedParameterSequence': '30080068',
    'CorrectionValue': '3008006A',
    'CalculatedDoseReferenceSequence': '30080070',
    'CalculatedDoseReferenceNumber': '30080072',
    'CalculatedDoseReferenceDescription': '30080074',
    'CalculatedDoseReferenceDoseValue': '30080076',
    'StartMeterset': '30080078',
    'EndMeterset': '3008007A',
    'ReferencedMeasuredDoseReferenceSequence': '30080080',
    'ReferencedMeasuredDoseReferenceNumber': '30080082',
    'ReferencedCalculatedDoseReferenceSequence': '30080090',
    'ReferencedCalculatedDoseReferenceNumber': '30080092',
    'BeamLimitingDeviceLeafPairsSequence': '300800A0',
    'RecordedWedgeSequence': '300800B0',
    'RecordedCompensatorSequence': '300800C0',
    'RecordedBlockSequence': '300800D0',
    'TreatmentSummaryMeasuredDoseReferenceSequence': '300800E0',
    'RecordedSnoutSequence': '300800F0',
    'RecordedRangeShifterSequence': '300800F2',
    'RecordedLateralSpreadingDeviceSequence': '300800F4',
    'RecordedRangeModulatorSequence': '300800F6',
    'RecordedSourceSequence': '30080100',
    'SourceSerialNumber': '30080105',
    'TreatmentSessionApplicationSetupSequence': '30080110',
    'ApplicationSetupCheck': '30080116',
    'RecordedBrachyAccessoryDeviceSequence': '30080120',
    'ReferencedBrachyAccessoryDeviceNumber': '30080122',
    'RecordedChannelSequence': '30080130',
    'SpecifiedChannelTotalTime': '30080132',
    'DeliveredChannelTotalTime': '30080134',
    'SpecifiedNumberOfPulses': '30080136',
    'DeliveredNumberOfPulses': '30080138',
    'SpecifiedPulseRepetitionInterval': '3008013A',
    'DeliveredPulseRepetitionInterval': '3008013C',
    'RecordedSourceApplicatorSequence': '30080140',
    'ReferencedSourceApplicatorNumber': '30080142',
    'RecordedChannelShieldSequence': '30080150',
    'ReferencedChannelShieldNumber': '30080152',
    'BrachyControlPointDeliveredSequence': '30080160',
    'SafePositionExitDate': '30080162',
    'SafePositionExitTime': '30080164',
    'SafePositionReturnDate': '30080166',
    'SafePositionReturnTime': '30080168',
    'PulseSpecificBrachyControlPointDeliveredSequence': '30080171',
    'PulseNumber': '30080172',
    'BrachyPulseControlPointDeliveredSequence': '30080173',
    'CurrentTreatmentStatus': '30080200',
    'TreatmentStatusComment': '30080202',
    'FractionGroupSummarySequence': '30080220',
    'ReferencedFractionNumber': '30080223',
    'FractionGroupType': '30080224',
    'BeamStopperPosition': '30080230',
    'FractionStatusSummarySequence': '30080240',
    'TreatmentDate': '30080250',
    'TreatmentTime': '30080251',
    'RTPlanLabel': '300A0002',
    'RTPlanName': '300A0003',
    'RTPlanDescription': '300A0004',
    'RTPlanDate': '300A0006',
    'RTPlanTime': '300A0007',
    'TreatmentProtocols': '300A0009',
    'PlanIntent': '300A000A',
    'TreatmentSites': '300A000B',
    'RTPlanGeometry': '300A000C',
    'PrescriptionDescription': '300A000E',
    'DoseReferenceSequence': '300A0010',
    'DoseReferenceNumber': '300A0012',
    'DoseReferenceUID': '300A0013',
    'DoseReferenceStructureType': '300A0014',
    'NominalBeamEnergyUnit': '300A0015',
    'DoseReferenceDescription': '300A0016',
    'DoseReferencePointCoordinates': '300A0018',
    'NominalPriorDose': '300A001A',
    'DoseReferenceType': '300A0020',
    'ConstraintWeight': '300A0021',
    'DeliveryWarningDose': '300A0022',
    'DeliveryMaximumDose': '300A0023',
    'TargetMinimumDose': '300A0025',
    'TargetPrescriptionDose': '300A0026',
    'TargetMaximumDose': '300A0027',
    'TargetUnderdoseVolumeFraction': '300A0028',
    'OrganAtRiskFullVolumeDose': '300A002A',
    'OrganAtRiskLimitDose': '300A002B',
    'OrganAtRiskMaximumDose': '300A002C',
    'OrganAtRiskOverdoseVolumeFraction': '300A002D',
    'ToleranceTableSequence': '300A0040',
    'ToleranceTableNumber': '300A0042',
    'ToleranceTableLabel': '300A0043',
    'GantryAngleTolerance': '300A0044',
    'BeamLimitingDeviceAngleTolerance': '300A0046',
    'BeamLimitingDeviceToleranceSequence': '300A0048',
    'BeamLimitingDevicePositionTolerance': '300A004A',
    'SnoutPositionTolerance': '300A004B',
    'PatientSupportAngleTolerance': '300A004C',
    'TableTopEccentricAngleTolerance': '300A004E',
    'TableTopPitchAngleTolerance': '300A004F',
    'TableTopRollAngleTolerance': '300A0050',
    'TableTopVerticalPositionTolerance': '300A0051',
    'TableTopLongitudinalPositionTolerance': '300A0052',
    'TableTopLateralPositionTolerance': '300A0053',
    'RTPlanRelationship': '300A0055',
    'FractionGroupSequence': '300A0070',
    'FractionGroupNumber': '300A0071',
    'FractionGroupDescription': '300A0072',
    'NumberOfFractionsPlanned': '300A0078',
    'NumberOfFractionPatternDigitsPerDay': '300A0079',
    'RepeatFractionCycleLength': '300A007A',
    'FractionPattern': '300A007B',
    'NumberOfBeams': '300A0080',
    'BeamDoseSpecificationPoint': '300A0082',
    'ReferencedDoseReferenceUID': '300A0083',
    'BeamDose': '300A0084',
    'BeamMeterset': '300A0086',
    'BeamDosePointDepth': '300A0088',
    'BeamDosePointEquivalentDepth': '300A0089',
    'BeamDosePointSSD': '300A008A',
    'BeamDoseMeaning': '300A008B',
    'BeamDoseVerificationControlPointSequence': '300A008C',
    'AverageBeamDosePointDepth': '300A008D',
    'AverageBeamDosePointEquivalentDepth': '300A008E',
    'AverageBeamDosePointSSD': '300A008F',
    'BeamDoseType': '300A0090',
    'AlternateBeamDose': '300A0091',
    'AlternateBeamDoseType': '300A0092',
    'DepthValueAveragingFlag': '300A0093',
    'BeamDosePointSourceToExternalContourDistance': '300A0094',
    'NumberOfBrachyApplicationSetups': '300A00A0',
    'BrachyApplicationSetupDoseSpecificationPoint': '300A00A2',
    'BrachyApplicationSetupDose': '300A00A4',
    'BeamSequence': '300A00B0',
    'TreatmentMachineName': '300A00B2',
    'PrimaryDosimeterUnit': '300A00B3',
    'SourceAxisDistance': '300A00B4',
    'BeamLimitingDeviceSequence': '300A00B6',
    'RTBeamLimitingDeviceType': '300A00B8',
    'SourceToBeamLimitingDeviceDistance': '300A00BA',
    'IsocenterToBeamLimitingDeviceDistance': '300A00BB',
    'NumberOfLeafJawPairs': '300A00BC',
    'LeafPositionBoundaries': '300A00BE',
    'BeamNumber': '300A00C0',
    'BeamName': '300A00C2',
    'BeamDescription': '300A00C3',
    'BeamType': '300A00C4',
    'BeamDeliveryDurationLimit': '300A00C5',
    'RadiationType': '300A00C6',
    'HighDoseTechniqueType': '300A00C7',
    'ReferenceImageNumber': '300A00C8',
    'PlannedVerificationImageSequence': '300A00CA',
    'ImagingDeviceSpecificAcquisitionParameters': '300A00CC',
    'TreatmentDeliveryType': '300A00CE',
    'NumberOfWedges': '300A00D0',
    'WedgeSequence': '300A00D1',
    'WedgeNumber': '300A00D2',
    'WedgeType': '300A00D3',
    'WedgeID': '300A00D4',
    'WedgeAngle': '300A00D5',
    'WedgeFactor': '300A00D6',
    'TotalWedgeTrayWaterEquivalentThickness': '300A00D7',
    'WedgeOrientation': '300A00D8',
    'IsocenterToWedgeTrayDistance': '300A00D9',
    'SourceToWedgeTrayDistance': '300A00DA',
    'WedgeThinEdgePosition': '300A00DB',
    'BolusID': '300A00DC',
    'BolusDescription': '300A00DD',
    'EffectiveWedgeAngle': '300A00DE',
    'NumberOfCompensators': '300A00E0',
    'MaterialID': '300A00E1',
    'TotalCompensatorTrayFactor': '300A00E2',
    'CompensatorSequence': '300A00E3',
    'CompensatorNumber': '300A00E4',
    'CompensatorID': '300A00E5',
    'SourceToCompensatorTrayDistance': '300A00E6',
    'CompensatorRows': '300A00E7',
    'CompensatorColumns': '300A00E8',
    'CompensatorPixelSpacing': '300A00E9',
    'CompensatorPosition': '300A00EA',
    'CompensatorTransmissionData': '300A00EB',
    'CompensatorThicknessData': '300A00EC',
    'NumberOfBoli': '300A00ED',
    'CompensatorType': '300A00EE',
    'CompensatorTrayID': '300A00EF',
    'NumberOfBlocks': '300A00F0',
    'TotalBlockTrayFactor': '300A00F2',
    'TotalBlockTrayWaterEquivalentThickness': '300A00F3',
    'BlockSequence': '300A00F4',
    'BlockTrayID': '300A00F5',
    'SourceToBlockTrayDistance': '300A00F6',
    'IsocenterToBlockTrayDistance': '300A00F7',
    'BlockType': '300A00F8',
    'AccessoryCode': '300A00F9',
    'BlockDivergence': '300A00FA',
    'BlockMountingPosition': '300A00FB',
    'BlockNumber': '300A00FC',
    'BlockName': '300A00FE',
    'BlockThickness': '300A0100',
    'BlockTransmission': '300A0102',
    'BlockNumberOfPoints': '300A0104',
    'BlockData': '300A0106',
    'ApplicatorSequence': '300A0107',
    'ApplicatorID': '300A0108',
    'ApplicatorType': '300A0109',
    'ApplicatorDescription': '300A010A',
    'CumulativeDoseReferenceCoefficient': '300A010C',
    'FinalCumulativeMetersetWeight': '300A010E',
    'NumberOfControlPoints': '300A0110',
    'ControlPointSequence': '300A0111',
    'ControlPointIndex': '300A0112',
    'NominalBeamEnergy': '300A0114',
    'DoseRateSet': '300A0115',
    'WedgePositionSequence': '300A0116',
    'WedgePosition': '300A0118',
    'BeamLimitingDevicePositionSequence': '300A011A',
    'LeafJawPositions': '300A011C',
    'GantryAngle': '300A011E',
    'GantryRotationDirection': '300A011F',
    'BeamLimitingDeviceAngle': '300A0120',
    'BeamLimitingDeviceRotationDirection': '300A0121',
    'PatientSupportAngle': '300A0122',
    'PatientSupportRotationDirection': '300A0123',
    'TableTopEccentricAxisDistance': '300A0124',
    'TableTopEccentricAngle': '300A0125',
    'TableTopEccentricRotationDirection': '300A0126',
    'TableTopVerticalPosition': '300A0128',
    'TableTopLongitudinalPosition': '300A0129',
    'TableTopLateralPosition': '300A012A',
    'IsocenterPosition': '300A012C',
    'SurfaceEntryPoint': '300A012E',
    'SourceToSurfaceDistance': '300A0130',
    'AverageBeamDosePointSourceToExternalContourDistance': '300A0131',
    'SourceToExternalContourDistance': '300A0132',
    'ExternalContourEntryPoint': '300A0133',
    'CumulativeMetersetWeight': '300A0134',
    'TableTopPitchAngle': '300A0140',
    'TableTopPitchRotationDirection': '300A0142',
    'TableTopRollAngle': '300A0144',
    'TableTopRollRotationDirection': '300A0146',
    'HeadFixationAngle': '300A0148',
    'GantryPitchAngle': '300A014A',
    'GantryPitchRotationDirection': '300A014C',
    'GantryPitchAngleTolerance': '300A014E',
    'FixationEye': '300A0150',
    'ChairHeadFramePosition': '300A0151',
    'HeadFixationAngleTolerance': '300A0152',
    'ChairHeadFramePositionTolerance': '300A0153',
    'FixationLightAzimuthalAngleTolerance': '300A0154',
    'FixationLightPolarAngleTolerance': '300A0155',
    'PatientSetupSequence': '300A0180',
    'PatientSetupNumber': '300A0182',
    'PatientSetupLabel': '300A0183',
    'PatientAdditionalPosition': '300A0184',
    'FixationDeviceSequence': '300A0190',
    'FixationDeviceType': '300A0192',
    'FixationDeviceLabel': '300A0194',
    'FixationDeviceDescription': '300A0196',
    'FixationDevicePosition': '300A0198',
    'FixationDevicePitchAngle': '300A0199',
    'FixationDeviceRollAngle': '300A019A',
    'ShieldingDeviceSequence': '300A01A0',
    'ShieldingDeviceType': '300A01A2',
    'ShieldingDeviceLabel': '300A01A4',
    'ShieldingDeviceDescription': '300A01A6',
    'ShieldingDevicePosition': '300A01A8',
    'SetupTechnique': '300A01B0',
    'SetupTechniqueDescription': '300A01B2',
    'SetupDeviceSequence': '300A01B4',
    'SetupDeviceType': '300A01B6',
    'SetupDeviceLabel': '300A01B8',
    'SetupDeviceDescription': '300A01BA',
    'SetupDeviceParameter': '300A01BC',
    'SetupReferenceDescription': '300A01D0',
    'TableTopVerticalSetupDisplacement': '300A01D2',
    'TableTopLongitudinalSetupDisplacement': '300A01D4',
    'TableTopLateralSetupDisplacement': '300A01D6',
    'BrachyTreatmentTechnique': '300A0200',
    'BrachyTreatmentType': '300A0202',
    'TreatmentMachineSequence': '300A0206',
    'SourceSequence': '300A0210',
    'SourceNumber': '300A0212',
    'SourceType': '300A0214',
    'SourceManufacturer': '300A0216',
    'ActiveSourceDiameter': '300A0218',
    'ActiveSourceLength': '300A021A',
    'SourceModelID': '300A021B',
    'SourceDescription': '300A021C',
    'SourceEncapsulationNominalThickness': '300A0222',
    'SourceEncapsulationNominalTransmission': '300A0224',
    'SourceIsotopeName': '300A0226',
    'SourceIsotopeHalfLife': '300A0228',
    'SourceStrengthUnits': '300A0229',
    'ReferenceAirKermaRate': '300A022A',
    'SourceStrength': '300A022B',
    'SourceStrengthReferenceDate': '300A022C',
    'SourceStrengthReferenceTime': '300A022E',
    'ApplicationSetupSequence': '300A0230',
    'ApplicationSetupType': '300A0232',
    'ApplicationSetupNumber': '300A0234',
    'ApplicationSetupName': '300A0236',
    'ApplicationSetupManufacturer': '300A0238',
    'TemplateNumber': '300A0240',
    'TemplateType': '300A0242',
    'TemplateName': '300A0244',
    'TotalReferenceAirKerma': '300A0250',
    'BrachyAccessoryDeviceSequence': '300A0260',
    'BrachyAccessoryDeviceNumber': '300A0262',
    'BrachyAccessoryDeviceID': '300A0263',
    'BrachyAccessoryDeviceType': '300A0264',
    'BrachyAccessoryDeviceName': '300A0266',
    'BrachyAccessoryDeviceNominalThickness': '300A026A',
    'BrachyAccessoryDeviceNominalTransmission': '300A026C',
    'ChannelEffectiveLength': '300A0271',
    'ChannelInnerLength': '300A0272',
    'AfterloaderChannelID': '300A0273',
    'SourceApplicatorTipLength': '300A0274',
    'ChannelSequence': '300A0280',
    'ChannelNumber': '300A0282',
    'ChannelLength': '300A0284',
    'ChannelTotalTime': '300A0286',
    'SourceMovementType': '300A0288',
    'NumberOfPulses': '300A028A',
    'PulseRepetitionInterval': '300A028C',
    'SourceApplicatorNumber': '300A0290',
    'SourceApplicatorID': '300A0291',
    'SourceApplicatorType': '300A0292',
    'SourceApplicatorName': '300A0294',
    'SourceApplicatorLength': '300A0296',
    'SourceApplicatorManufacturer': '300A0298',
    'SourceApplicatorWallNominalThickness': '300A029C',
    'SourceApplicatorWallNominalTransmission': '300A029E',
    'SourceApplicatorStepSize': '300A02A0',
    'TransferTubeNumber': '300A02A2',
    'TransferTubeLength': '300A02A4',
    'ChannelShieldSequence': '300A02B0',
    'ChannelShieldNumber': '300A02B2',
    'ChannelShieldID': '300A02B3',
    'ChannelShieldName': '300A02B4',
    'ChannelShieldNominalThickness': '300A02B8',
    'ChannelShieldNominalTransmission': '300A02BA',
    'FinalCumulativeTimeWeight': '300A02C8',
    'BrachyControlPointSequence': '300A02D0',
    'ControlPointRelativePosition': '300A02D2',
    '300A02D4': ('ControlPoint3DPosition'),
    'CumulativeTimeWeight': '300A02D6',
    'CompensatorDivergence': '300A02E0',
    'CompensatorMountingPosition': '300A02E1',
    'SourceToCompensatorDistance': '300A02E2',
    'TotalCompensatorTrayWaterEquivalentThickness': '300A02E3',
    'IsocenterToCompensatorTrayDistance': '300A02E4',
    'CompensatorColumnOffset': '300A02E5',
    'IsocenterToCompensatorDistances': '300A02E6',
    'CompensatorRelativeStoppingPowerRatio': '300A02E7',
    'CompensatorMillingToolDiameter': '300A02E8',
    'IonRangeCompensatorSequence': '300A02EA',
    'CompensatorDescription': '300A02EB',
    'RadiationMassNumber': '300A0302',
    'RadiationAtomicNumber': '300A0304',
    'RadiationChargeState': '300A0306',
    'ScanMode': '300A0308',
    'ModulatedScanModeType': '300A0309',
    'VirtualSourceAxisDistances': '300A030A',
    'SnoutSequence': '300A030C',
    'SnoutPosition': '300A030D',
    'SnoutID': '300A030F',
    'NumberOfRangeShifters': '300A0312',
    'RangeShifterSequence': '300A0314',
    'RangeShifterNumber': '300A0316',
    'RangeShifterID': '300A0318',
    'RangeShifterType': '300A0320',
    'RangeShifterDescription': '300A0322',
    'NumberOfLateralSpreadingDevices': '300A0330',
    'LateralSpreadingDeviceSequence': '300A0332',
    'LateralSpreadingDeviceNumber': '300A0334',
    'LateralSpreadingDeviceID': '300A0336',
    'LateralSpreadingDeviceType': '300A0338',
    'LateralSpreadingDeviceDescription': '300A033A',
    'LateralSpreadingDeviceWaterEquivalentThickness': '300A033C',
    'NumberOfRangeModulators': '300A0340',
    'RangeModulatorSequence': '300A0342',
    'RangeModulatorNumber': '300A0344',
    'RangeModulatorID': '300A0346',
    'RangeModulatorType': '300A0348',
    'RangeModulatorDescription': '300A034A',
    'BeamCurrentModulationID': '300A034C',
    'PatientSupportType': '300A0350',
    'PatientSupportID': '300A0352',
    'PatientSupportAccessoryCode': '300A0354',
    'TrayAccessoryCode': '300A0355',
    'FixationLightAzimuthalAngle': '300A0356',
    'FixationLightPolarAngle': '300A0358',
    'MetersetRate': '300A035A',
    'RangeShifterSettingsSequence': '300A0360',
    'RangeShifterSetting': '300A0362',
    'IsocenterToRangeShifterDistance': '300A0364',
    'RangeShifterWaterEquivalentThickness': '300A0366',
    'LateralSpreadingDeviceSettingsSequence': '300A0370',
    'LateralSpreadingDeviceSetting': '300A0372',
    'IsocenterToLateralSpreadingDeviceDistance': '300A0374',
    'RangeModulatorSettingsSequence': '300A0380',
    'RangeModulatorGatingStartValue': '300A0382',
    'RangeModulatorGatingStopValue': '300A0384',
    'RangeModulatorGatingStartWaterEquivalentThickness': '300A0386',
    'RangeModulatorGatingStopWaterEquivalentThickness': '300A0388',
    'IsocenterToRangeModulatorDistance': '300A038A',
    'ScanSpotTimeOffset': '300A038F',
    'ScanSpotTuneID': '300A0390',
    'ScanSpotPrescribedIndices': '300A0391',
    'NumberOfScanSpotPositions': '300A0392',
    'ScanSpotReordered': '300A0393',
    'ScanSpotPositionMap': '300A0394',
    'ScanSpotReorderingAllowed': '300A0395',
    'ScanSpotMetersetWeights': '300A0396',
    'ScanningSpotSize': '300A0398',
    'NumberOfPaintings': '300A039A',
    'IonToleranceTableSequence': '300A03A0',
    'IonBeamSequence': '300A03A2',
    'IonBeamLimitingDeviceSequence': '300A03A4',
    'IonBlockSequence': '300A03A6',
    'IonControlPointSequence': '300A03A8',
    'IonWedgeSequence': '300A03AA',
    'IonWedgePositionSequence': '300A03AC',
    'ReferencedSetupImageSequence': '300A0401',
    'SetupImageComment': '300A0402',
    'MotionSynchronizationSequence': '300A0410',
    'ControlPointOrientation': '300A0412',
    'GeneralAccessorySequence': '300A0420',
    'GeneralAccessoryID': '300A0421',
    'GeneralAccessoryDescription': '300A0422',
    'GeneralAccessoryType': '300A0423',
    'GeneralAccessoryNumber': '300A0424',
    'SourceToGeneralAccessoryDistance': '300A0425',
    'ApplicatorGeometrySequence': '300A0431',
    'ApplicatorApertureShape': '300A0432',
    'ApplicatorOpening': '300A0433',
    'ApplicatorOpeningX': '300A0434',
    'ApplicatorOpeningY': '300A0435',
    'SourceToApplicatorMountingPositionDistance': '300A0436',
    'NumberOfBlockSlabItems': '300A0440',
    'BlockSlabSequence': '300A0441',
    'BlockSlabThickness': '300A0442',
    'BlockSlabNumber': '300A0443',
    'DeviceMotionControlSequence': '300A0450',
    'DeviceMotionExecutionMode': '300A0451',
    'DeviceMotionObservationMode': '300A0452',
    'DeviceMotionParameterCodeSequence': '300A0453',
    'DistalDepthFraction': '300A0501',
    'DistalDepth': '300A0502',
    'NominalRangeModulationFractions': '300A0503',
    'NominalRangeModulatedRegionDepths': '300A0504',
    'DepthDoseParametersSequence': '300A0505',
    'DeliveredDepthDoseParametersSequence': '300A0506',
    'DeliveredDistalDepthFraction': '300A0507',
    'DeliveredDistalDepth': '300A0508',
    'DeliveredNominalRangeModulationFractions': '300A0509',
    'DeliveredNominalRangeModulatedRegionDepths': '300A0510',
    'DeliveredReferenceDoseDefinition': '300A0511',
    'ReferenceDoseDefinition': '300A0512',
    'ReferencedRTPlanSequence': '300C0002',
    'ReferencedBeamSequence': '300C0004',
    'ReferencedBeamNumber': '300C0006',
    'ReferencedReferenceImageNumber': '300C0007',
    'StartCumulativeMetersetWeight': '300C0008',
    'EndCumulativeMetersetWeight': '300C0009',
    'ReferencedBrachyApplicationSetupSequence': '300C000A',
    'ReferencedBrachyApplicationSetupNumber': '300C000C',
    'ReferencedSourceNumber': '300C000E',
    'ReferencedFractionGroupSequence': '300C0020',
    'ReferencedFractionGroupNumber': '300C0022',
    'ReferencedVerificationImageSequence': '300C0040',
    'ReferencedReferenceImageSequence': '300C0042',
    'ReferencedDoseReferenceSequence': '300C0050',
    'ReferencedDoseReferenceNumber': '300C0051',
    'BrachyReferencedDoseReferenceSequence': '300C0055',
    'ReferencedStructureSetSequence': '300C0060',
    'ReferencedPatientSetupNumber': '300C006A',
    'ReferencedDoseSequence': '300C0080',
    'ReferencedToleranceTableNumber': '300C00A0',
    'ReferencedBolusSequence': '300C00B0',
    'ReferencedWedgeNumber': '300C00C0',
    'ReferencedCompensatorNumber': '300C00D0',
    'ReferencedBlockNumber': '300C00E0',
    'ReferencedControlPointIndex': '300C00F0',
    'ReferencedControlPointSequence': '300C00F2',
    'ReferencedStartControlPointIndex': '300C00F4',
    'ReferencedStopControlPointIndex': '300C00F6',
    'ReferencedRangeShifterNumber': '300C0100',
    'ReferencedLateralSpreadingDeviceNumber': '300C0102',
    'ReferencedRangeModulatorNumber': '300C0104',
    'OmittedBeamTaskSequence': '300C0111',
    'ReasonForOmission': '300C0112',
    'ReasonForOmissionDescription': '300C0113',
    'ApprovalStatus': '300E0002',
    'ReviewDate': '300E0004',
    'ReviewTime': '300E0005',
    'ReviewerName': '300E0008',
    'Arbitrary': '40000010',
    'TextComments': '40004000',
    'ResultsID': '40080040',
    'ResultsIDIssuer': '40080042',
    'ReferencedInterpretationSequence': '40080050',
    'ReportProductionStatusTrial': '400800FF',
    'InterpretationRecordedDate': '40080100',
    'InterpretationRecordedTime': '40080101',
    'InterpretationRecorder': '40080102',
    'ReferenceToRecordedSound': '40080103',
    'InterpretationTranscriptionDate': '40080108',
    'InterpretationTranscriptionTime': '40080109',
    'InterpretationTranscriber': '4008010A',
    'InterpretationText': '4008010B',
    'InterpretationAuthor': '4008010C',
    'InterpretationApproverSequence': '40080111',
    'InterpretationApprovalDate': '40080112',
    'InterpretationApprovalTime': '40080113',
    'PhysicianApprovingInterpretation': '40080114',
    'InterpretationDiagnosisDescription': '40080115',
    'InterpretationDiagnosisCodeSequence': '40080117',
    'ResultsDistributionListSequence': '40080118',
    'DistributionName': '40080119',
    'DistributionAddress': '4008011A',
    'InterpretationID': '40080200',
    'InterpretationIDIssuer': '40080202',
    'InterpretationTypeID': '40080210',
    'InterpretationStatusID': '40080212',
    'Impressions': '40080300',
    'ResultsComments': '40084000',
    'LowEnergyDetectors': '40100001',
    'HighEnergyDetectors': '40100002',
    'DetectorGeometrySequence': '40100004',
    'ThreatROIVoxelSequence': '40101001',
    'ThreatROIBase': '40101004',
    'ThreatROIExtents': '40101005',
    'ThreatROIBitmap': '40101006',
    'RouteSegmentID': '40101007',
    'GantryType': '40101008',
    'OOIOwnerType': '40101009',
    'RouteSegmentSequence': '4010100A',
    'PotentialThreatObjectID': '40101010',
    'ThreatSequence': '40101011',
    'ThreatCategory': '40101012',
    'ThreatCategoryDescription': '40101013',
    'ATDAbilityAssessment': '40101014',
    'ATDAssessmentFlag': '40101015',
    'ATDAssessmentProbability': '40101016',
    'Mass': '40101017',
    'Density': '40101018',
    'ZEffective': '40101019',
    'BoardingPassID': '4010101A',
    'CenterOfMass': '4010101B',
    'CenterOfPTO': '4010101C',
    'BoundingPolygon': '4010101D',
    'RouteSegmentStartLocationID': '4010101E',
    'RouteSegmentEndLocationID': '4010101F',
    'RouteSegmentLocationIDType': '40101020',
    'AbortReason': '40101021',
    'VolumeOfPTO': '40101023',
    'AbortFlag': '40101024',
    'RouteSegmentStartTime': '40101025',
    'RouteSegmentEndTime': '40101026',
    'TDRType': '40101027',
    'InternationalRouteSegment': '40101028',
    'ThreatDetectionAlgorithmandVersion': '40101029',
    'AssignedLocation': '4010102A',
    'AlarmDecisionTime': '4010102B',
    'AlarmDecision': '40101031',
    'NumberOfTotalObjects': '40101033',
    'NumberOfAlarmObjects': '40101034',
    'PTORepresentationSequence': '40101037',
    'ATDAssessmentSequence': '40101038',
    'TIPType': '40101039',
    'DICOSVersion': '4010103A',
    'OOIOwnerCreationTime': '40101041',
    'OOIType': '40101042',
    'OOISize': '40101043',
    'AcquisitionStatus': '40101044',
    'BasisMaterialsCodeSequence': '40101045',
    'PhantomType': '40101046',
    'OOIOwnerSequence': '40101047',
    'ScanType': '40101048',
    'ItineraryID': '40101051',
    'ItineraryIDType': '40101052',
    'ItineraryIDAssigningAuthority': '40101053',
    'RouteID': '40101054',
    'RouteIDAssigningAuthority': '40101055',
    'InboundArrivalType': '40101056',
    'CarrierID': '40101058',
    'CarrierIDAssigningAuthority': '40101059',
    'SourceOrientation': '40101060',
    'SourcePosition': '40101061',
    'BeltHeight': '40101062',
    'AlgorithmRoutingCodeSequence': '40101064',
    'TransportClassification': '40101067',
    'OOITypeDescriptor': '40101068',
    'TotalProcessingTime': '40101069',
    'DetectorCalibrationData': '4010106C',
    'AdditionalScreeningPerformed': '4010106D',
    'AdditionalInspectionSelectionCriteria': '4010106E',
    'AdditionalInspectionMethodSequence': '4010106F',
    'AITDeviceType': '40101070',
    'QRMeasurementsSequence': '40101071',
    'TargetMaterialSequence': '40101072',
    'SNRThreshold': '40101073',
    'ImageScaleRepresentation': '40101075',
    'ReferencedPTOSequence': '40101076',
    'ReferencedTDRInstanceSequence': '40101077',
    'PTOLocationDescription': '40101078',
    'AnomalyLocatorIndicatorSequence': '40101079',
    'AnomalyLocatorIndicator': '4010107A',
    'PTORegionSequence': '4010107B',
    'InspectionSelectionCriteria': '4010107C',
    'SecondaryInspectionMethodSequence': '4010107D',
    'PRCSToRCSOrientation': '4010107E',
    'MACParametersSequence': '4FFE0001',
    'SharedFunctionalGroupsSequence': '52009229',
    'PerFrameFunctionalGroupsSequence': '52009230',
    'WaveformSequence': '54000100',
    'ChannelMinimumValue': '54000110',
    'ChannelMaximumValue': '54000112',
    'WaveformBitsAllocated': '54001004',
    'WaveformSampleInterpretation': '54001006',
    'WaveformPaddingValue': '5400100A',
    'WaveformData': '54001010',
    'FirstOrderPhaseCorrectionAngle': '56000010',
    'SpectroscopyData': '56000020',
    'FloatPixelData': '7FE00008',
    'DoubleFloatPixelData': '7FE00009',
    'PixelData': '7FE00010',
    'CoefficientsSDVN': '7FE00020',
    'CoefficientsSDHN': '7FE00030',
    'CoefficientsSDDN': '7FE00040',
    'DigitalSignaturesSequence': 'FFFAFFFA',
    'DataSetTrailingPadding': 'FFFCFFFC',
    'Item': 'FFFEE000',
    'ItemDelimitationItem': 'FFFEE00D',
    'SequenceDelimitationItem': 'FFFEE0DD'
  };
  Object.freeze(keywordToTag);

  /** Determines the mapping of pyramid tile positions to frame numbers.
   *
   * @param {Object} Formatted metadata of a VL Whole Slide Microscopy Image instance
   * @returns {Object} Mapping of pyramid tile position (Row-Column) to frame URI
   * @private
   */

  function getFrameMapping(metadata) {
    const rows = metadata.Rows;
    const columns = metadata.Columns;
    const totalPixelMatrixColumns = metadata.TotalPixelMatrixColumns;
    const totalPixelMatrixRows = metadata.TotalPixelMatrixRows;
    const sopInstanceUID = metadata.SOPInstanceUID;
    let numberOfFrames = metadata.NumberOfFrames || 1;
    numberOfFrames = Number(numberOfFrames);
    let frameOffsetNumber = metadata.ConcatenationFrameOffsetNumber || 0;
    frameOffsetNumber = Number(frameOffsetNumber);
    /*
     * The values "TILED_SPARSE" and "TILED_FULL" were introduced in the 2018
     * of the standard. Older datasets are equivalent to "TILED_SPARSE"
     * even though they may not have a value or a different value.
    */

    const dimensionOrganizationType = metadata.DimensionOrganizationType || 'TILED_SPARSE';
    const tilesPerRow = Math.ceil(totalPixelMatrixColumns / columns);
    const frameMapping = {};

    if (dimensionOrganizationType === 'TILED_FULL') {
      let offset = frameOffsetNumber + 1;
      let limit = frameOffsetNumber + numberOfFrames;

      for (let j = offset; j <= limit; j++) {
        let rowFraction = j / tilesPerRow;
        let rowIndex = Math.ceil(rowFraction);
        let colIndex = j - rowIndex * tilesPerRow + tilesPerRow;
        let index = rowIndex + '-' + colIndex;
        let frameNumber = j - offset + 1;
        frameMapping[index] = `${sopInstanceUID}/frames/${frameNumber}`;
      }
    } else {
      const functionalGroups = metadata.PerFrameFunctionalGroupsSequence;

      for (let j = 0; j < numberOfFrames; j++) {
        let planePositions = functionalGroups[j].PlanePositionSlideSequence[0];
        let rowPosition = planePositions.RowPositionInTotalImagePixelMatrix;
        let columnPosition = planePositions.ColumnPositionInTotalImagePixelMatrix;
        let rowIndex = Math.ceil(rowPosition / rows);
        let colIndex = Math.ceil(columnPosition / columns);
        let index = rowIndex + '-' + colIndex;
        let frameNumber = j + 1;
        frameMapping[index] = `${sopInstanceUID}/frames/${frameNumber}`;
      }
    }

    return frameMapping;
  }
  /** Formats DICOM metadata structured according to the DICOM JSON model into a
   * more human friendly representation, where values of data elements can be
   * directly accessed via their keyword (e.g., "SOPInstanceUID").
   * Bulkdata elements will be skipped.
   *
   * @param {Object} Metadata structured according to the DICOM JSON model
   * @returns {Object} Formatted metadata
   * @memberof metadata
   */


  function formatMetadata(metadata) {
    const loadJSONDataset = elements => {
      const dataset = {};
      Object.keys(elements).forEach(tag => {
        const keyword = tagToKeyword[tag];
        const vr = elements[tag]['vr'];

        if ('BulkDataURI' in elements[tag]) {
          console.debug(`skip bulk data element "${keyword}"`);
        } else if ('Value' in elements[tag]) {
          const value = elements[tag]['Value'];

          if (vr === 'SQ') {
            dataset[keyword] = value.map(item => {
              return loadJSONDataset(item);
            });
          } else {
            // Handle value multiplicity.
            if (value.length === 1) {
              dataset[keyword] = value[0];
            } else {
              dataset[keyword] = value;
            }
          }
        } else {
          if (vr === 'SQ') {
            dataset[keyword] = [];
          } else {
            dataset[keyword] = null;
          }
        }
      });
      return dataset;
    };

    const dataset = loadJSONDataset(metadata); // The top level (lowest resolution) image may be a single frame image in
    // which case the "NumberOfFrames" attribute is optional. We include it for
    // consistency.

    if (!('NumberOfFrames' in dataset)) {
      dataset.NumberOfFrames = 1;
    }

    return dataset;
  }
  /** DICOM VL Whole Slide Microscopy Image instance.
   *
   * @class
   * @memberof metadata
   */


  class VLWholeSlideMicroscopyImage {
    /**
     * @params {Object} options
     * @params {Object} options.metadata - Metadata in DICOM JSON format
     */
    constructor(options) {
      const sopClassUID = options.metadata['00080016']['Value'][0];

      if (sopClassUID !== '1.2.840.10008.5.1.4.1.1.77.1.6') {
        throw new Error('Cannot construct VL Whole Slide Microscopy Image instance ' + `given dataset with SOP Class UID "${sopClassUID}"`);
      }

      const dataset = formatMetadata(options.metadata);
      Object.assign(this, dataset);
    }

  }

  /** Generates a UUID-derived DICOM UID with root `2.25`.
   *
   * @returns {string} Unique identifier
   * @private
   */

  function generateUID() {
    /**
     * A UUID can be represented as a single integer value.
     * http://dicom.nema.org/medical/dicom/current/output/chtml/part05/sect_B.2.html
     * https://www.itu.int/rec/T-REC-X.667-201210-I/en
     * To obtain the single integer value of the UUID, the 16 octets of the
     * binary representation shall be treated as an unsigned integer encoding
     * with the most significant bit of the integer encoding as the most
     * significant bit (bit 7) of the first of the sixteen octets (octet 15) and
     * the least significant bit as the least significant bit (bit 0) of the last
     * of the sixteen octets (octet 0).
     */
    // FIXME: This is not a valid UUID!
    let uid = '2.25.' + Math.floor(1 + Math.random() * 9);

    while (uid.length < 44) {
      uid += Math.floor(1 + Math.random() * 10);
    }

    return uid;
  }
  /** Maps 2D (Column, Row) image coordinate in the Total Pixel Matrix
   * to 3D (X, Y, Z) slide coordinates in the Frame of Reference.
   *
   * @param {Object} options - Options
   * @param {Array} options.offset - X and Y offset in the slide coordinate system
   * @param {Array} options.orientation - Direction cosines along the row and column direction of the Total Pixel Matrix for each of the three axis of the slide coordinate system
   * @param {Array} options.spacing - Spacing between pixels along the Column and Row direction of the Total Pixel Matrix
   * @param {Array} options.piont - Column and Row position of the point in the Total Pixel Matrix
   * @returns {Array} X, Y and Z position of the point in the slide coordinate system
   * @memberof utils
   */


  function mapPixelCoordToSlideCoord(options) {
    // X and Y Offset in Slide Coordinate System
    if (!('offset' in options)) {
      throw new Error('Option "offset" is required.');
    }

    if (!Array.isArray(options.offset)) {
      throw new Error('Option "offset" must be an array.');
    }

    if (options.offset.length !== 2) {
      throw new Error('Option "offset" must be an array with 2 elements.');
    }

    const offset = options.offset; // Image Orientation Slide with direction cosines for Row and Column direction

    if (!('orientation' in options)) {
      throw new Error('Option "orientation" is required.');
    }

    if (!Array.isArray(options.orientation)) {
      throw new Error('Option "orientation" must be an array.');
    }

    if (options.orientation.length !== 6) {
      throw new Error('Option "orientation" must be an array with 6 elements.');
    }

    const orientation = options.orientation; // Pixel Spacing along the Row and Column direction

    if (!('spacing' in options)) {
      throw new Error('Option "spacing" is required.');
    }

    if (!Array.isArray(options.spacing)) {
      throw new Error('Option "spacing" must be an array.');
    }

    if (options.spacing.length !== 2) {
      throw new Error('Option "spacing" must be an array with 2 elements.');
    }

    const spacing = options.spacing; // Row and Column position in the Total Pixel Matrix

    if (!('point' in options)) {
      throw new Error('Option "point" is required.');
    }

    if (!Array.isArray(options.point)) {
      throw new Error('Option "point" must be an array.');
    }

    if (options.point.length !== 2) {
      throw new Error('Option "point" must be an array with 2 elements.');
    }

    const point = options.point;
    const m = [[orientation[0] * spacing[1], orientation[3] * spacing[0], offset[0]], [orientation[1] * spacing[1], orientation[4] * spacing[0], offset[1]], [0, 0, 1]];
    const vImage = [[point[0]], [point[1]], [1]];
    const vSlide = mathjs.multiply(m, vImage);
    const x = Number(vSlide[0][0].toFixed(4));
    const y = Number(vSlide[1][0].toFixed(4));
    return [x, y];
  }
  /** Maps 3D (X, Y, Z) slide coordinate in to the Frame of Reference to
   * 2D (Column, Row) image coordinate in the Total Pixel Matrix.
   *
   * @param {Object} options - Options
   * @param {Array} options.offset - X and Y offset in the slide coordinate system
   * @param {Array} options.orientation - Direction cosines along the row and column direction of the Total Pixel Matrix for each of the three axis of the slide coordinate system
   * @param {Array} options.spacing - Spacing between pixels along the Column and Row direction of the Total Pixel Matrix
   * @param {Array} options.piont - X, Y and Z position of the point in the slide coordinate system
   * @returns {Array} Column and Row position of the point in the Total Pixel Matrix
   * @memberof utils
   */


  function mapSlideCoordToPixelCoord(options) {
    // X and Y Offset in Slide Coordinate System
    if (!('offset' in options)) {
      throw new Error('Option "offset" is required.');
    }

    if (!Array.isArray(options.offset)) {
      throw new Error('Option "offset" must be an array.');
    }

    if (options.offset.length !== 2) {
      throw new Error('Option "offset" must be an array with 2 elements.');
    }

    const offset = options.offset; // Image Orientation Slide with direction cosines for Row and Column direction

    if (!('orientation' in options)) {
      throw new Error('Option "orientation" is required.');
    }

    if (!Array.isArray(options.orientation)) {
      throw new Error('Option "orientation" must be an array.');
    }

    if (options.orientation.length !== 6) {
      throw new Error('Option "orientation" must be an array with 6 elements.');
    }

    const orientation = options.orientation; // Pixel Spacing along the Row and Column direction

    if (!('spacing' in options)) {
      throw new Error('Option "spacing" is required.');
    }

    if (!Array.isArray(options.spacing)) {
      throw new Error('Option "spacing" must be an array.');
    }

    if (options.spacing.length !== 2) {
      throw new Error('Option "spacing" must be an array with 2 elements.');
    }

    const spacing = options.spacing; // X and Y coordinate in the Slide Coordinate System

    if (!('point' in options)) {
      throw new Error('Option "point" is required.');
    }

    if (!Array.isArray(options.point)) {
      throw new Error('Option "point" must be an array.');
    }

    if (options.point.length !== 2) {
      throw new Error('Option "point" must be an array with 2 elements.');
    }

    const point = options.point;
    const m = [[orientation[0] * spacing[1], orientation[3] * spacing[0], offset[0]], [orientation[1] * spacing[1], orientation[4] * spacing[0], offset[1]], [0, 0, 1]];
    const mInverted = mathjs.inv(m);
    const vSlide = [[point[0]], [point[1]], [1]];
    const vImage = mathjs.multiply(mInverted, vSlide);
    const row = Number(vImage[1][0].toFixed(4));
    const col = Number(vImage[0][0].toFixed(4));
    return [col, row];
  }

  const _uid = Symbol('uid');

  const _scoord3d = Symbol('scoord3d');

  const _properties = Symbol('properties');
  /** A region of interest (ROI)
   *
   * @class
   * @memberof roi
   */


  class ROI {
    /* Creates a new ROI object.
     *
     * @param {Object} options - Options for construction of ROI
     * @param {Scoord3D} options.scoord3d - Spatial 3D coordinates
     * @param {string} options.uid - Unique idenfifier
     * @param {Object} options.properties - Qualititative evaluations
     */
    constructor(options) {
      if (!('scoord3d' in options)) {
        throw new Error('spatial coordinates are required for ROI');
      }

      if (!(typeof options.scoord3d === 'object' || options.scoord3d !== null)) {
        throw new Error('scoord3d of ROI must be a Scoord3D object');
      }

      if (!('uid' in options)) {
        this[_uid] = generateUID();
      } else {
        if (!(typeof options.uid === 'string' || options.uid instanceof String)) {
          throw new Error('uid of ROI must be a string');
        }

        this[_uid] = options.uid;
      }

      this[_scoord3d] = options.scoord3d;
      this[_properties] = options.properties; // TODO: store SOPInstanceUID, SOPClassUID and FrameNumbers as reference
    }
    /** Gets unique identifier of region of interest.
     *
     * @returns {string} Unique identifier
     */


    get uid() {
      return this[_uid];
    }
    /** Gets spatial coordinates of region of interest.
     *
     * @returns {Scoord3D} Spatial coordinates
     */


    get scoord3d() {
      return this[_scoord3d];
    }
    /** Gets properties of region of interest.
     *
     * @returns {Object} Properties
     */


    get properties() {
      return this[_properties];
    }

  }

  const _coordinates = Symbol('coordinates');

  const _frameOfReferenceUID = Symbol('frameOfReferenceUID');

  const _fiducialUID = Symbol('fiducialUID');

  class Scoord3D {
    constructor(options) {
      if (!(typeof options.frameOfReferenceUID === 'string' || options.frameOfReferenceUID instanceof String)) {
        throw new Error('frameOfReferenceUID of Scoord3D must be a string');
      }

      this[_frameOfReferenceUID] = options.frameOfReferenceUID;
      options.fiducialUID = options.fiducialUID || generateUID();

      if (!(typeof options.fiducialUID === 'string' || options.fiducialUID instanceof String)) {
        throw new Error('fiducialUID of Scoord3D must be a string');
      }

      this[_fiducialUID] = options.fiducialUID;

      if (!Array.isArray(options.coordinates)) {
        throw new Error('coordinates of Scoord3D must be an array');
      }

      this[_coordinates] = options.coordinates;
    }
    /** Graphic Data
     *
     * @type {number[][]}
     */


    get graphicData() {
      return this[_coordinates];
    }
    /** Graphic Type
     *
     * @type {string}
     */


    get graphicType() {
      throw new Error('Prototype property "graphicType" must be implemented');
    }
    /** Frame of Reference UID
     *
     * @type {string}
     */


    get frameOfReferenceUID() {
      return this[_frameOfReferenceUID];
    }
    /** Fiducial UID
     *
     * @type {string}
     */


    get fiducialUID() {
      return this[_fiducialUID];
    }

  }
  /** POINT graphic denoted by a single (X,Y,Z) triplet.
   *
   * @class
   * @extends Scoord3D
   * @memberof scoord3d
   */


  class Point extends Scoord3D {
    /** Creates a new Point object.
     *
     * @param {Object} options
     * @param {string} options.frameOfReferenceUID - Unique identifier of the Frame of Reference
     * @param {number[]} options.coordinates - X, Y and Z coordinate.
     * @param {string} [options.fiducialUID] - Unique identifier of an imaging fiducial
     */
    constructor(options) {
      if (!Array.isArray(options.coordinates)) {
        throw new Error('coordinates of Point must be an array');
      }

      if (options.coordinates.length !== 3) {
        throw new Error('coordinates of Point must be an array of length 3');
      }

      if (options.coordinates.some(c => c < 0)) {
        throw new Error('coordinates of Point must be positive numbers');
      }

      super({
        coordinates: options.coordinates,
        frameOfReferenceUID: options.frameOfReferenceUID,
        fiducialUID: options.fiducialUID
      });
    }
    /** Graphic Data
     *
     * @type {number[]}
     */


    get graphicData() {
      return this[_coordinates];
    }

    get graphicType() {
      return 'POINT';
    }

  }
  /** MULTIPOINT graphic denoted by multiple, coplanar (X,Y,Z) coordinates that
   * represent individual points.
   *
   * @class
   * @extends Scoord3D
   * @memberof scoord3d
   */


  class Multipoint extends Scoord3D {
    /** Creates a new Multipoint object.
     *
     * @param {Object} options
     * @param {string} options.frameOfReferenceUID - Unique identifier of the Frame of Reference
     * @param {number[][]} options.coordinates - X, Y and Z coordinate of each point.
     * @param {string} [options.fiducialUID] - Unique identifier of an imaging fiducial
     */
    constructor(options) {
      if (!Array.isArray(options.coordinates)) {
        throw new Error('coordinates of Multipoint must be an array');
      }

      if (options.coordinates.find(c => c.length !== 3) !== undefined) {
        throw new Error('coordinates of Multipoint must be an array of (X,Y,Z) triplets');
      }

      if (options.coordinates.find(c => c.some(item => item < 0))) {
        throw new Error('coordinates of Multipoint must be positive numbers');
      }

      super({
        coordinates: options.coordinates,
        frameOfReferenceUID: options.frameOfReferenceUID,
        fiducialUID: options.fiducialUID
      });
    }

    get graphicType() {
      return 'MULTIPOINT';
    }

  }
  /** POLYLINE graphic denoted by multiple, ordered (X,Y,Z) coordinates that
   * represent vertices of connected line segments.
   *
   * @class
   * @extends Scoord3D
   * @memberof scoord3d
   */


  class Polyline extends Scoord3D {
    /** Creates a new Polyline object.
     *
     * @param {Object} options
     * @param {string} options.frameOfReferenceUID - Unique identifier of the Frame of Reference
     * @param {number[][]} options.coordinates - (X,Y,Z) coordinates of point on the line
     * @param {string} [options.fiducialUID] - Unique identifier of an imaging fiducial
     */
    constructor(options) {
      if (!Array.isArray(options.coordinates)) {
        throw new Error('coordinates of Polyline must be an array');
      }

      if (options.coordinates.find(c => c.length !== 3) !== undefined) {
        throw new Error('coordinates of Polyline must be an array of (X,Y,Z) triplets');
      }

      if (options.coordinates.find(c => c.some(item => item < 0))) {
        throw new Error('coordinates of Polyline must be positive numbers');
      }

      super({
        coordinates: options.coordinates,
        frameOfReferenceUID: options.frameOfReferenceUID,
        fiducialUID: options.fiducialUID
      });
    }

    get graphicType() {
      return 'POLYLINE';
    }

  }
  /** POLYGON graphic denoted by multiple, ordered, coplaner (X,Y,Z) coordinates
   * that represent vertices of connected line segments.
   * The first and last coordinate should be identical.
   *
   * @class
   * @extends Scoord3D
   * @memberof scoord3d
   */


  class Polygon extends Scoord3D {
    /** Creates a new Polygon object.
     *
     * @param {Object} options
     * @param {string} options.frameOfReferenceUID - Unique identifier of the Frame of Reference
     * @param {number[][]} options.coordinates - (X,Y,Z) coordinates of points on the perimeter of the polygon (first and last coordinate must be the same).
     * @param {string} [options.fiducialUID] - Unique identifier of an imaging fiducial
     */
    constructor(options) {
      if (!Array.isArray(options.coordinates)) {
        throw new Error('coordinates of Polygon must be an array');
      }

      if (options.coordinates.find(c => c.length !== 3) !== undefined) {
        throw new Error('coordinates of Polygon must be an array of (X,Y,Z) triplets');
      }

      if (options.coordinates.find(c => c.some(item => item < 0))) {
        throw new Error('coordinates of Polygon must be positive numbers');
      }

      const n = options.coordinates.length;

      if (options.coordinates[0][0] !== options.coordinates[n - 1][0] || options.coordinates[0][1] !== options.coordinates[n - 1][1] || options.coordinates[0][2] !== options.coordinates[n - 1][2]) {
        throw new Error('first and last coordinate of Polygon must be the same');
      }

      super({
        coordinates: options.coordinates,
        frameOfReferenceUID: options.frameOfReferenceUID,
        fiducialUID: options.fiducialUID
      });
    }

    get graphicType() {
      return 'POLYGON';
    }

  }
  /** ELLIPSOID graphic denoted by six (X,Y,Z) coordinates that represent
   * endpoints of the three orthogonal geometric axes, where the first and second
   * coordinates represent the endpoints of the first axis, the third and forth
   * coordinates represent the endpoints of the second axis and the fifth and
   * sixth coordinates represent the endpoints of the third axis.
   *
   * @class
   * @extends Scoord3D
   * @memberof scoord3d
   */


  class Ellipsoid extends Scoord3D {
    /** Creates a new Ellipsoid object.
     *
     * @param {Object} options
     * @param {string} options.frameOfReferenceUID - Unique identifier of the Frame of Reference
     * @param {number[][]} options.coordinates - (X,Y,Z) coordinates of the three axes endpoints
     * @param {string} [options.fiducialUID] - Unique identifier of an imaging fiducial
     */
    constructor(options) {
      if (!Array.isArray(options.coordinates)) {
        throw new Error('coordinates of Ellipsoid must be an array');
      }

      if (options.coordinates.length !== 6) {
        throw new Error('coordinates of Ellipsoid must be an array of length 6');
      }

      if (options.coordinates.find(c => c.length !== 3) !== undefined) {
        throw new Error('coordinates of Ellipsoid must be an array of (X,Y,Z) triplets');
      }

      if (options.coordinates.find(c => c.some(item => item < 0))) {
        throw new Error('coordinates of Ellipsoid must be positive numbers');
      }

      super({
        coordinates: options.coordinates,
        frameOfReferenceUID: options.frameOfReferenceUID,
        fiducialUID: options.fiducialUID
      });
    }

    get graphicType() {
      return 'ELLIPSOID';
    }

  }
  /** ELLIPSE graphic denoted by four, coplaner (X,Y,Z) coordinates that represent
   * the endpoints of the major and minor axes, where the first and second
   * coordinates represent the endpoints of the major axis and the third and
   * forth coordinates represent the endpoints of the minor axis.
   *
   * @class
   * @extends Scoord3D
   * @memberof scoord3d
   */


  class Ellipse extends Scoord3D {
    /** Creates a new Ellipse object.
     *
     * @param {Object} options
     * @param {string} options.frameOfReferenceUID - Unique identifier of the Frame of Reference
     * @param {number[][]} options.coordinates - (X,Y,Z) coordinates of the major and minor axes endpoints
     * @param {string} [options.fiducialUID] - Unique identifier of an imaging fiducial
     */
    constructor(options) {
      if (!Array.isArray(options.coordinates)) {
        throw new Error('coordinates of Ellipse must be an array');
      }

      if (options.coordinates.length !== 4) {
        throw new Error('coordinates of Ellipse must be an array of length 4');
      }

      if (options.coordinates.find(c => c.length !== 3) !== undefined) {
        throw new Error('coordinates of Ellipse must be an array of (X,Y,Z) triplets');
      }

      if (options.coordinates.find(c => c.some(item => item < 0))) {
        throw new Error('coordinates of Ellipse must be positive numbers');
      }

      const firstAxis = [options.coordinates[0][0] - options.coordinates[1][0], options.coordinates[0][1] - options.coordinates[1][1]];
      const secondAxis = [options.coordinates[2][0] - options.coordinates[3][0], options.coordinates[2][1] - options.coordinates[3][1]];
      const firstAxisNorm = Math.sqrt(Math.pow(firstAxis[0], 2) + Math.pow(firstAxis[1], 2));
      const secondAxisNorm = Math.sqrt(Math.pow(secondAxis[0], 2) + Math.pow(secondAxis[1], 2));
      const dotProduct = firstAxis[0] * secondAxis[0] + firstAxis[1] * secondAxis[1];
      const angle = Math.acos(dotProduct / (firstAxisNorm * secondAxisNorm));
      const degrees = angle * 180 / Math.PI;

      if (degrees !== 90) {
        throw new Error('Two axis of Ellipse must have right angle');
      }

      var coordinates = options.coordinates;

      if (firstAxisNorm < secondAxisNorm) {
        coordinates = [coordinates[2], coordinates[3], coordinates[0], coordinates[1]];
      }

      super({
        coordinates: coordinates,
        frameOfReferenceUID: options.frameOfReferenceUID,
        fiducialUID: options.fiducialUID
      });
    }

    get graphicType() {
      return 'ELLIPSE';
    }

  }

  /**
   * Triggers a CustomEvent.
   *
   * @param {EventTarget} el The element or EventTarget to trigger the event upon
   * @param {string} type The event type name
   * @param {Object|null} payload=null The event data to be sent
   * @returns {boolean} The return value is false if at least one event listener called preventDefault(). Otherwise it returns true.
   * @private
   */
  let publish = (el, type, payload = null) => {
    let event;
    const detail = {
      payload,
      time: new Date()
    }; // This check is needed to polyfill CustomEvent on IE11-

    if (typeof window.CustomEvent === 'function') {
      event = new CustomEvent(type, {
        detail,
        bubbles: true,
        cancelable: true
      });
    } else {
      event = document.createEvent('CustomEvent');
      event.initCustomEvent(type, true, true, detail);
    }

    return el.dispatchEvent(event);
  };

  const {
    ArrowGeometry: ArrowGeometry$1,
    LengthGeometry: LengthGeometry$1,
    FreeTextGeometry: FreeTextGeometry$1
  } = Geometries$1;

  const init = ({
    map,
    source
  }) => {
    const markerManager = new MarkerManager({
      map,
      geometries: [CustomGeometry.Length, CustomGeometry.Arrow],
      unlinkGeometries: [CustomGeometry.FreeText],
      undraggableGeometries: [CustomGeometry.FreeText],
      formatters: {
        [CustomGeometry.Length]: LengthGeometry$1.format,
        [CustomGeometry.Arrow]: ArrowGeometry$1.format,
        [CustomGeometry.FreeText]: FreeTextGeometry$1.format
      }
    });
    LengthGeometry$1.init({
      markerManager,
      map,
      source
    });
    ArrowGeometry$1.init({
      markerManager,
      map,
      source
    });
    FreeTextGeometry$1.init({
      markerManager,
      map,
      source
    });
  };

  /**
   * Builds a new LineString instance with the shortest
   * distance between a given overlay and a feature.
   * 
   * @param {object} feature The feature
   * @param {object} overlay The overlay instance
   * @returns {LineString} The smallest line between the overlay and feature
   */

  const getShortestLineBetweenOverlayAndFeature = (feature, overlay) => {
    let result;
    let distanceSq = Infinity;
    const featureGeometry = feature.getGeometry();
    const geometry = featureGeometry.getLinearRing ? featureGeometry.getLinearRing(0) : featureGeometry;
    geometry.getCoordinates().forEach(coordinates => {
      const closest = overlay.getPosition();
      const distanceNew = Math.pow(closest[0] - coordinates[0], 2) + Math.pow(closest[1] - coordinates[1], 2);

      if (distanceNew < distanceSq) {
        distanceSq = distanceNew;
        result = [coordinates, closest];
      }
    });
    const coordinates = overlay.getPosition();
    const closest = geometry.getClosestPoint(coordinates);
    const distanceNew = Math.pow(closest[0] - coordinates[0], 2) + Math.pow(closest[1] - coordinates[1], 2);

    if (distanceNew < distanceSq) {
      distanceSq = distanceNew;
      result = [closest, coordinates];
    }

    return new LineString__default['default'](result);
  };

  const MapEvents = {
    POINTER_MOVE: 'pointermove',
    POINTER_UP: 'pointerup'
  };

  class MarkerManager {
    constructor({
      map,
      geometries,
      unlinkGeometries = [],
      undraggableGeometries = [],
      formatters
    } = {}) {
      this._markers = {};
      this._listeners = {};
      this._unlinkGeometries = unlinkGeometries;
      this._undraggableGeometries = undraggableGeometries;
      this._geometries = geometries;
      this._formatters = formatters;
      this._links = new Collection__default['default']([], {
        unique: true
      });
      this._map = map;
      const styleTag = document.createElement('style');
      styleTag.innerHTML = `
      .ol-tooltip {
        color: #9ccef9;
        padding: 4px 8px;
        white-space: nowrap;
        font-size: 14px;
        position: absolute;
      }
      .ol-tooltip-measure { opacity: 1; }
      .ol-tooltip-static { color: #9ccef9; }
      .ol-tooltip-measure:before,
      .ol-tooltip-static:before {
        content: '',
      }

      #marker { cursor: move; }
      .marker-container { display: block !important; }
    `;
      const linksVector = new VectorLayer__default['default']({
        source: new VectorSource__default['default']({
          features: this._links
        }),
        style: [new Style__default['default']({
          stroke: new Stroke__default['default']({
            color: '#9ccef9',
            lineDash: [.3, 7],
            width: 3
          })
        })]
      });

      this._map.addOverlay(new Overlay__default['default']({
        element: styleTag
      }));

      this._map.addLayer(linksVector);

      this.onInteractionsChange(this._map.getInteractions());
      /** Bind events */

      this._onDrawStart = this._onDrawStart.bind(this);
      this._onDrawEnd = this._onDrawEnd.bind(this);
      this._onTranslateStart = this._onTranslateStart.bind(this);
      this._onModifyStart = this._onModifyStart.bind(this);
    }

    isValidLink(feature) {
      return !this._unlinkGeometries.includes(feature.getGeometryName());
    }

    isValidDrag(feature) {
      return !this._undraggableGeometries.includes(feature.getGeometryName());
    }
    /**
     * Returns a marker
     * 
     * @param {string} id The marker id
     * @return {object} The marker
     */


    get(id) {
      return this._markers[id];
    }
    /**
     * Removes a marker
     * 
     * @param {string} id The marker id
     * @return {string} The marker id
     */


    remove(id) {
      const marker = this.get(id);

      if (marker) {
        this._map.removeOverlay(marker.overlay);

        this._markers[id] = null;

        const drawnLink = this._links.getArray().find(feature => feature.ol_uid === id);

        if (drawnLink) this._links.remove(drawnLink);
        if (this._listeners[id]) this._listeners[id] = null;
      }

      return id;
    }
    /**
     * Sets a marker
     * 
     * @param {object} marker The marker
     * @return {void}
     */


    set(marker) {
      this._markers[marker.id] = marker;
    }
    /**
     * Creates a new marker
     * 
     * @param {Feature} feature The feature to plug the measure marker
     * @param {string} id The marker id
     * @return {string} The marker id
     */


    create({
      id,
      feature,
      element: defaultElement,
      overlay: defaultOverlay,
      value
    }) {
      if (!this._isValidFeature(feature)) {
        console.warn('Invalid feature geometry:', feature.getGeometryName());
        return;
      }

      if (this._markers[uid]) return this._markers[uid];
      const uid = id;

      if (!this._markers[uid]) {
        this._markers[uid] = {
          id: uid
        };

        this._markers[uid].drawLink = feature => this._drawLink(feature, this._markers[uid]);

        const element = document.createElement('div');
        element.id = this.isValidDrag(feature) ? 'marker' : '';
        element.className = 'ol-tooltip ol-tooltip-measure';
        element.innerHTML = value ? value : '';
        this._markers[uid].element = defaultElement || element;
        this._markers[uid].overlay = defaultOverlay || new Overlay__default['default']({
          className: 'marker-container',
          positioning: 'center-center',
          stopEvent: false,
          dragging: false,
          element
        });
        const coordinate = feature.getGeometry().getLastCoordinate();

        this._markers[uid].overlay.setPosition(coordinate);

        this._drawLink(feature, this._markers[uid]);

        let dragPan;
        let dragProperty = 'dragging';

        this._map.getInteractions().forEach(interaction => {
          if (interaction instanceof DragPan__default['default']) {
            dragPan = interaction;
          }
        });

        element.addEventListener('mousedown', () => {
          const marker = this._markers[uid];

          if (marker) {
            dragPan.setActive(false);
            marker.overlay.set(dragProperty, true);
          }
        });

        this._map.on(MapEvents.POINTER_MOVE, event => {
          const marker = this._markers[uid];

          if (marker && marker.overlay.get(dragProperty) === true && this.isValidDrag(feature)) {
            marker.overlay.setPosition(event.coordinate);
            marker.drawLink(feature);
          }
        });

        this._map.on(MapEvents.POINTER_UP, () => {
          const marker = this._markers[uid];

          if (marker && marker.overlay.get(dragProperty) === true && this.isValidDrag(feature)) {
            dragPan.setActive(true);
            marker.overlay.set(dragProperty, false);
          }
        });

        this._map.addOverlay(this._markers[uid].overlay);

        return this._markers[uid];
      }

      return this._markers[uid];
    }
    /**
     * Checks if feature has correct geometry 
     * 
     * @param {Feature} feature The feature
     */


    _isValidFeature(feature) {
      return this._geometries.includes(feature.getGeometryName());
    }
    /**
     * Update marker content
     * 
     * @param {string} id The marker id
     * @param {string} value The marker content
     * @param {string} coordinate The marker coordinate
     */


    updateMarker({
      id,
      value,
      coordinate
    }) {
      const marker = this.get(id);

      if (marker) {
        marker.element.innerHTML = value;
        if (coordinate) marker.overlay.setPosition(coordinate);
        this.set({
          id,
          ...marker
        });
      }
    }
    /**
     * This utility makes use of the unByKey to unbind an event
     * 
     * @param {string} eventKey The event name/key
     */


    _unbindEvent(eventKey) {
      if (this._listeners[eventKey]) {
        Observable.unByKey(this._listeners[eventKey]);
        this._listeners[eventKey] = null;
      }
    }

    /**
     * Updates marker location on geometry change
     * 
     * @param {object} event The event
     */
    _updateMarkerLocation(event) {
      event.features.forEach(feature => {
        if (this._isValidFeature(feature)) {
          this._updateMarkerOnGeometryChange({
            feature,
            coordinate: event.coordinate
          });
        }
      });
    }
    /**
     * This event is responsible to unbind the previsouly set listener on drawstart
     * and assign marker classes
     * 
     * @param {object} event The event
     */


    _onDrawEnd(event) {
      const feature = event.feature;

      if (this._isValidFeature(feature)) {
        const featureId = feature.ol_uid;
        const marker = this.get(featureId);

        if (marker) {
          marker.element.className = 'ol-tooltip ol-tooltip-static';
          marker.overlay.setOffset([0, -7]);
          this.set({
            id: featureId,
            ...marker
          });
          Observable.unByKey(this._listeners['drawend']);
        }
      }
    }

    _getFormatter(feature) {
      const geometryName = feature.getGeometryName();
      const formatter = this._formatters[geometryName];
      if (!formatter) return () => '';
      return formatter;
    }

    /**
     * Update marker location on geometry change
     * 
     * @param {object} feature The feature
     * @param {object} coordinate The marker coordinate
     */
    _updateMarkerOnGeometryChange({
      feature,
      coordinate
    }) {
      let markerCoordinate = coordinate;
      const featureId = feature.ol_uid;
      const geometry = feature.getGeometry();
      this._listeners[featureId] = geometry.on('change', event => {
        const marker = this.get(featureId);

        if (marker) {
          let currentGeometry = event.target;

          let output = this._getFormatter(feature)(feature, currentGeometry);

          markerCoordinate = currentGeometry.getLastCoordinate();
          this.updateMarker({
            id: featureId,
            value: output,
            coordinate: markerCoordinate
          });
          marker.drawLink(feature);
        }
      });
    }

    onInteractionsChange(interactions) {
      if (interactions.draw) {
        this._unbindEvent('drawstart');

        this._unbindEvent('drawend');

        this._listeners['drawstart'] = interactions.draw.on('drawstart', this._onDrawStart);
        this._listeners['drawend'] = interactions.draw.on('drawend', this._onDrawEnd);
      }

      if (interactions.translate) {
        this._unbindEvent('translatestart');

        this._listeners['translatestart'] = interactions.translate.on('translatestart', this._onTranslateStart);
      }

      if (interactions.modify) {
        this._unbindEvent('modifystart');

        this._listeners['modifystart'] = interactions.modify.on('modifystart', this._onModifyStart);
      }
    }
    /**
     * Create or update the marker on drawstart
     * and cache it
     * 
     * @param {object} event The drawstart event
     */


    _onDrawStart(event) {
      const feature = event.feature;

      if (this._isValidFeature(feature)) {
        this.create({
          id: feature.ol_uid,
          feature
        });

        this._updateMarkerOnGeometryChange({
          feature,
          coordinate: event.coordinate
        });
      }
    }
    /**
     * Update marker location on translatestart
     * 
     * @param {object} event The translatestart event
     */


    _onTranslateStart(event) {
      this._updateMarkerLocation(event);
    }

    /**
     * Update marker location on modifystart
     * 
     * @param {object} event The modifystart event
     */
    _onModifyStart(event) {
      this._updateMarkerLocation(event);
    }

    _drawLink(feature, marker) {
      if (!this.isValidLink(feature)) return;
      const line = getShortestLineBetweenOverlayAndFeature(feature, marker.overlay);

      const updated = this._links.getArray().some(feature => {
        if (feature.getId() === marker.id) {
          feature.setGeometry(line);
          return true;
        }
      });

      if (!updated) {
        const feature = new Feature__default['default']({
          geometry: line,
          name: 'Line'
        });
        feature.setId(marker.id);

        this._links.push(feature);
      }
    }

  }

  const emptyFill = new Fill__default['default']({
    color: 'rgba(255,255,255,0.0)'
  });
  const defaultStroke = new Stroke__default['default']({
    color: '#3399CC',
    width: 3
  });
  const defaultStyle = new Style__default['default']({
    image: new Circle__default['default']({
      fill: emptyFill,
      stroke: defaultStroke,
      radius: 5
    }),
    fill: emptyFill,
    stroke: defaultStroke
  });

  const getStyleFunction = options => {
    return (feature, resolution) => {
      const geometry = feature.getGeometry();
      const styles = [];

      if (options && 'style' in options) {
        styles.push(options.style);
      }

      if (isArrow(feature)) {
        styles.push(defaultStyle);
        geometry.forEachSegment((start, end) => {
          const dx = end[0] - start[0];
          const dy = end[1] - start[1];
          const rotation = Math.atan2(dy, dx);
          /** Arrow */

          styles.push(new Style__default['default']({
            geometry: new Point__default['default'](start),
            image: new Icon__default['default']({
              src: 'https://openlayers.org/en/latest/examples/data/arrow.png',
              anchor: [0.75, 0.5],
              rotateWithView: true,
              rotation: -rotation
            })
          }));
        });
      }

      return styles;
    };
  };

  const isArrow = feature => CustomGeometry.Arrow === feature.getGeometryName();

  const getDefinition = options => {
    const styleFunction = getStyleFunction(options);
    /** Arrow Geometry Definition */

    return {
      arrow: {
        type: 'LineString',
        name: 'ArrowAnnotation',
        geometryName: CustomGeometry.Arrow,
        freehand: false,
        maxPoints: 1,
        minPoints: 1,
        style: styleFunction
      }
    };
  };
  /**
   * Format arrow output
   * @param {LineString} arrow geometry
   * @return {string} The formatted output
   */


  const formatArrow = (feature, geometry) => {
    const properties = feature.getProperties();
    return properties.label || '';
  };

  let api;
  const ArrowGeometry$2 = {
    init: apiInstance => api = apiInstance,
    getROIProperties: (feature, properties = {}) => {
      return isArrow(feature) ? { ...properties,
        geometryName: CustomGeometry.Arrow
      } : properties;
    },
    onAdd: (feature, properties = {}) => {
      if (isArrow(feature)) {
        console.debug('ArrowGeometry: onAdd', feature);
        api.markerManager.create({
          id: feature.ol_uid,
          feature,
          value: formatArrow(feature)
        });
        feature.setStyle(getStyleFunction(properties));
      }
    },
    onUpdate: feature => {
      if (isArrow(feature)) {
        api.markerManager.updateMarker({
          id: feature.ol_uid,
          value: formatArrow(feature)
        });
      }
    },
    onRemove: feature => {
      if (isArrow(feature)) {
        console.debug('ArrowGeometry: onRemove');
        const featureId = feature.ol_uid;
        api.markerManager.remove(featureId);
      }
    },
    onInteractionsChange: () => {},
    getDefinition,
    isArrow,
    format: formatArrow,
    style: getStyleFunction
  };

  const getStyleFunction$1 = options => {
    return (feature, resolution) => {
      const styles = [];

      if (isLength(feature)) {
        styles.push(defaultStyle);
      }

      return styles;
    };
  };
  /**
   * Format length output
   * @param {LineString} line geometry
   * @return {string} The formatted output
   */


  const formatLength = (feature, geometry) => {
    const line = feature ? feature.getGeometry() : geometry;
    const length = sphere.getLength(line);
    let output = Math.round(length / 10 * 100) / 100 + ' ' + 'mm';
    return output;
  };

  const isLength = feature => CustomGeometry.Length === feature.getGeometryName();

  let api$1;
  const LengthGeometry$2 = {
    init: apiInstance => api$1 = apiInstance,
    getROIProperties: (feature, properties = {}) => {
      return isLength(feature) ? { ...properties,
        geometryName: CustomGeometry.Length
      } : properties;
    },
    onInteractionsChange: interactions => {
      api$1.markerManager.onInteractionsChange(interactions);
    },
    onRemove: feature => {
      if (isLength(feature)) {
        console.debug('LengthGeometry: onRemove');
        const featureId = feature.ol_uid;
        api$1.markerManager.remove(featureId);
      }
    },
    onAdd: (feature, properties = {}) => {
      if (isLength(feature)) {
        console.debug('LengthGeometry: onAdd');
        api$1.markerManager.create({
          id: feature.ol_uid,
          feature,
          value: formatLength(feature)
        });
        feature.setStyle(getStyleFunction$1());
      }
    },
    onUpdate: feature => {},
    getDefinition: options => {
      const styleFunction = getStyleFunction$1();
      /** Length Geometry Definition */

      return {
        length: {
          type: 'LineString',
          geometryName: CustomGeometry.Length,
          freehand: false,
          maxPoints: 1,
          minPoints: 1,
          style: styleFunction
        }
      };
    },
    isLength,
    format: formatLength,
    style: getStyleFunction$1
  };

  const isFreeText = feature => CustomGeometry.FreeText === feature.getGeometryName();

  const getStyleFunction$2 = options => {
    return (feature, resolution) => {
      const styles = [];

      if (isFreeText(feature)) {
        styles.push(new Style__default['default']({
          text: new Text__default['default']({
            font: '14px sans-serif',
            overflow: true,
            fill: new Fill__default['default']({
              color: '#9ccef9'
            }),
            text: feature.get('label')
          })
        }));
        styles.push(new Style__default['default']({
          image: new Circle__default['default']({
            fill: new Fill__default['default']({
              color: 'rgba(255,255,255,0.0)'
            }),
            stroke: new Stroke__default['default']({
              color: 'rgba(255,255,255,0.0)',
              width: 0
            }),
            radius: 15
          })
        }));
      }

      return styles;
    };
  };

  const getDefinition$1 = options => {
    const styleFunction = getStyleFunction$2();
    /** FreeText Geometry Definition */

    return {
      freetext: {
        type: 'Point',
        geometryName: CustomGeometry.FreeText,
        style: styleFunction
      }
    };
  };
  /**
   * Format free text output
   * @param {LineString} freetext geometry
   * @return {string} The formatted output
   */


  const formatFreeText = (feature, geometry) => {
    const properties = feature.getProperties();
    return properties.label || '';
  };

  let api$2;
  const FreeTextGeometry$2 = {
    init: apiInstance => api$2 = apiInstance,
    getROIProperties: (feature, properties = {}) => {
      return isFreeText(feature) ? { ...properties,
        geometryName: CustomGeometry.FreeText
      } : properties;
    },
    onAdd: (feature, properties = {}) => {
      if (isFreeText(feature)) {
        console.debug('FreeTextGeometry: onAdd');
        feature.setStyle(getStyleFunction$2());
      }
    },
    onUpdate: feature => {
      if (isFreeText(feature)) {
        console.debug('FreeTextGeometry: onUpdate');
        feature.changed();
      }
    },
    onRemove: feature => {
      if (isFreeText(feature)) {
        console.debug('FreeTextGeometry: onRemove');
      }
    },
    onInteractionsChange: () => {},
    getDefinition: getDefinition$1,
    isFreeText,
    format: formatFreeText,
    style: getStyleFunction$2,
    hitTolerance: 15
  };

  var Geometries$1 = {
    ArrowGeometry,
    LengthGeometry,
    FreeTextGeometry
  };

  const CustomGeometry = {
    Length: 'Length',
    Arrow: 'Arrow',
    FreeText: 'FreeText'
  };
  const commonAPI = {
    onInteractionsChange: interactions => {
      LengthGeometry$2.onInteractionsChange(interactions);
      ArrowGeometry$2.onInteractionsChange(interactions);
      FreeTextGeometry$2.onInteractionsChange(interactions);
    },
    onAdd: (feature, properties) => {
      ArrowGeometry$2.onAdd(feature, properties);
      LengthGeometry$2.onAdd(feature, properties);
      FreeTextGeometry$2.onAdd(feature, properties);
    },
    onRemove: feature => {
      LengthGeometry$2.onRemove(feature);
      ArrowGeometry$2.onRemove(feature);
      FreeTextGeometry$2.onRemove(feature);
    },
    onUpdate: feature => {
      ArrowGeometry$2.onUpdate(feature);
      LengthGeometry$2.onUpdate(feature);
      FreeTextGeometry$2.onUpdate(feature);
    },
    getROIProperties: (feature, properties = {}) => {
      return { ...properties,
        ...ArrowGeometry$2.getROIProperties(feature, properties),
        ...LengthGeometry$2.getROIProperties(feature, properties),
        ...FreeTextGeometry$2.getROIProperties(feature, properties)
      };
    },
    getDefinitions: options => {
      return { ...LengthGeometry$2.getDefinition(options),
        ...ArrowGeometry$2.getDefinition(options),
        ...FreeTextGeometry$2.getDefinition(options)
      };
    },
    insertVertexCondition: feature => {
      return !LengthGeometry$2.isLength(feature) && !ArrowGeometry$2.isArrow(feature);
    }
  };
  var CustomGeometries = { ...commonAPI,
    init,
    Geometries,
    CustomGeometry,
    MarkerManager
  };

  /** Extracts value of Pixel Spacing attribute from metadata.
   *
   * @param {Object} metadata - Metadata of a DICOM VL Whole Slide Microscopy Image instance
   * @returns {number[]} Spacing between pixel columns and rows in millimeter
   * @private
   */

  function _getPixelSpacing(metadata) {
    const functionalGroup = metadata.SharedFunctionalGroupsSequence[0];
    const pixelMeasures = functionalGroup.PixelMeasuresSequence[0];
    return pixelMeasures.PixelSpacing;
  }
  /** Determines whether image needs to be rotated relative to slide
   * coordinate system based on direction cosines.
   * We want to rotate all images such that the X axis of the slide coordinate
   * system is the vertical axis (ordinate) of the viewport and the Y axis
   * of the slide coordinate system is the horizontal axis (abscissa) of the
   * viewport. Note that this is opposite to the Openlayers coordinate system.
   * There are only planar rotations, since the total pixel matrix is
   * parallel to the slide surface. Here, we further assume that rows and
   * columns of total pixel matrix are parallel to the borders of the slide,
   * i.e. the x and y axis of the slide coordinate system.
   *
   * The row direction (left to right) of the Total Pixel Matrix
   * is defined by the first three values.
   * The three values specify how the direction changes from the last pixel
   * to the first pixel in the row along each of the three axes of the
   * slide coordinate system (x, y, z), i.e. it express in which direction one
   * is moving in the slide coordinate system when the COLUMN index changes.
   * The column direction (top to bottom) of the Total Pixel Matrix
   * is defined by the second three values.
   * The three values specify how the direction changes from the last pixel
   * to the first pixel in the column along each of the three axes of the
   * slide coordinate system (x, y, z), i.e. it express in which direction one
   * is moving in the slide coordinate system when the ROW index changes.
   *
   * @param {Object} metadata - Metadata of a DICOM VL Whole Slide Microscopy Image instance
   * @returns {number} Rotation in radians
   * @private
  */


  function _getRotation(metadata) {
    var degrees;

    if (metadata.ImageOrientationSlide[0] === 0 && metadata.ImageOrientationSlide[1] === -1 && metadata.ImageOrientationSlide[2] === 0 && metadata.ImageOrientationSlide[3] === -1 && metadata.ImageOrientationSlide[4] === 0 && metadata.ImageOrientationSlide[5] === 0) {
      /*
       * The Total Pixel Matrix is rotated with respect to the slide coordinate
       * system by 180 degrees, such that an increase along the row direction
       * (left to right) leads to lower Y coordinate values and an increase
       * along the column direction (top to bottom) leads to lower X coordinate
       * values.
       */
      degrees = 180;
    } else if (metadata.ImageOrientationSlide[0] === 1 && metadata.ImageOrientationSlide[1] === 0 && metadata.ImageOrientationSlide[2] === 0 && metadata.ImageOrientationSlide[3] === 0 && metadata.ImageOrientationSlide[4] === -1 && metadata.ImageOrientationSlide[5] === 0) {
      /*
       * The Total Pixel Matrix is rotated with respect to the slide coordinate
       * system by 90 degrees, such that an increase along the row direction
       * (left to right) leads to higher X coordinate values and an increase
       * along the column direction (top to bottom) leads to lower Y coordinate
       * values.
       */
      degrees = 90;
    } else if (metadata.ImageOrientationSlide[0] === -1 && metadata.ImageOrientationSlide[1] === 0 && metadata.ImageOrientationSlide[2] === 0 && metadata.ImageOrientationSlide[3] === 0 && metadata.ImageOrientationSlide[4] === 1 && metadata.ImageOrientationSlide[5] === 0) {
      /*
       * The Total Pixel Matrix is rotated with respect to the slide coordinate
       * system by 270 degrees, such that an increase along the row direction
       * (left to right) leads to lower X coordinate values and an increase
       * along the column direction (top to bottom) leads to higher Y coordinate
       * values.
       */
      degrees = 270;
    } else if (metadata.ImageOrientationSlide[0] === 0 && metadata.ImageOrientationSlide[1] === 1 && metadata.ImageOrientationSlide[2] === 0 && metadata.ImageOrientationSlide[3] === 1 && metadata.ImageOrientationSlide[4] === 0 && metadata.ImageOrientationSlide[5] === 0) {
      /*
       * The Total Pixel Matrix is aligned with the slide coordinate system
       * such that an increase along the row direction (left to right) leads to
       * higher Y coordinate values and an increase along the column direction
       * (top to bottom) leads to higher X coordinate values.
       */
      degrees = 0;
    } else {
      throw new Error(`Unexpected image orientation ${metadata.ImageOrientationSlide}`);
    }

    return degrees * (Math.PI / 180);
  }
  /** Converts a vector graphic from an Openlayers Geometry into a DICOM SCOORD3D
   * representation.
   *
   * @param {Object} geometry - Openlayers Geometry
   * @param {Object[]} pyramid - Metadata for resolution levels of image pyramid
   * @returns {Scoord3D} DICOM Microscopy Viewer Scoord3D
   * @private
   */


  function _geometry2Scoord3d(geometry, pyramid) {
    console.info('map coordinates from pixel matrix to slide coordinate system');
    const frameOfReferenceUID = pyramid[pyramid.length - 1].FrameOfReferenceUID;
    const type = geometry.getType();

    if (type === 'Point') {
      let coordinates = geometry.getCoordinates();
      coordinates = _geometryCoordinates2scoord3dCoordinates(coordinates, pyramid);
      return new Point({
        coordinates,
        frameOfReferenceUID: frameOfReferenceUID
      });
    } else if (type === 'Polygon') {
      /*
       * The first linear ring of the array defines the outer-boundary (surface).
       * Each subsequent linear ring defines a hole in the surface.
       */
      let coordinates = geometry.getCoordinates()[0].map(c => {
        return _geometryCoordinates2scoord3dCoordinates(c, pyramid);
      });
      return new Polygon({
        coordinates,
        frameOfReferenceUID: frameOfReferenceUID
      });
    } else if (type === 'LineString') {
      let coordinates = geometry.getCoordinates().map(c => {
        const result = _geometryCoordinates2scoord3dCoordinates(c, pyramid);

        return result;
      });
      return new Polyline({
        coordinates,
        frameOfReferenceUID: frameOfReferenceUID
      });
    } else if (type === 'Circle') {
      const center = geometry.getCenter();
      const radius = geometry.getRadius(); // Endpoints of major and  minor axis of the ellipse.

      let coordinates = [[center[0] - radius, center[1], 0], [center[0] + radius, center[1], 0], [center[0], center[1] - radius, 0], [center[0], center[1] + radius, 0]];
      coordinates = coordinates.map(c => {
        return _geometryCoordinates2scoord3dCoordinates(c, pyramid);
      }); // const metadata = pyramid[pyramid.length-1];
      // const pixelSpacing = _getPixelSpacing(metadata);

      return new Ellipse({
        coordinates,
        frameOfReferenceUID: frameOfReferenceUID
      });
    } else {
      // TODO: Combine multiple points into MULTIPOINT.
      console.error(`unknown geometry type "${type}"`);
    }
  }
  /** Converts a vector graphic from a DICOM SCOORD3D into an Openlayers Geometry
   * representation.
   *
   * @param {Scoord3D} scoord3d - DICOM Microscopy Viewer Scoord3D
   * @param {Object[]} pyramid - Metadata for resolution levels of image pyramid
   * @returns {Object} Openlayers Geometry
   * @private
   */


  function _scoord3d2Geometry(scoord3d, pyramid) {
    console.info('map coordinates from slide coordinate system to pixel matrix');
    const type = scoord3d.graphicType;
    const data = scoord3d.graphicData;

    if (type === 'POINT') {
      let coordinates = _scoord3dCoordinates2geometryCoordinates(data, pyramid);

      return new Point__default['default'](coordinates);
    } else if (type === 'POLYLINE') {
      const coordinates = data.map(d => {
        return _scoord3dCoordinates2geometryCoordinates(d, pyramid);
      });
      return new LineString__default['default'](coordinates);
    } else if (type === 'POLYGON') {
      const coordinates = data.map(d => {
        return _scoord3dCoordinates2geometryCoordinates(d, pyramid);
      });
      return new PolygonGeometry__default['default']([coordinates]);
    } else if (type === 'ELLIPSE') {
      // TODO: ensure that the ellipse represents a circle, i.e. that
      // major and minor axis form a right angle and have the same length
      const majorAxisCoordinates = data.slice(0, 2);
      const minorAxisCoordinates = data.slice(2, 4); // Circle is defined by two points: the center point and a point on the
      // circumference.

      const point1 = majorAxisCoordinates[0];
      const point2 = majorAxisCoordinates[1];
      let coordinates = [[(point1[0] + point2[0]) / parseFloat(2), (point1[1] + point2[1]) / parseFloat(2), 0], point2];
      coordinates = coordinates.map(d => {
        return _scoord3dCoordinates2geometryCoordinates(d, pyramid);
      }); // to flat coordinates

      coordinates = [...coordinates[0].slice(0, 2), ...coordinates[1].slice(0, 2)]; // flat coordinates in combination with opt_layout and no opt_radius are also accepted
      // and internaly it calculates the Radius

      return new CircleGeometry__default['default'](coordinates, null, "XY");
    } else {
      console.error(`unsupported graphic type "${type}"`);
    }
  }

  function _geometryCoordinates2scoord3dCoordinates(coordinates, pyramid) {
    return _coordinateFormatGeometry2Scoord3d([coordinates[0], coordinates[1], coordinates[2]], pyramid);
  }

  function _scoord3dCoordinates2geometryCoordinates(coordinates, pyramid) {
    return _coordinateFormatScoord3d2Geometry([coordinates[0], coordinates[1], coordinates[2]], pyramid);
  }
  /** Translates coordinates of Total Pixel Matrix in pixel unit into coordinates
   * in Frame of Reference (slide coordinate system) in millimeter unit.
   *
   * @param {number[]|number[][]} coordinates - Coordinates in Total Pixel Matrix
   * @param {Object[]} pyramid - Metadata for resolution levels of image pyramid
   * @returns {number[]|number[][]} Coordinates in Frame of Reference
   * @private
   */


  function _coordinateFormatGeometry2Scoord3d(coordinates, pyramid) {
    let transform = false;

    if (!Array.isArray(coordinates[0])) {
      coordinates = [coordinates];
      transform = true;
    }

    const metadata = pyramid[pyramid.length - 1];
    const origin = metadata.TotalPixelMatrixOriginSequence[0];
    const orientation = metadata.ImageOrientationSlide;

    const spacing = _getPixelSpacing(metadata);

    const offset = [Number(origin.XOffsetInSlideCoordinateSystem), Number(origin.YOffsetInSlideCoordinateSystem)];
    coordinates = coordinates.map(c => {
      const pixelCoord = [c[0], -(c[1] + 1)];
      const slideCoord = mapPixelCoordToSlideCoord({
        orientation,
        spacing,
        offset,
        point: pixelCoord
      });
      return [slideCoord[0], slideCoord[1], 0];
    });

    if (transform) {
      return coordinates[0];
    }

    return coordinates;
  }
  /** Translates coordinates of coordinates in Frame of Reference
   * (slide coordinate system) in millimeter unit into coordinates in
   * Total Pixel Matrix in pixel unit.
   *
   * @param {number[]|number[][]} coordinates - Coordinates in Frame of Reference
   * @param {Object[]} pyramid - Metadata for resolution levels of image pyramid
   * @returns {number[]|number[][]} Coordinates in Total Pixel Matrix
   * @private
   */


  function _coordinateFormatScoord3d2Geometry(coordinates, pyramid) {
    let transform = false;

    if (!Array.isArray(coordinates[0])) {
      coordinates = [coordinates];
      transform = true;
    }

    const metadata = pyramid[pyramid.length - 1];
    const orientation = metadata.ImageOrientationSlide;

    const spacing = _getPixelSpacing(metadata);

    const origin = metadata.TotalPixelMatrixOriginSequence[0];
    const offset = [Number(origin.XOffsetInSlideCoordinateSystem), Number(origin.YOffsetInSlideCoordinateSystem)];
    coordinates = coordinates.map(c => {
      const slideCoord = [c[0], c[1]];
      const pixelCoord = mapSlideCoordToPixelCoord({
        offset,
        orientation,
        spacing,
        point: slideCoord
      });
      return [pixelCoord[0], -(pixelCoord[1] + 1), 0];
    });

    if (transform) {
      return coordinates[0];
    }

    return coordinates;
  }
  /** Extracts and transforms the region of interest (ROI) from an Openlayers
   * Feature.
   *
   * @param {Object} feature - Openlayers Feature
   * @param {Object[]} pyramid - Metadata for resolution levels of image pyramid
   * @returns {ROI} Region of interest
   * @private
   */


  function _getROIFromFeature(feature, pyramid) {
    let roi = {};

    if (feature !== undefined) {
      const geometry = feature.getGeometry();

      const scoord3d = _geometry2Scoord3d(geometry, pyramid);

      let properties = feature.getProperties();
      properties = CustomGeometries.getROIProperties(feature, properties); // Remove geometry from properties mapping

      const geometryName = feature.getGeometryName();
      delete properties[geometryName];
      const uid = feature.getId();
      roi = new ROI({
        scoord3d,
        properties,
        uid
      });
    }

    return roi;
  }

  const _client = Symbol('client');

  const _controls = Symbol('controls');

  const _drawingLayer = Symbol('drawingLayer');

  const _drawingSource = Symbol('drawingSource');

  const _features = Symbol('features');

  const _imageLayer = Symbol('imageLayer');

  const _interactions = Symbol('interactions');

  const _map = Symbol('map');

  const _metadata = Symbol('metadata');

  const _pyramidMetadata = Symbol('pyramidMetadata');

  const _pyramidFrameMappings = Symbol('pyramidFrameMappings');

  const _pyramidBaseMetadata = Symbol('pyramidMetadataBase');

  const _segmentations = Symbol('segmentations');

  const _usewebgl = Symbol('usewebgl');
  /** Interactive viewer for DICOM VL Whole Slide Microscopy Image instances
   * with Image Type VOLUME.
   *
   * @class
   * @memberof viewer
   */


  class VolumeImageViewer {
    /**
     * Create a viewer instance for displaying VOLUME images.
     *
     * @param {Object} options
     * @param {Object} options.client - A DICOMwebClient instance for interacting with an origin server over HTTP.
     * @param {Object[]} options.metadata - An array of DICOM JSON metadata objects, one for each VL Whole Slide Microscopy Image instance.
     * @param {string[]} [options.controls=[]] - Names of viewer control elements that should be included in the viewport.
     * @param {boolean} [options.retrieveRendered=true] - Whether image frames should be retrieved via DICOMweb prerendered by the server.
     * @param {boolean} [options.useWebGL=true] - Whether WebGL renderer should be used.
     */
    constructor(options) {
      if ('useWebGL' in options) {
        this[_usewebgl] = options.useWebGL;
      } else {
        this[_usewebgl] = true;
      }

      this[_client] = options.client;

      if (!('retrieveRendered' in options)) {
        options.retrieveRendered = true;
      }

      if (!('controls' in options)) {
        options.controls = [];
      }

      options.controls = new Set(options.controls); // Collection of Openlayers "VectorLayer" instances indexable by
      // DICOM Series Instance UID

      this[_segmentations] = {}; // Collection of Openlayers "Feature" instances

      this[_features] = new Collection__default['default']([], {
        unique: true
      }); // Add unique identifier to each created "Feature" instance

      this[_features].on('add', e => {
        // The ID may have already been set when drawn. However, features could
        // have also been added without a draw event.
        if (e.element.getId() === undefined) {
          e.element.setId(generateUID());
        }
      });

      this[_features].on('remove', e => {
        CustomGeometries.onRemove(e.element);
      });
      /*
       * To visualize images accross multiple scales, we first need to
       * determine the image pyramid structure, i.e. the size and resolution
       * images at the different pyramid levels.
      */


      this[_metadata] = [];
      options.metadata.forEach(m => {
        const image = new VLWholeSlideMicroscopyImage({
          metadata: m
        });

        if (image.ImageType[2] === 'VOLUME') {
          this[_metadata].push(image);
        }
      });

      if (this[_metadata].length === 0) {
        throw new Error('No VOLUME image provided.');
      } // Sort instances and optionally concatenation parts if present.


      this[_metadata].sort((a, b) => {
        const sizeDiff = a.TotalPixelMatrixColumns - b.TotalPixelMatrixColumns;

        if (sizeDiff === 0) {
          if (a.ConcatenationFrameOffsetNumber !== undefined) {
            return a.ConcatenationFrameOffsetNumber - b.ConcatenationFrameOffsetNumber;
          }

          return sizeDiff;
        }

        return sizeDiff;
      });

      this[_pyramidMetadata] = [];
      this[_pyramidFrameMappings] = [];

      let frameMappings = this[_metadata].map(m => getFrameMapping(m));

      for (let i = 0; i < this[_metadata].length; i++) {
        const cols = this[_metadata][i].TotalPixelMatrixColumns;
        const rows = this[_metadata][i].TotalPixelMatrixRows;
        const numberOfFrames = this[_metadata][i].NumberOfFrames;
        /*
         * Instances may be broken down into multiple concatentation parts.
         * Therefore, we have to re-assemble instance metadata.
        */

        let alreadyExists = false;
        let index = null;

        for (let j = 0; j < this[_pyramidMetadata].length; j++) {
          if (this[_pyramidMetadata][j].TotalPixelMatrixColumns === cols && this[_pyramidMetadata][j].TotalPixelMatrixRows === rows) {
            alreadyExists = true;
            index = j;
          }
        }

        if (alreadyExists) {
          // Update with information obtained from current concatentation part.
          Object.assign(this[_pyramidFrameMappings][index], frameMappings[i]);
          this[_pyramidMetadata][index].NumberOfFrames += numberOfFrames;

          if ("PerFrameFunctionalGroupsSequence" in this[_metadata][index]) {
            this[_pyramidMetadata][index].PerFrameFunctionalGroupsSequence.push(...this[_metadata][i].PerFrameFunctionalGroupsSequence);
          }

          if (!"SOPInstanceUIDOfConcatenationSource" in this[_metadata][i]) {
            throw new Error('Attribute "SOPInstanceUIDOfConcatenationSource" is required ' + 'for concatenation parts.');
          }

          const sopInstanceUID = this[_metadata][i].SOPInstanceUIDOfConcatenationSource;
          this[_pyramidMetadata][index].SOPInstanceUID = sopInstanceUID;
          delete this[_pyramidMetadata][index].SOPInstanceUIDOfConcatenationSource;
          delete this[_pyramidMetadata][index].ConcatenationUID;
          delete this[_pyramidMetadata][index].InConcatenationNumber;
          delete this[_pyramidMetadata][index].ConcatenationFrameOffsetNumber;
        } else {
          this[_pyramidMetadata].push(this[_metadata][i]);

          this[_pyramidFrameMappings].push(frameMappings[i]);
        }
      }

      const nLevels = this[_pyramidMetadata].length;

      if (nLevels === 0) {
        console.error('empty pyramid - no levels found');
      }

      this[_pyramidBaseMetadata] = this[_pyramidMetadata][nLevels - 1];
      /*
       * Collect relevant information from DICOM metadata for each pyramid
       * level to construct the Openlayers map.
      */

      const tileSizes = [];
      const tileGridSizes = [];
      const resolutions = [];
      const origins = [];
      const offset = [0, -1];

      const basePixelSpacing = _getPixelSpacing(this[_pyramidBaseMetadata]);

      const baseTotalPixelMatrixColumns = this[_pyramidBaseMetadata].TotalPixelMatrixColumns;
      const baseTotalPixelMatrixRows = this[_pyramidBaseMetadata].TotalPixelMatrixRows;
      const baseColumns = this[_pyramidBaseMetadata].Columns;
      const baseRows = this[_pyramidBaseMetadata].Rows;

      for (let j = nLevels - 1; j >= 0; j--) {
        const columns = this[_pyramidMetadata][j].Columns;
        const rows = this[_pyramidMetadata][j].Rows;
        const totalPixelMatrixColumns = this[_pyramidMetadata][j].TotalPixelMatrixColumns;
        const totalPixelMatrixRows = this[_pyramidMetadata][j].TotalPixelMatrixRows;

        const pixelSpacing = _getPixelSpacing(this[_pyramidMetadata][j]);

        const nColumns = Math.ceil(totalPixelMatrixColumns / columns);
        const nRows = Math.ceil(totalPixelMatrixRows / rows);
        tileSizes.push([columns, rows]);
        tileGridSizes.push([nColumns, nRows]);
        /*
         * Compute the resolution at each pyramid level, since the zoom
         * factor may not be the same between adjacent pyramid levels.
        */

        let zoomFactor = baseTotalPixelMatrixColumns / totalPixelMatrixColumns;
        resolutions.push(zoomFactor);
        /*
         * TODO: One may have to adjust the offset slightly due to the
         * difference between extent of the image at a given resolution level
         * and the actual number of tiles (frames).
        */

        origins.push(offset);
      }

      resolutions.reverse();
      tileSizes.reverse();
      tileGridSizes.reverse();
      origins.reverse(); // Functions won't be able to access "this"

      const pyramid = this[_pyramidMetadata];
      const pyramidFrameMappings = this[_pyramidFrameMappings];
      /*
       * Define custom tile URL function to retrive frames via DICOMweb WADO-RS.
       */

      const tileUrlFunction = (tileCoord, pixelRatio, projection) => {
        /*
         * Variables x and y correspond to the X and Y axes of the slide
         * coordinate system. Since we want to view the slide horizontally
         * with the label on the right side, the x axis of the slide
         * coordinate system is the vertical axis of the viewport and the
         * y axis of the slide coordinate system the horizontal axis of the
         * viewport. Note that this is in contrast to the nomenclature used
         * by Openlayers.
         */
        const z = tileCoord[0];
        const y = tileCoord[1] + 1;
        const x = tileCoord[2] + 1;
        const index = x + "-" + y;
        const path = pyramidFrameMappings[z][index];

        if (path === undefined) {
          console.warn("tile " + index + " not found at level " + z);
          return null;
        }

        let url = options.client.wadoURL + "/studies/" + pyramid[z].StudyInstanceUID + "/series/" + pyramid[z].SeriesInstanceUID + '/instances/' + path;

        if (options.retrieveRendered) {
          url = url + '/rendered';
        }

        return url;
      };
      /*
       * Define custonm tile loader function, which is required because the
       * WADO-RS response message has content type "multipart/related".
      */


      const tileLoadFunction = (tile, src) => {
        if (src !== null) {
          const studyInstanceUID = DICOMwebClient.utils.getStudyInstanceUIDFromUri(src);
          const seriesInstanceUID = DICOMwebClient.utils.getSeriesInstanceUIDFromUri(src);
          const sopInstanceUID = DICOMwebClient.utils.getSOPInstanceUIDFromUri(src);
          const frameNumbers = DICOMwebClient.utils.getFrameNumbersFromUri(src);
          const img = tile.getImage();

          if (options.retrieveRendered) {
            const mediaType = 'image/png';
            const retrieveOptions = {
              studyInstanceUID,
              seriesInstanceUID,
              sopInstanceUID,
              frameNumbers,
              mediaTypes: [{
                mediaType
              }],
              queryParams: {
                iccprofile: 'yes'
              }
            };
            options.client.retrieveInstanceFramesRendered(retrieveOptions).then(renderedFrame => {
              const blob = new Blob([renderedFrame], {
                type: mediaType
              });
              img.src = window.URL.createObjectURL(blob);
            });
          } else {
            // TODO: support "image/jp2" and "image/jls"
            const mediaType = 'image/jpeg';
            const retrieveOptions = {
              studyInstanceUID,
              seriesInstanceUID,
              sopInstanceUID,
              frameNumbers,
              mediaTypes: [{
                mediaType,
                transferSyntaxUID: '1.2.840.10008.1.2.4.50'
              }]
            };
            options.client.retrieveInstanceFrames(retrieveOptions).then(rawFrames => {
              const blob = new Blob(rawFrames, {
                type: mediaType
              });
              img.src = window.URL.createObjectURL(blob);
            });
          }
        } else {
          console.warn('could not load tile');
        }
      };
      /** Frames may extend beyond the size of the total pixel matrix.
       * The excess pixels are empty, i.e. have only a padding value.
       * We set the extent to the size of the actual image without taken
       * excess pixels into account.
       * Note that the vertical axis is flipped in the used tile source,
       * i.e. values on the axis lie in the range [-n, -1], where n is the
       * number of rows in the total pixel matrix.
      */


      const extent$1 = [0, // min X
      -(baseTotalPixelMatrixRows + 1), // min Y
      baseTotalPixelMatrixColumns, // max X
      -1 // max Y
      ];

      const rotation = _getRotation(this[_pyramidBaseMetadata]);
      /*
       * Specify projection to prevent default automatic projection
       * with the default Mercator projection.
       */


      const projection = new Projection__default['default']({
        code: 'DICOM',
        units: 'metric',
        extent: extent$1,
        getPointResolution: (pixelRes, point) => {
          /** DICOM Pixel Spacing has millimeter unit while the projection has
           * has meter unit.
           */
          const spacing = _getPixelSpacing(pyramid[nLevels - 1])[0] / 10 ** 3;
          return pixelRes * spacing;
        }
      });
      /*
       * TODO: Register custom projection:
       *  - http://openlayers.org/en/latest/apidoc/ol.proj.html
       *  - http://openlayers.org/en/latest/apidoc/module-ol_proj.html#~ProjectionLike
       * Direction cosines could be handled via projection rather
       * than specifying a rotation
       */

      /*
       * We need to specify the tile grid, since DICOM allows tiles to
       * have different sizes at each resolution level and a different zoom
       * factor between individual levels.
       */

      const tileGrid = new TileGrid__default['default']({
        extent: extent$1,
        origins: origins,
        resolutions: resolutions,
        sizes: tileGridSizes,
        tileSizes: tileSizes
      });
      /*
       * We use the existing TileImage source but customize it to retrieve
       * frames (load tiles) via DICOMweb WADO-RS.
       */

      const rasterSource = new TileImage__default['default']({
        crossOrigin: 'Anonymous',
        tileGrid: tileGrid,
        projection: projection,
        wrapX: false
      });
      rasterSource.setTileUrlFunction(tileUrlFunction);
      rasterSource.setTileLoadFunction(tileLoadFunction);
      this[_imageLayer] = new TileLayer__default['default']({
        extent: extent$1,
        source: rasterSource,
        preload: 0,
        projection: projection
      });
      this[_drawingSource] = new VectorSource__default['default']({
        tileGrid: tileGrid,
        projection: projection,
        features: this[_features],
        wrapX: false
      });
      this[_drawingLayer] = new VectorLayer__default['default']({
        extent: extent$1,
        source: this[_drawingSource],
        projection: projection,
        updateWhileAnimating: true,
        updateWhileInteracting: true
      });
      const view = new View__default['default']({
        center: extent.getCenter(extent$1),
        extent: extent$1,
        projection: projection,
        resolutions: resolutions,
        rotation: rotation
      });
      this[_interactions] = {
        draw: undefined,
        select: undefined,
        translate: undefined,
        modify: undefined,
        snap: undefined,
        dragPan: undefined
      };
      this[_controls] = {
        scale: new ScaleLine__default['default']({
          units: 'metric',
          className: ''
        })
      };

      if (options.controls.has('fullscreen')) {
        this[_controls].fullscreen = new FullScreen__default['default']();
      }

      if (options.controls.has('overview')) {
        const overviewImageLayer = new TileLayer__default['default']({
          extent: extent$1,
          source: rasterSource,
          preload: 0,
          projection: projection
        });
        const overviewViewOptions = {
          projection: projection,
          rotation: rotation
        };
        if (resolutions && !options.overviewZoom) overviewViewOptions.resolutions = resolutions;
        if (options.overviewZoom) overviewViewOptions.zoom = options.overviewZoom;
        const overviewView = new View__default['default'](overviewViewOptions);
        this[_controls].overview = new OverviewMap__default['default']({
          view: overviewView,
          layers: [overviewImageLayer],
          collapsed: true
        });
      }
      /** Creates the map with the defined layers and view and renders it. */


      this[_map] = new Map__default['default']({
        layers: [this[_imageLayer], this[_drawingLayer]],
        view: view,
        controls: [],
        keyboardEventTarget: document
      });

      this[_map].addInteraction(new MouseWheelZoom__default['default']());

      for (let control in this[_controls]) {
        this[_map].addControl(this[_controls][control]);
      }

      this[_map].getView().fit(extent$1);
      /** Wire custom geometries */


      CustomGeometries.init({
        map: this[_map],
        source: this[_drawingSource]
      });
    }
    /** Resizes the viewer to fit the viewport. */


    resize() {
      this[_map].updateSize();
    }
    /** Gets the size of the viewport.
     *
     * @type {number[]}
     */


    get size() {
      return this[_map].getSize();
    }
    /** Renders the images in the specified viewport container.
     * @param {Object} options - Rendering options.
     * @param {(string|HTMLElement)} options.container - HTML Element in which the viewer should be injected.
     */


    render(options) {
      if (!('container' in options)) {
        console.error('container must be provided for rendering images');
      }

      this[_map].setTarget(options.container); // Style scale element (overriding default Openlayers CSS "ol-scale-line")


      let scaleElement = this[_controls]['scale'].element;
      scaleElement.style.position = 'absolute';
      scaleElement.style.right = '.5em';
      scaleElement.style.bottom = '.5em';
      scaleElement.style.left = 'auto';
      scaleElement.style.padding = '2px';
      scaleElement.style.backgroundColor = 'rgba(255,255,255,.5)';
      scaleElement.style.borderRadius = '4px';
      scaleElement.style.margin = '1px';
      let scaleInnerElement = this[_controls]['scale'].innerElement_;
      scaleInnerElement.style.color = 'black';
      scaleInnerElement.style.fontWeight = '600';
      scaleInnerElement.style.fontSize = '10px';
      scaleInnerElement.style.textAlign = 'center';
      scaleInnerElement.style.borderWidth = '1.5px';
      scaleInnerElement.style.borderStyle = 'solid';
      scaleInnerElement.style.borderTop = 'none';
      scaleInnerElement.style.borderRightColor = 'black';
      scaleInnerElement.style.borderLeftColor = 'black';
      scaleInnerElement.style.borderBottomColor = 'black';
      scaleInnerElement.style.margin = '1px';
      scaleInnerElement.style.willChange = 'contents,width';

      const container = this[_map].getTargetElement();

      this[_drawingSource].on(VectorEventType__default['default'].ADDFEATURE, e => {
        publish(container, EVENTS.ROI_ADDED, _getROIFromFeature(e.feature, this[_pyramidMetadata]));
      });

      this[_drawingSource].on(VectorEventType__default['default'].CHANGEFEATURE, e => {
        if (e.feature !== undefined || e.feature !== null) {
          const geometry = e.feature.getGeometry();
          const type = geometry.getType(); // The first and last point of a polygon must be identical. The last point
          // is an implmentation detail and is hidden from the user in the graphical
          // interface. However, we must update the last point in case the first
          // piont has been modified by the user.

          if (type === 'Polygon') {
            // NOTE: Polyon in GeoJSON format contains an array of geometries,
            // where the first element represents the coordinates of the outer ring
            // and the second element represents the coordinates of the inner ring
            // (in our case the inner ring should not be present).
            const layout = geometry.getLayout();
            const coordinates = geometry.getCoordinates();
            const firstPoint = coordinates[0][0];
            const lastPoint = coordinates[0][coordinates[0].length - 1];

            if (firstPoint[0] !== lastPoint[0] || firstPoint[1] !== lastPoint[1]) {
              coordinates[0][coordinates[0].length - 1] = firstPoint;
              geometry.setCoordinates(coordinates, layout);
              e.feature.setGeometry(geometry);
            }
          }
        }

        publish(container, EVENTS.ROI_MODIFIED, _getROIFromFeature(e.feature, this[_pyramidMetadata]));
      });

      this[_drawingSource].on(VectorEventType__default['default'].REMOVEFEATURE, e => {
        publish(container, EVENTS.ROI_REMOVED, _getROIFromFeature(e.feature, this[_pyramidMetadata]));
      });
    }
    /** Activates the draw interaction for graphic annotation of regions of interest.
     * @param {Object} options - Drawing options.
     * @param {string} options.geometryType - Name of the geometry type (point, circle, box, polygon, freehandPolygon, line, freehandLine)
     */


    activateDrawInteraction(options = {}) {
      this.deactivateDrawInteraction();
      console.info('activate "draw" interaction');
      const customOptionsMapping = {
        point: {
          type: 'Point',
          geometryName: 'Point',
          style: options.style
        },
        circle: {
          type: 'Circle',
          geometryName: 'Circle',
          style: options.style
        },
        box: {
          type: 'Circle',
          geometryName: 'Box',
          geometryFunction: Draw.createRegularPolygon(4),
          style: options.style
        },
        polygon: {
          type: 'Polygon',
          geometryName: 'Polygon',
          freehand: false,
          style: options.style
        },
        freehandpolygon: {
          type: 'Polygon',
          geometryName: 'FreeHandPolygon',
          freehand: true,
          style: options.style
        },
        line: {
          type: 'LineString',
          geometryName: 'Line',
          freehand: false,
          style: options.style
        },
        freehandline: {
          type: 'LineString',
          geometryName: 'FreeHandLine',
          freehand: true,
          style: options.style
        },
        ...CustomGeometries.getDefinitions(options)
      };

      if (!('geometryType' in options)) {
        console.error('geometry type must be specified for drawing interaction');
      }

      if (!(options.geometryType in customOptionsMapping)) {
        console.error(`unsupported geometry type "${options.geometryType}"`);
      }

      const defaultDrawOptions = {
        source: this[_drawingSource]
      };
      const customDrawOptions = customOptionsMapping[options.geometryType];
      const allDrawOptions = Object.assign(defaultDrawOptions, customDrawOptions);
      this[_interactions].draw = new Draw__default['default'](allDrawOptions);

      const container = this[_map].getTargetElement(); // attaching openlayers events handling


      this[_interactions].draw.on('drawend', e => {
        e.feature.setId(generateUID());
        CustomGeometries.onAdd(e.feature);
        publish(container, EVENTS.ROI_DRAWN, _getROIFromFeature(e.feature, this[_pyramidMetadata]));
      });

      CustomGeometries.onInteractionsChange(this[_interactions]);

      this[_map].addInteraction(this[_interactions].draw);
    }
    /** Deactivates draw interaction. */


    deactivateDrawInteraction() {
      console.info('deactivate "draw" interaction');

      if (this[_interactions].draw !== undefined) {
        this[_map].removeInteraction(this[_interactions].draw);

        this[_interactions].draw = undefined;
      }
    }
    /** Whether draw interaction is active
     *
     * @type {boolean}
     */


    get isDrawInteractionActive() {
      return this[_interactions].draw !== undefined;
    }
    /* Activates translate interaction.
     *
     * @param {Object} options - Translation options.
     */


    activateTranslateInteraction(options = {}) {
      this.deactivateTranslateInteraction();
      console.info('activate "translate" interaction');
      this[_interactions].translate = new Translate__default['default']({
        layers: [this[_drawingLayer]]
      });
      CustomGeometries.onInteractionsChange(this[_interactions]);

      this[_map].addInteraction(this[_interactions].translate);
    }
    /** Deactivates translate interaction. */


    deactivateTranslateInteraction() {
      console.info('deactivate "translate" interaction');

      if (this[_interactions].translate) {
        this[_map].removeInteraction(this[_interactions].translate);

        this[_interactions].translate = undefined;
      }
    }
    /* Activates select interaction.
     *
     * @param {Object} options - Selection options.
     */


    activateSelectInteraction(options = {}) {
      this.deactivateSelectInteraction();
      console.info('activate "select" interaction');
      this[_interactions].select = new Select__default['default']({
        layers: [this[_drawingLayer]]
      });

      const container = this[_map].getTargetElement();

      this[_interactions].select.on('select', e => {
        publish(container, EVENTS.ROI_SELECTED, _getROIFromFeature(e.selected[0], this[_pyramidMetadata]));
      });

      CustomGeometries.onInteractionsChange(this[_interactions]);

      this[_map].addInteraction(this[_interactions].select);
    }
    /** Deactivates select interaction. */


    deactivateSelectInteraction() {
      console.info('deactivate "select" interaction');

      if (this[_interactions].select) {
        this[_map].removeInteraction(this[_interactions].select);

        this[_interactions].select = undefined;
      }
    }
    /** Activates dragpan interaction.
     *
     * @param {Object} options - DragPan options.
     */


    activateDragPanInteraction(options = {}) {
      this.deactivateDragPanInteraction();
      console.info('activate "drag pan" interaction');
      this[_interactions].dragPan = new DragPan__default['default']({
        features: this[_features]
      });
      CustomGeometries.onInteractionsChange(this[_interactions]);

      this[_map].addInteraction(this[_interactions].dragPan);
    }
    /** Deactivate dragpan interaction. */


    deactivateDragPanInteraction() {
      console.info('deactivate "drag pan" interaction');

      if (this[_interactions].modify) {
        this[_map].removeInteraction(this[_interactions].dragPan);

        this[_interactions].dragPan = undefined;
      }
    }
    /** Activates snap interaction.
     *
     * @param {Object} options - Snap options.
     */


    activateSnapInteraction(options = {}) {
      this.deactivateSnapInteraction();
      console.info('activate "snap" interaction');
      this[_interactions].snap = new Snap__default['default']({
        source: this[_drawingSource]
      });
      CustomGeometries.onInteractionsChange(this[_interactions]);

      this[_map].addInteraction(this[_interactions].snap);
    }
    /** Deactivates snap interaction. */


    deactivateSnapInteraction() {
      console.info('deactivate "snap" interaction');

      if (this[_interactions].snap) {
        this[_map].removeInteraction(this[_interactions].snap);

        this[_interactions].snap = undefined;
      }
    }
    /** Whether select interaction is active.
     *
     * @type {boolean}
     */


    get isSelectInteractionActive() {
      return this[_interactions].select !== undefined;
    }
    /** Activates modify interaction.
     *
     * @param {Object} options - Modification options.
     */


    activateModifyInteraction(options = {}) {
      this.deactivateModifyInteraction();
      console.info('activate "modify" interaction');
      this[_interactions].modify = new Modify__default['default']({
        features: this[_features],
        // TODO: or source, i.e. "drawings"???
        insertVertexCondition: event => {
          const feature = this[_drawingSource].getClosestFeatureToCoordinate(event.coordinate_);

          return CustomGeometries.insertVertexCondition(feature);
        }
      });
      CustomGeometries.onInteractionsChange(this[_interactions]);

      this[_map].addInteraction(this[_interactions].modify);
    }
    /** Deactivates modify interaction. */


    deactivateModifyInteraction() {
      console.info('deactivate "modify" interaction');

      if (this[_interactions].modify) {
        this[_map].removeInteraction(this[_interactions].modify);

        this[_interactions].modify = undefined;
      }
    }
    /** Whether modify interaction is active.
     *
     * @type {boolean}
     */


    get isModifyInteractionActive() {
      return this[_interactions].modify !== undefined;
    }
    /** Gets all annotated regions of interest.
     *
     * @returns {ROI[]} Array of regions of interest.
     */


    getAllROIs() {
      console.info('get all ROIs');
      let rois = [];

      this[_features].forEach(item => {
        rois.push(this.getROI(item.getId()));
      });

      return rois;
    }
    /** Number of annotated regions of interest.
     *
     * @type {number}
     */


    get numberOfROIs() {
      return this[_features].getLength();
    }
    /** Gets an individual annotated regions of interest.
     *
     * @param {string} uid - Unique identifier of the region of interest
     * @returns {ROI} Regions of interest.
     */


    getROI(uid) {
      console.info(`get ROI ${uid}`);

      const feature = this[_drawingSource].getFeatureById(uid);

      return _getROIFromFeature(feature, this[_pyramidMetadata]);
    }
    /** Pops the most recently annotated regions of interest.
     *
     * @returns {ROI} Regions of interest.
     */


    popROI() {
      console.info('pop ROI');

      const feature = this[_features].pop();

      return _getROIFromFeature(feature, this[_pyramidMetadata]);
    }

    overrideStyle({
      feature,
      style
    }) {
      if (!this.originalStyles) this.originalStyles = {};

      if (!this.originalStyles[feature.ol_uid]) {
        this.originalStyles[feature.ol_uid] = feature.getStyle();
      }

      feature.setStyle(style);
    }

    resetStyle({
      feature
    }) {
      if (this.originalStyles[feature.ol_uid]) {
        feature.setStyle(this.originalStyles[feature.ol_uid]);
      }
    }
    /** Adds a regions of interest.
     *
     * @param {ROI} Regions of interest.
     */


    addROI(item) {
      console.info(`add ROI ${item.uid}`);

      const geometry = _scoord3d2Geometry(item.scoord3d, this[_pyramidMetadata]);

      const featureOptions = {
        geometry
      };
      /** Update feature with given item propeties */

      const {
        geometryName,
        style
      } = item.properties;
      if (geometryName) featureOptions[geometryName] = geometry;
      const feature = new Feature__default['default'](featureOptions);
      feature.setProperties(item.properties, true);
      feature.setId(item.uid);
      /** Update feature with given item propeties */

      if (style) feature.setStyle(style);
      if (geometryName) feature.setGeometryName(geometryName, true);
      CustomGeometries.onAdd(feature, item.properties);

      this[_features].push(feature);
    }
    /** Update properties of regions of interest.
     *
     * @param {object} roi - ROI to be updated
     * @param {string} roi.uid - Unique identifier of the region of interest
     * @param {object} roi.properties - ROI properties
     */


    updateROI({
      uid,
      properties
    }) {
      if (!uid) return;
      console.info(`update ROI ${uid}`);

      const feature = this[_drawingSource].getFeatureById(uid);

      feature.setProperties(properties, true);
      CustomGeometries.onUpdate(feature);
    }
    /** Removes an individual regions of interest.
     *
     * @param {string} uid - Unique identifier of the region of interest
     */


    removeROI(uid) {
      console.info(`remove ROI ${uid}`);

      const feature = this[_drawingSource].getFeatureById(uid);

      this[_features].remove(feature);
    }
    /** Removes all annotated regions of interest. */


    removeAllROIs() {
      console.info('remove all ROIs');

      this[_features].clear();
    }
    /** Hides annotated regions of interest such that they are no longer
     *  visible on the viewport.
     */


    hideROIs() {
      console.info('hide ROIs');

      this[_drawingLayer].setVisible(false);
    }
    /** Shows annotated regions of interest such that they become visible
     *  on the viewport ontop of the images.
     */


    showROIs() {
      console.info('show ROIs');

      this[_drawingLayer].setVisible(true);
    }
    /** Whether annotated regions of interest are currently visible.
     *
     * @type {boolean}
     */


    get areROIsVisible() {
      return this[_drawingLayer].getVisible();
    }
    /** DICOM metadata for each VL Whole Slide Microscopy Image instance.
     *
     * @type {VLWholeSlideMicroscopyImage[]}
     */


    get imageMetadata() {
      return this[_pyramidMetadata];
    }

  }
  /** Static viewer for DICOM VL Whole Slide Microscopy Image instances
   * with Image Type other than VOLUME.
   *
   * @class
   * @private
   */


  class _NonVolumeImageViewer {
    /** Creates a viewer instance for displaying non-VOLUME images.
     *
     * @param {Object} options
     * @param {Object} options.client - A DICOMwebClient instance for interacting with an origin server over HTTP.
     * @param {Object} options.metadata - DICOM JSON metadata object for a VL Whole Slide Microscopy Image instance.
     * @param {Object} [options.orientation] - Orientation of the slide (vertical: label on top, or horizontal: label on right side).
     * @param {Object} [options.resizeFactor] - To which extent image should be reduced in size (fraction).
     */
    constructor(options) {
      this[_client] = options.client;
      this[_metadata] = new VLWholeSlideMicroscopyImage({
        metadata: options.metadata
      });

      if (this[_metadata].ImageType[2] === 'VOLUME') {
        throw new Error('Viewer cannot render images of type VOLUME.');
      }

      const resizeFactor = options.resizeFactor ? options.resizeFactor : 1;
      const height = this[_metadata].TotalPixelMatrixRows * resizeFactor;
      const width = this[_metadata].TotalPixelMatrixColumns * resizeFactor;
      const extent$1 = [0, // min X
      -(height + 1), // min Y
      width, // max X
      -1 // max Y
      ];

      const imageLoadFunction = (image, src) => {
        console.info('load image');
        const studyInstanceUID = DICOMwebClient.utils.getStudyInstanceUIDFromUri(src);
        const seriesInstanceUID = DICOMwebClient.utils.getSeriesInstanceUIDFromUri(src);
        const sopInstanceUID = DICOMwebClient.utils.getSOPInstanceUIDFromUri(src);
        const mediaType = 'image/png';
        const retrieveOptions = {
          studyInstanceUID: this[_metadata].StudyInstanceUID,
          seriesInstanceUID: this[_metadata].SeriesInstanceUID,
          sopInstanceUID: this[_metadata].SOPInstanceUID,
          mediaTypes: [{
            mediaType
          }],
          queryParams: {
            viewport: [this[_metadata].TotalPixelMatrixRows, this[_metadata].TotalPixelMatrixColumns].join(','),
            iccprofile: 'yes'
          }
        };
        options.client.retrieveInstanceRendered(retrieveOptions).then(thumbnail => {
          const blob = new Blob([thumbnail], {
            type: mediaType
          });
          image.getImage().src = window.URL.createObjectURL(blob);
        });
      };

      const projection = new Projection__default['default']({
        code: 'DICOM',
        units: 'metric',
        extent: extent$1,
        getPointResolution: (pixelRes, point) => {
          /** DICOM Pixel Spacing has millimeter unit while the projection has
           * has meter unit.
           */
          const mmSpacing = _getPixelSpacing(this[_metadata])[0];

          const spacing = mmSpacing / resizeFactor / 10 ** 3;
          return pixelRes * spacing;
        }
      });
      const rasterSource = new Static__default['default']({
        crossOrigin: 'Anonymous',
        imageExtent: extent$1,
        projection: projection,
        imageLoadFunction: imageLoadFunction,
        url: '' // will be set by imageLoadFunction()

      });
      this[_imageLayer] = new ImageLayer__default['default']({
        source: rasterSource
      });
      var rotation = 0;

      if (options.orientation === 'horizontal') {
        const degrees = 90;
        rotation = degrees * (Math.PI / 180);
      }

      const view = new View__default['default']({
        center: extent.getCenter(extent$1),
        rotation: rotation,
        projection: projection
      }); // Creates the map with the defined layers and view and renders it.

      this[_map] = new Map__default['default']({
        layers: [this[_imageLayer]],
        view: view,
        controls: [],
        keyboardEventTarget: document
      });

      this[_map].getView().fit(extent$1);
    }
    /** Renders the image in the specified viewport container.
     * @param {Object} options - Rendering options.
     * @param {(string|HTMLElement)} options.container - HTML Element in which the viewer should be injected.
     */


    render(options) {
      if (!('container' in options)) {
        console.error('container must be provided for rendering images');
      }

      this[_map].setTarget(options.container);

      this[_map].getInteractions().forEach(interaction => {
        this[_map].removeInteraction(interaction);
      });
    }
    /** DICOM metadata for the displayed VL Whole Slide Microscopy Image instance.
     *
     * @type {VLWholeSlideMicroscopyImage}
     */


    get imageMetadata() {
      return this[_metadata];
    }
    /** Resizes the viewer to fit the viewport. */


    resize() {
      this[_map].updateSize();
    }
    /** Gets the size of the viewport.
     *
     * @type {number[]}
     */


    get size() {
      return this[_map].getSize();
    }

  }
  /** Static viewer for DICOM VL Whole Slide Microscopy Image instances
   * with Image Type OVERVIEW.
   *
   * @class
   * @memberof viewer
   */


  class OverviewImageViewer extends _NonVolumeImageViewer {
    /** Creates a viewer instance for displaying OVERVIEW images.
     *
     * @param {Object} options
     * @param {Object} options.client - A DICOMwebClient instance for interacting with an origin server over HTTP.
     * @param {Object} options.metadata - DICOM JSON metadata object for a VL Whole Slide Microscopy Image instance.
     */
    constructor(options) {
      if (!('orientation' in options)) {
        options.orientation = 'horizontal';
      }

      super(options);
    }

  }
  /** Static viewer for DICOM VL Whole Slide Microscopy Image instances
   * with Image Type LABEL.
   *
   * @class
   * @memberof viewer
   */


  class LabelImageViewer extends _NonVolumeImageViewer {
    /** Creates a viewer instance for displaying LABEL images.
     *
     * @param {Object} options
     * @param {Object} options.client - A DICOMwebClient instance for interacting with an origin server over HTTP.
     * @param {Object} options.metadata - DICOM JSON metadata object for a VL Whole Slide Microscopy Image instance.
     */
    constructor(options) {
      if (!('orientation' in options)) {
        options.orientation = 'vertical';
      }

      super(options);
    }

  }

  /** Namespace for the viewer.
   *
   * @namespace api
   * @deprecated use the viewer namespace instead
   */

  const api$3 = {
    VLWholeSlideMicroscopyImageViewer: VolumeImageViewer
  };
  /** Namespace for the viewer.
   *
   * @namespace viewer
   */

  const viewer = {
    LabelImageViewer,
    OverviewImageViewer,
    VolumeImageViewer
  };
  /** Namespace for working with DICOM Metadata.
   *
   * @namespace metadata
   */

  const metadata = {
    formatMetadata,
    VLWholeSlideMicroscopyImage
  };
  /** Namespace for 3-dimensional spatial coordinates (SCOORD3D).
   *
   * @namespace scoord3d
   */

  const scoord3d = {
    Point,
    Multipoint,
    Polyline,
    Polygon,
    Ellipsoid,
    Ellipse
  };
  /** Namespace for regions of interest (ROI).
   *
   * @namespace roi
   */

  const roi = {
    ROI
  };
  /** Namespace for viewer events.
   *
   * @namespace events
   */

  const events = {
    EVENTS
  };
  /** Namespace for various utilities.
   *
   * @namespace utils
   */

  const utils = {
    mapSlideCoordToPixelCoord,
    mapPixelCoordToSlideCoord
  };

  exports.api = api$3;
  exports.events = events;
  exports.metadata = metadata;
  exports.roi = roi;
  exports.scoord3d = scoord3d;
  exports.utils = utils;
  exports.viewer = viewer;

  Object.defineProperty(exports, '__esModule', { value: true });

})));