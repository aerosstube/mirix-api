import { BaseException, InternalException, RequestException, ValidationException } from '@core/exceptions';

function mapRequestException(exception: BaseException, requestId?: string): RequestException {
	const code = exception.getCode() ?? InternalException.getCode();
	const isInternalException = code === InternalException.getCode();
	const message = isInternalException ? InternalException.getMessage() : exception.getMessage();
	const validationConstraints = exception instanceof ValidationException ? exception.constraints : undefined;

	return new RequestException(message, code, isInternalException, requestId, validationConstraints);
}

export { mapRequestException };
