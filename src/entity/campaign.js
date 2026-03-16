import { Template } from './template.js';
import { Content } from './message/content.js';
import { Format } from './message/format.js';
import { Metadata } from './message/metadata.js';
import { Schedule } from './message/schedule.js';
import { Options } from './message/options.js';

export class Campaign {
  /**
   * @param {Object} data
   */
  constructor(data) {
    this.id = data.id ? Number(data.id) : 0;
    this.uniqueId = data.unique_id || data.uniqueId || '';
    
    const templateData = data.template;
    this.template = templateData ? new Template(templateData) : null;
    
    const contentData = data.message_content || data.messageContent;
    this.messageContent = contentData ? new Content(contentData) : null;
    
    const formatData = data.message_format || data.messageFormat;
    this.messageFormat = formatData ? new Format(formatData) : null;
    
    const metadataData = data.message_metadata || data.messageMetadata;
    this.messageMetadata = metadataData ? new Metadata(metadataData) : null;
    
    const scheduleData = data.message_schedule || data.messageSchedule;
    this.messageSchedule = scheduleData ? new Schedule(scheduleData) : null;
    
    const optionsData = data.message_options || data.messageOptions;
    this.messageOptions = optionsData ? new Options(optionsData) : null;
  }
}
