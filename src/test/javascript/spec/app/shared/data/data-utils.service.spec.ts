import JhiDataUtils from '@/shared/data/data-utils.service';

describe('Formatter i18n', () => {
  let dataUtilsService: JhiDataUtils;

  beforeEach(() => {
    dataUtilsService = new JhiDataUtils();
  });

  it('should not abbreviate text shorter than 30 characters', () => {
    const result = dataUtilsService.abbreviate('JHipster JHipster');

    expect(result).toBe('JHipster JHipster');
  });

  it('should abbreviate text longer than 30 characters', () => {
    const result = dataUtilsService.abbreviate('JHipster JHipster JHipster JHipster JHipster');

    expect(result).toBe('JHipster JHipst...r JHipster');
  });

  it('should retrieve byteSize', () => {
    const result = dataUtilsService.byteSize('JHipster rocks!');

    expect(result).toBe('11.25 bytes');
  });

  it('should clear input entity', () => {
    const entity = { field: 'key', value: 'value' };
    dataUtilsService.clearInputImage(entity, null, 'field', 'value', 1);

    expect(entity.field).toBeNull();
    expect(entity.value).toBeNull();
  });

  it('should open file', () => {
    let result = null;
    window.open = jest.fn().mockImplementationOnce(() => {
      return { document: { write: data => (result = data) } };
    });

    dataUtilsService.openFile('text', 'data');
    expect(result).toBe(
      '<iframe src="data:text;base64,data" frameborder="0"' +
        ' style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; ' +
        'height:100%;" allowfullscreen></iframe>'
    );
  });
});
