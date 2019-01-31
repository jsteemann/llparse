export const CONTAINER_KEY = 'js';

export const STATE_PREFIX = 'S_N_';
export const STATE_ERROR = 'S_ERROR';

export const BLOB_PREFIX = 'BLOB_';

export const ARG_CURRENT = 'current';
export const ARG_BUF = 'buf';
export const ARG_OFF = 'off';

// TODO(indutny): remove those
export const ARG_STATE = 'state';
export const ARG_POS = 'p';
export const ARG_ENDPOS = 'endp';

export const VAR_MATCH = 'match';

// MatchSequence

export const SEQUENCE_COMPLETE = 'SEQUENCE_COMPLETE';
export const SEQUENCE_MISMATCH = 'SEQUENCE_MISMATCH';
export const SEQUENCE_PAUSE = 'SEQUENCE_PAUSE';

export const SIGNED_LIMITS: Map<string, [ string, string ]> = new Map();
SIGNED_LIMITS.set('i8', [ '-0x80', '0x7f' ]);
SIGNED_LIMITS.set('i16', [ '-0x8000', '0x7fff' ]);
SIGNED_LIMITS.set('i32', [ '(-0x7fffffff - 1)', '0x7fffffff' ]);
SIGNED_LIMITS.set('i64', [ '(-0x7fffffffffffffffLL - 1)',
    '0x7fffffffffffffffLL' ]);

export const UNSIGNED_LIMITS: Map<string, [ string, string ]> = new Map();
UNSIGNED_LIMITS.set('i8', [ '0', '0xff' ]);
UNSIGNED_LIMITS.set('i8', [ '0', '0xff' ]);
UNSIGNED_LIMITS.set('i16', [ '0', '0xffff' ]);
UNSIGNED_LIMITS.set('i32', [ '0', '0xffffffff' ]);
UNSIGNED_LIMITS.set('i64', [ '0ULL', '0xffffffffffffffffULL' ]);

export const UNSIGNED_TYPES: Map<string, string> = new Map();
UNSIGNED_TYPES.set('i8', 'uint8_t');
UNSIGNED_TYPES.set('i16', 'uint16_t');
UNSIGNED_TYPES.set('i32', 'uint32_t');
UNSIGNED_TYPES.set('i64', 'uint64_t');

export const SIGNED_TYPES: Map<string, string> = new Map();
SIGNED_TYPES.set('i8', 'int8_t');
SIGNED_TYPES.set('i16', 'int16_t');
SIGNED_TYPES.set('i32', 'int32_t');
SIGNED_TYPES.set('i64', 'int64_t');
